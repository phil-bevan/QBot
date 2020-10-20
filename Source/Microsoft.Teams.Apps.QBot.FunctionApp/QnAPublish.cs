using Microsoft.Azure.WebJobs;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using Microsoft.Teams.Apps.QBot.Data;
using Microsoft.Teams.Apps.QBot.Model;
using System;

namespace Microsoft.Teams.Apps.QBot.FunctionApp
{


    public static class QnAPublish
    {
        [FunctionName("QnAPublish")]
        public static async void Run([TimerTrigger("0 */5 * * * *")]TimerInfo myTimer, ILogger log, ExecutionContext context)
        {
            log.LogInformation($"QnAPublish function executed at: {DateTime.Now}");

            var config = new ConfigurationBuilder()
                .SetBasePath(context.FunctionAppDirectory)
                .AddJsonFile("local.settings.json", optional: true, reloadOnChange: true)
                .AddEnvironmentVariables()
                .Build();
            log.LogInformation($"Created base Config");
            // Get courses from database
            var cs = config.GetConnectionString("QBotEntities");
            try
            {
                var courses = SQLAdapter.GetCourses(cs);
                var courseModels = ModelMapper.MapToCourseModels(courses);
                log.LogInformation($"Mapped {courseModels.Count} course models.  Iterating...");
                foreach (var course in courseModels)
                {
                    log.LogInformation($"Course: {course.Name}");
                    // For each course, get keys
                    log.LogInformation("Creating QnAService instance");
                    var qnaService = new QnAService(course.PredictiveQnAKnowledgeBaseId, course.PredictiveQnAHttpEndpoint, course.PredictiveQnAHttpKey);
                    // For each course, call publish
                    var result = await qnaService.PublishQnA();

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
