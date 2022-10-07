const Column = (column: string, span = 1) =>
    `<p class="txt-weight_bold txt-size_26 col-span_${span}">${column}</p>`;

export interface TableHeaderProps {
    columns: string[];
}

const TableHeader = (props: TableHeaderProps) => ` 
    <div class="px_32px d_grid cols_6 border-b_2 bg_secondary box_border top_0">
        ${Column(props.columns[0])}
        ${Column(props.columns[1])}
        ${Column(props.columns[2], 2)}
        ${Column(props.columns[3], 2)}
    </div>
`;

export default TableHeader;