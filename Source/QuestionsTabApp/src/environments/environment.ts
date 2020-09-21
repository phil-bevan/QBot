export const environment = {
    production: false,
    apiBaseUrl: "https://qbotpbbb-api.azurewebsites.net/api/Request/",
    selfUrl: "https://qbotpbbb-questions.azurewebsites.net",

    authConfig: {
        instance: "https://login.microsoftonline.com/",
        tenantId: "232582d6-68db-4349-87a2-4e2512884066",
        clientId: "67531a4d-61ce-408b-a6f4-13850ea9c9d4",
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
