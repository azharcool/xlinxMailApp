export enum Routes {
    Activate = "activateScreen",
    Login= "loginScreen",
    Language = "languageScreen",
    Inbox = "InboxScreen"
}

export type RootStackParamList = {
    [Routes.Activate]: undefined;
    [Routes.Login]: undefined;
    [Routes.Language]: undefined;
    [Routes.Inbox]: undefined;
};