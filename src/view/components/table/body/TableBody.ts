import RowsContainer, { RowsContainersProps } from "../../row/RowsContainer";

export interface TableBodyProps {
    containers: RowsContainersProps[];
}

const TableBody = (props: TableBodyProps) => `
    <div class="p_12 space-y_16">
        ${props.containers.map(RowsContainer).join(" ")}
    </div>
`;

export default TableBody;