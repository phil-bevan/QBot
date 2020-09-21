export const environment = {
    production: false,
    apiBaseUrl: "https://qbotpbyy-api.azurewebsites.net/api/Request/",

    authConfig: {
        instance: "https://login.microsoftonline.com/",
        tenantId: "d700b6bb-8071-4dd4-9e66-63d305397a30",
        clientId: "a7faea5d-2f8b-4c02-85c9-e863a7667825",
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
