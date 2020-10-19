export const environment = {
    production: false,
    apiBaseUrl: "https://qbotics-api.azurewebsites.net/api/Request/",
    selfUrl: "https://qbotics-questions.azurewebsites.net",

    authConfig: {
        instance: "https://login.microsoftonline.com/",
        tenantId: "66340438-908e-4dad-ba32-eba8cec70bb7",
        clientId: "7cbed6ec-cb10-4a6e-a654-66a36de2456b",
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
