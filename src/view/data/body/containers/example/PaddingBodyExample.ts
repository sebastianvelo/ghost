const ClassNameExample = (className: string) => `
    <div class="d_flex fd_col align-items_center justify_between">
        <h2 class="txt_20-20-20">.${className}</h2>
        <div class="bg_0-0-0-50 d_flex ${className}">
            <div class="w_50 h_50 bg_violet"></div>
            <div class="w_50 h_50 bg_indigo"></div>
            <div class="w_50 h_50 bg_purple"></div>
        </div>
    </div>
`;

const PaddingBodyExample = (classNames: string[]) => `
    <div class="d_grid cols_4">
        ${classNames.map(ClassNameExample).join(" ")}
    </div>
`;

export default PaddingBodyExample;