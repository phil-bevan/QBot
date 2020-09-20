export const environment = {
    production: false,
    apiBaseUrl: "https://qbotpbzz-api.azurewebsites.net/api/Request/",
    selfUrl: "https://qbotpbzz-questions.azurewebsites.net",

    authConfig: {
        instance: "https://login.microsoftonline.com/",
        tenantId: "ad25ac0c-8d8e-483d-839a-bd0457968ecb",
        clientId: "646ca026-68b0-4d5e-ae33-7340c0fa86e7",
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
