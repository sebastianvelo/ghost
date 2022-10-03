const Column = (column: string, span = 1) =>
    `<p class="txt-weight_bold txt-size_26 col-span_${span}">${column}</p>`;

const Columns = (columns: string[]) => columns.map(Column).join(" ");

export interface TableHeaderProps {
    columns: string[];
}

const TableHeader = (props: TableHeaderProps) => `
    <div class="px_32px d_grid cols_6 border-b_2 pos_fixed bg_primary w_100vw top_0">
        ${Column(props.columns[0])}
        ${Column(props.columns[1])}
        ${Column(props.columns[2], 2)}
        ${Column(props.columns[3], 2)}
    </div>
`;

export default TableHeader;