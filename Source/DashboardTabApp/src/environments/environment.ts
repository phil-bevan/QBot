export const environment = {
    production: false,
    apiBaseUrl: "https://qbotpbi-api.azurewebsites.net/api/Request/",

    authConfig: {
        instance: "https://login.microsoftonline.com/",
        tenantId: "14d57f01-ed3c-44c1-ad8a-48174f1e8e62",
        clientId: "8237bf74-f859-496f-9f85-d809a821f2f0",
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
