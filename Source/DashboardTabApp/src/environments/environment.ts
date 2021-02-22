export const environment = {
    production: false,
    apiBaseUrl: "https://qbotdemo-api.azurewebsites.net/api/Request/",

    authConfig: {
        instance: "https://login.microsoftonline.com/",
        tenantId: "01583be4-f096-49f4-bd19-56b649a8482f",
        clientId: "115c7d88-1bf9-4df2-99ef-d3c415940e1a",
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
