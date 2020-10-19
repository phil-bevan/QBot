export const environment = {
    production: false,
    apiBaseUrl: "https://qbotdemo-api.azurewebsites.net/api/Request/",
    selfUrl: "https://qbotdemo-questions.azurewebsites.net",

    authConfig: {
        instance: "https://login.microsoftonline.com/",
        tenantId: "66340438-908e-4dad-ba32-eba8cec70bb7",
        clientId: "9e670e54-7a3d-4f6a-a20e-9b7c932c0368",
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
