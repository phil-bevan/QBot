export const environment = {
    production: false,
    apiBaseUrl: "https://qbotabc-api.azurewebsites.net/api/Request/",

    authConfig: {
        instance: "https://login.microsoftonline.com/",
        tenantId: "403978b8-6903-41ce-a736-21ad842a1a28",
        clientId: "c00fc84e-11e2-403c-b322-d8ddab416d7f",
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
