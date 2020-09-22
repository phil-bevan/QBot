export const environment = {
    production: false,
    apiBaseUrl: "https://qbotpaaa-api.azurewebsites.net/api/Request/",

    authConfig: {
        instance: "https://login.microsoftonline.com/",
        tenantId: "232582d6-68db-4349-87a2-4e2512884066",
        clientId: "87fe38b8-6395-4ab5-9fad-e4ac20f7c63f",
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
