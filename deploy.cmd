@if "%SCM_TRACE_LEVEL%" NEQ "4" @echo off
:: Kludge to force a delay while testing
ping 192.0.2.1 -n 1 -w 60000 >nul
IF "%SITE_ROLE%" == "bot" (
  deploy.bot.cmd
) ELSE (
	IF "%SITE_ROLE%" == "dashboard" (
		deploy.dashboard.cmd
	) ELSE (
		IF "%SITE_ROLE%" == "questions" (
			deploy.questions.cmd
		) ELSE (
			IF "%SITE_ROLE%" == "function" (
				deploy.function.cmd
			) ELSE (
				echo You have to set SITE_ROLE setting to either "bot" or "dashboard" or "questions" or "function"
				exit /b 1
			)
		)
	)
)
