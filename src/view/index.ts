import getPageFromLocation from "./components/pages/Pages";

const Main = document.querySelector("#main");

const render = () => {
    Main!.innerHTML = getPageFromLocation();
}

export default render;