import CheatsheetPage from "./cheatsheet/CheatsheetPage";
import ErrorPage from "./error/ErrorPage";

const Pages: { [key: string]: string } = {
    "/cheatsheet": CheatsheetPage,
};

const getPageFromLocation = () => {
    const Page = Pages[window.location.pathname];
    if (Page)
        return Page;
    return ErrorPage();
};

export default getPageFromLocation;