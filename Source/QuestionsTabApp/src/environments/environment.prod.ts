export const environment = {
    production: false,
    apiBaseUrl: "https://qbotixx-api.azurewebsites.net/api/Request/",
    selfUrl: "https://qbotixx-questions.azurewebsites.net",

    authConfig: {
        instance: "https://login.microsoftonline.com/",
        tenantId: "66340438-908e-4dad-ba32-eba8cec70bb7",
        clientId: "1f7775c9-4825-4aac-a2ee-b6ef576c11e4",
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
