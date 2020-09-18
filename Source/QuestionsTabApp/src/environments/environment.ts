export const environment = {
    production: false,
    apiBaseUrl: "https://qbotpbii-api.azurewebsites.net/api/Request/",
    selfUrl: "https://qbotpbii-questions.azurewebsites.net",

    authConfig: {
        instance: "https://login.microsoftonline.com/",
        tenantId: "14d57f01-ed3c-44c1-ad8a-48174f1e8e62",
        clientId: "dd657caa-4b12-4bfc-8f5d-2bdb00c8cb0b",
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
