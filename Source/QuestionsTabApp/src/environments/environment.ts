export const environment = {
    production: false,
    apiBaseUrl: "https://qbotpbbb-api.azurewebsites.net/api/Request/",
    selfUrl: "https://qbotpbbb-questions.azurewebsites.net",

    authConfig: {
        instance: "https://login.microsoftonline.com/",
        tenantId: "232582d6-68db-4349-87a2-4e2512884066",
        clientId: "9b282f31-4306-44e3-8aff-074e2b6331b0",
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
