export const environment = {
    production: false,
    apiBaseUrl: "https://qbotabc-api.azurewebsites.net/api/Request/",
    selfUrl: "https://qbotabc-questions.azurewebsites.net",

    authConfig: {
        instance: "https://login.microsoftonline.com/",
        tenantId: "403978b8-6903-41ce-a736-21ad842a1a28",
        clientId: "9da44c89-2e47-4eb1-bfaa-b7c5d079b08d",
        redirectUri: "/app-silent-end",
        cacheLocation: "localStorage",
        navigateToLoginRequestUrl: false,
        extraQueryParameters: "",
        popUp: true,
        popUpUri: "/app-silent-start",
        popUpWidth: 600,
        popUpHeight: 535
    },

    // do not populate the following:
    upn: "",
    tid: "",
    gid: "",
    cname: ""
};
