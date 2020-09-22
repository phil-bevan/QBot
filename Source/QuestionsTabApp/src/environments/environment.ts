export const environment = {
    production: false,
    apiBaseUrl: "https://qbotdemo-api.azurewebsites.net/api/Request/",
    selfUrl: "https://qbotdemo-questions.azurewebsites.net",

    authConfig: {
        instance: "https://login.microsoftonline.com/",
        tenantId: "d700b6bb-8071-4dd4-9e66-63d305397a30",
        clientId: "9b44ac05-be3b-48d8-ac1a-29aa62e6bb59",
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
