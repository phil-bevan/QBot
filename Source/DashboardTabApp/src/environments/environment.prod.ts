export const environment = {
    production: false,
    apiBaseUrl: "https://qboticsai-api.azurewebsites.net/api/Request/",

    authConfig: {
        instance: "https://login.microsoftonline.com/",
        tenantId: "66340438-908e-4dad-ba32-eba8cec70bb7",
        clientId: "938359dd-a354-4ead-8863-5473455aed57",
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
