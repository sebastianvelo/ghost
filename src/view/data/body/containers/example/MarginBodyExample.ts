const ClassNameExample = (className: string, fullRowExample?: boolean) => `
    <div class="d_flex fd_col">
        <h2 class="txt_20-20-20">.${className}</h2>
        <div class="bg_0-0-0-50 max-w_max-content">
            <div class="d_flex m_0">
                <div class="w_50 h_50 bg_255-255-255-50"></div>
                <div class="w_50 h_50 bg_255-255-255-75"></div>
                <div class="w_50 h_50 bg_255-255-255-25"></div>
            </div>
            <div class="d_flex ${fullRowExample ? className : ""}">
                <div class="w_50 h_50 ${fullRowExample ? "bg_violet" : "bg_255-255-255-75"}"></div>
                <div class="w_50 h_50 bg_indigo ${!fullRowExample ? className : ""}"></div>
                <div class="w_50 h_50 ${fullRowExample ? "bg_purple" : "bg_255-255-255-50"}"></div>
            </div>
            <div class="d_flex m_0">
                <div class="w_50 h_50 bg_255-255-255-25"></div>
                <div class="w_50 h_50 bg_255-255-255-50"></div>
                <div class="w_50 h_50 bg_255-255-255-75"></div>
            </div>
        </div>
    </div>
`;

const MarginBodyExample = (classNames: string[], fullRowExample?: boolean) => `
    <div class="d_grid align-items_center cols_4">
        ${classNames.map((className) => ClassNameExample(className, fullRowExample)).join(" ")}
    </div>
`;

export default MarginBodyExample;