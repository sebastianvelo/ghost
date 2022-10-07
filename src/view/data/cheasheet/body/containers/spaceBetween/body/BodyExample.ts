import GenericClassNameExample from "../../../common/body/GenericClassNameExample";

const ClassNameExample = (className: string, isRow?: boolean) => GenericClassNameExample(className, `
    <div class="bg_secondary">
        <div class="${isRow ? "d_flex" : "d_block"} ${className}">
            <div class="w_50 h_50 bg_0-255-255-100"></div>
            <div class="w_50 h_50 bg_0-255-255-90"></div>
            <div class="w_50 h_50 bg_0-255-255-80"></div>
            <div class="w_50 h_50 bg_0-255-255-70"></div>
            <div class="w_50 h_50 bg_0-255-255-60"></div>
        </div>
    </div>
`);

const SpaceBetweenExample = (classNames: string[], isRow?: boolean) => `
    <div class="d_grid align-items_center ${!isRow ? "cols_4" : "cols_2"}">
        ${classNames.map((className) => ClassNameExample(className, isRow)).join(" ")}
    </div>
`;

export default SpaceBetweenExample;