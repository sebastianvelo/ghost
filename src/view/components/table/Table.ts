import TableBody, { TableBodyProps } from "./body/TableBody";
import { TableHeaderProps } from "./header/TableHeader";

export interface TableProps {
    header: TableHeaderProps;
    body: TableBodyProps;
}

const Table = (props: TableProps) => `
    <div class="bg_0-0-0-90 txt_whitesmoke">
        ${TableBody(props.body)}
    </div>
`;

export default Table;