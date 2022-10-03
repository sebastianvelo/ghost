import TableBody, { TableBodyProps } from "./body/TableBody";
import TableHeader, { TableHeaderProps } from "./header/TableHeader";

export interface TableProps {
    header: TableHeaderProps;
    body: TableBodyProps;
}

const Table = (props: TableProps) => `
    <div class="bg_0-0-0-90 txt_whitesmoke">
        ${TableHeader(props.header)}
        ${TableBody(props.body)}
    </div>
`;

export default Table;