export const environment = {
    production: false,
    apiBaseUrl: "https://qbotixx-api.azurewebsites.net/api/Request/",

    authConfig: {
        instance: "https://login.microsoftonline.com/",
        tenantId: "01583be4-f096-49f4-bd19-56b649a8482f",
        clientId: "78d020dc-1e7d-4e0d-81cf-5463716a5225",
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
