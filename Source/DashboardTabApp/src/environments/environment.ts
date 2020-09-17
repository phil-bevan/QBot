export const environment = {
    production: false,
    apiBaseUrl: "https://qbotpbi-api.azurewebsites.net/api/Request/",

    authConfig: {
        instance: "https://login.microsoftonline.com/",
        tenantId: "14d57f01-ed3c-44c1-ad8a-48174f1e8e62",
        clientId: "ec98b9b9-8418-47ce-bd91-c91d16fbe063",
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
};
