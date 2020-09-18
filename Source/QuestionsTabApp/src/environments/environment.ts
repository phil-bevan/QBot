export const environment = {
    production: false,
    apiBaseUrl: "https://qbotpbzz-api.azurewebsites.net/api/Request/",
    selfUrl: "https://qbotpbzz-questions.azurewebsites.net",

    authConfig: {
        instance: "https://login.microsoftonline.com/",
        tenantId: "d700b6bb-8071-4dd4-9e66-63d305397a30",
        clientId: "5d63b80d-5ce0-409f-9ae4-f584220ea808",
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
