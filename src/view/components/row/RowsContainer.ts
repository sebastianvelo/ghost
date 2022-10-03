import Row, { RowProps } from "./Row";

export interface RowsContainersProps {
    title: string;
    rows: RowProps[];
}

const RowsContainer = (props: RowsContainersProps) => `
    <details>
        <summary class="d_block">
            <h2 class="bg_primary bg_0-0-150:hover p_16">${props.title}</h2>
        </summary>
        ${props.rows.map(Row).join(" ")}
    </details>
`;

export default RowsContainer;