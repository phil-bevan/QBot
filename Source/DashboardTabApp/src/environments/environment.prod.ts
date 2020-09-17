export const environment = {
    production: false,
    apiBaseUrl: "https://qbotpbi-api.azurewebsites.net/api/Request/",

    authConfig: {
        instance: "https://login.microsoftonline.com/",
        tenantId: "14d57f01-ed3c-44c1-ad8a-48174f1e8e62",
        clientId: "b418c0e7-a5f1-4fee-a577-6007aeb5babd",
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
