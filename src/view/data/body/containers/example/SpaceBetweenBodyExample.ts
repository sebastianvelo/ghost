const ClassNameExample = (className: string, isRow?: boolean) => `
    <div class="d_flex fd_col">
        <h2 class="txt_20-20-20">.${className}</h2>
        <div class="bg_0-0-0-50 max-w_max-content">
            <div class="${isRow ? "d_flex" : "d_block"} ${className}">
                <div class="w_50 h_50 bg_violet"></div>
                <div class="w_50 h_50 bg_indigo"></div>
                <div class="w_50 h_50 bg_blue"></div>
                <div class="w_50 h_50 bg_green"></div>
                <div class="w_50 h_50 bg_purple"></div>
            </div>
        </div>
    </div>
`;

const SpaceBetweenExample = (classNames: string[], isRow?: boolean) => `
    <div class="d_grid align-items_center ${!isRow ? "cols_4" : ""}">
        ${classNames.map((className) => ClassNameExample(className, isRow)).join(" ")}
    </div>
`;

export default SpaceBetweenExample;