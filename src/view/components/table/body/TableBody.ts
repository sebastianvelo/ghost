import RowsContainer, { RowsContainersProps } from "../../row/RowsContainer";

export interface TableBodyProps {
    containers: RowsContainersProps[];
}

const TableBody = (props: TableBodyProps) => `
    <div class="mt_75 p_12">
        ${props.containers.map(RowsContainer).join(" ")}
    </div>
`;

export default TableBody;