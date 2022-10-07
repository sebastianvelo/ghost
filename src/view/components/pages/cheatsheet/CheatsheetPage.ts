import CheatsheetData from "../../../data/cheasheet/CheatsheetData";
import CheatsheetTable from "./body/CheatsheetBody";

const CheatsheetPage = `
    <h2 class="txt-size_42 p_0 txt_primaryLight">Cheatsheet</h2>
    ${CheatsheetTable(CheatsheetData)}
`;

export default CheatsheetPage;