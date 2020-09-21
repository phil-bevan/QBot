export const environment = {
    production: false,
    apiBaseUrl: "https://qbotpbbb-api.azurewebsites.net/api/Request/",

    authConfig: {
        instance: "https://login.microsoftonline.com/",
        tenantId: "232582d6-68db-4349-87a2-4e2512884066",
        clientId: "c8ddf274-c445-4508-bbd1-cbca03ba7a42",
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
