import GenericClassNameExample from "../../../common/body/GenericClassNameExample";

const ClassNameExample = (className: string) =>
    GenericClassNameExample(className, `
    <div class="d_grid cols_4 w_200 h_200 bg_0-0-0-50">
        <div class="bg_0-255-255-100"></div>
        <div class="bg_0-255-255-90"></div>
        <div class="bg_0-255-255-80"></div>
        <div class="bg_0-255-255-60"></div>
        <div class="bg_secondary ${className}"></div>
        <div class="bg_0-255-255-30"></div>
        <div class="bg_0-255-255-20"></div>
        <div class="bg_0-255-255-10"></div>
    </div>
`);

const GridSpanStartEndBodyExample = (classNames: string[]) => `
    <div class="d_grid align-items_center cols_3">
        ${classNames.map(ClassNameExample).join(" ")}
    </div>
`;

export default GridSpanStartEndBodyExample;