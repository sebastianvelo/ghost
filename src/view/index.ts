import getPageFromLocation from "./components/pages/Pages";
import App from "./App";
import Layout from "./components/layout/Layout";

const render = () => {
    const page = getPageFromLocation();
    App!.innerHTML = Layout(page);
}

export default render;