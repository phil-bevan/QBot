export const environment = {
    production: false,
    apiBaseUrl: "https://qbotpbi.azurewebsites.net/api/Request/",
    selfUrl: "https://qbotpbi-questions.azurewebsites.net",

    authConfig: {
        instance: "https://login.microsoftonline.com/",
        tenantId: "4ea601d2-0c43-4e42-8e98-a346360a6a13",
        clientId: "ca32e5e1-8007-4b62-aad6-78810ff7018a",
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
