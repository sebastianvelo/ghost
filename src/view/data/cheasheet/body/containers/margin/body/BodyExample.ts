import GenericClassNameExample from "../../../common/body/GenericClassNameExample";

const ClassNameExample = (className: string, fullRowExample?: boolean) =>
    GenericClassNameExample(className, `
        <div class="bg_0-0-0-50 max-w_max-content">
            <div class="d_flex m_0">
                <div class="w_50 h_50 bg_0-255-255-100"></div>
                <div class="w_50 h_50 bg_0-255-255-90"></div>
                <div class="w_50 h_50 bg_0-255-255-80"></div>
            </div>
            <div class="d_flex ${fullRowExample ? className : ""}">
                <div class="w_50 h_50 ${fullRowExample ? "bg_secondary" : "bg_0-255-255-70"}"></div>
                <div class="w_50 h_50 bg_secondary ${!fullRowExample ? className : ""}"></div>
                <div class="w_50 h_50 ${fullRowExample ? "bg_secondary" : "bg_0-255-255-60"}"></div>
            </div>
            <div class="d_flex m_0">
                <div class="w_50 h_50 bg_0-255-255-50"></div>
                <div class="w_50 h_50 bg_0-255-255-40"></div>
                <div class="w_50 h_50 bg_0-255-255-30"></div>
            </div>
        </div>
    `);

const MarginBodyExample = (classNames: string[], fullRowExample?: boolean) => `
    <div class="d_grid align-items_center cols_4">
        ${classNames.map((className) => ClassNameExample(className, fullRowExample)).join(" ")}
    </div>
`;

export default MarginBodyExample;