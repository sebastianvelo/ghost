import CheatsheetPage from "./cheatsheet/CheatsheetPage";
import ErrorPage from "./error/ErrorPage";

const Pages: { [key: string]: string } = {
    "#/cheatsheet": CheatsheetPage,
};

const getPageFromLocation = () => {
    const Page = Pages[window.location.hash];
    return Page ?? ErrorPage();
};

export default getPageFromLocation;