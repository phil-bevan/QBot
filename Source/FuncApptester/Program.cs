using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
//using System.Configuration;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.Teams.Apps.QBot.Data;
using Microsoft.Teams.Apps.QBot.Model;
using Microsoft.Teams.Apps.QBot.Bot.Services;

namespace FuncApptester
{
    class Program
    {
        static void Main(string[] args)
        {
        }

        public static async void Run(ILogger log)
        {
            log.LogInformation($"QnAPublish function executed at: {DateTime.Now}");

            //var config = new ConfigurationBuilder()
            //.SetBasePath(context.FunctionAppDirectory)
            //.AddJsonFile("local.settings.json", optional: true, reloadOnChange: true)
            //  .AddEnvironmentVariables()
            //.Build();
            //log.LogInformation($"Created base Config");
            // Get courses from database
            var cs = "metadata=res://*/QuestionBotModel.csdl|res://*/QuestionBotModel.ssdl|res://*/QuestionBotModel.msl;provider=System.Data.SqlClient;provider connection string='data source=qboticsai-sqlazure.database.windows.net;initial catalog=qboticsai-db;user id=sqladmin;password=R4nd0mStr!ng;MultipleActiveResultSets=True;App=EntityFramework'providerName='System.Data.EntityClient'";//config.GetConnectionString("QBotEntities");
            log.LogInformation($"QBotEntities ConnStr: {cs}");
            try
            {
                var courses = SQLAdapter.GetCourses(cs);
                log.LogInformation($"Found {courses.Count} courses");
                var courseModels = ModelMapper.MapToCourseModels(courses);
                log.LogInformation($"Mapped {courseModels.Count} course models.  Iterating...");
                foreach (var course in courseModels)
                {
                    log.LogInformation($"Course: {course.Name}");
                    // For each course, get keys
                    log.LogInformation("Creating QnAService instance");
                    var qnaService = new QnAService(course.PredictiveQnAKnowledgeBaseId, course.PredictiveQnAHttpEndpoint, course.PredictiveQnAHttpKey);
                    log.LogInformation($"Calling Publish");
                    // For each course, call publish
                    var result = await qnaService.PublishQnA();
                    log.LogInformation($"Result: {result}");

                    if (result)
                    {
                        log.LogInformation($"PublishQnA SUCCEEDED for courseId: {course.Id}, courseName: {course.Name}");
                    }
                    else
                    {
                        log.LogInformation($"PublishQnA FAILED for courseId: {course.Id}, courseName: {course.Name}");
                    }

                    log.LogInformation($"QnAPublish function completed at: {DateTime.Now}");
                }
            }
            catch (Exception e)
            {
                log.LogError(e.Message);
                log.LogError(e.StackTrace);
            }


        }


    }
}
