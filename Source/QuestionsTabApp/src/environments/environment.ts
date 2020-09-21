export const environment = {
    production: false,
    apiBaseUrl: "https://qbotpbyy-api.azurewebsites.net/api/Request/",
    selfUrl: "https://qbotpbyy-questions.azurewebsites.net",

    authConfig: {
        instance: "https://login.microsoftonline.com/",
        tenantId: "d700b6bb-8071-4dd4-9e66-63d305397a30",
        clientId: "cbe41224-5303-4ca6-931f-8b4d65f2aa8b",
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
