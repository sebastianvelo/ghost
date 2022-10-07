import getPageFromLocation from "./components/pages/Pages";
import App from "./App";
import Layout from "./layout/Layout";

const render = () => {
    const main = getPageFromLocation();
    App!.innerHTML = Layout(main);
}

export default render;