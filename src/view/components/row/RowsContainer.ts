import CheatsheetHeaderData from "../../data/cheasheet/header/CheatsheetHeaderData";
import TableHeader from "../table/header/TableHeader";
import Row, { RowProps } from "./Row";

export interface RowsContainersProps {
    title: string;
    rows: RowProps[];
}

const Toggler = (title: string) => `
<summary class="d_block">
    <h2 class="bg_primary bg_primaryLight:hover txt_black rounded_0.5rem transition_background-color duration_500 timing-function_ease-in-out p_16 m_0">
        ${title}
    </h2>
</summary>
`;

const Chart = (rows: RowProps[]) => `
    <div class="">
        ${TableHeader(CheatsheetHeaderData)}
        ${rows.map(Row).join(" ")}
    </div>
`;

const RowsContainer = (props: RowsContainersProps) => `
    <details>
        ${Toggler(props.title)}
        ${Chart(props.rows)}
    </details>
`;

export default RowsContainer;