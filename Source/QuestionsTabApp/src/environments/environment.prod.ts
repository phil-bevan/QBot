export const environment = {
    production: false,
    apiBaseUrl: "https://icsqbotdemo-api.azurewebsites.net/api/Request/",
    selfUrl: "https://icsqbotdemo-questions.azurewebsites.net",

    authConfig: {
        instance: "https://login.microsoftonline.com/",
        tenantId: "01583be4-f096-49f4-bd19-56b649a8482f",
        clientId: "1360b9e7-84a2-42c2-ad37-2f0dd2faa76a",
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
