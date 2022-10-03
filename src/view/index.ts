import Table from "./components/table/Table";
import TableData from "./data/TableData";

const table = Table(TableData);

const Main = document.querySelector("#main");

const render = () => {
    Main!.innerHTML = table;
}

export default render;