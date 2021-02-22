export const environment = {
    production: false,
    apiBaseUrl: "https://icsqbotdemo-api.azurewebsites.net/api/Request/",
    selfUrl: "https://icsqbotdemo-questions.azurewebsites.net",

    authConfig: {
        instance: "https://login.microsoftonline.com/",
        tenantId: "01583be4-f096-49f4-bd19-56b649a8482f",
        clientId: "096e806c-84e9-45d8-ab79-1f2405e7cdc7",
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
    gid: "",
    cname: ""
};
