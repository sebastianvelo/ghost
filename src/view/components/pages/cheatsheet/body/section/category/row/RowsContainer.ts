import CheatsheetHeaderData from "../../../../../../../data/cheasheet/header/CheatsheetHeaderData";
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

const Column = (column: string, span = 1) => `<p class="txt-weight_bold txt-size_26 col-span_${span}">${column}</p>`;

const Chart = (rows: RowProps[]) => `
    <div class="border-b_2-primary">
        <div class="px_32px d_grid cols_6 border-b_2 bg_secondary box_border top_0">
            ${Column(CheatsheetHeaderData.columns[0])}
            ${Column(CheatsheetHeaderData.columns[1])}
            ${Column(CheatsheetHeaderData.columns[2], 2)}
            ${Column(CheatsheetHeaderData.columns[3], 2)}
        </div>
        ${rows.map(Row).join(" ")}
    </div>
`;

const RowsContainer = (props: RowsContainersProps) => `
    <details>
        ${Toggler(`${props.title} (${props.rows.length})`)}
        ${Chart(props.rows)}
    </details>
`;

export default RowsContainer;