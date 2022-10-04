import GenericClassNameExample from "./GenericClassNameExample";

const ClassNameExample = (className: string) =>
    GenericClassNameExample(className, `
    <div class="d_grid cols_4 rows_2 justify-items_stretch w_600 h_200 bg_0-0-0-50">
        <div class="min-h_50 min-w_50 bg_0-255-255-100"></div>
        <div class="min-h_50 min-w_50 bg_0-255-255-90"></div>
        <div class="min-h_50 min-w_50 bg_primary ${className}"></div>
        <div class="min-h_50 min-w_50 bg_0-255-255-80"></div>
        <div class="min-h_50 min-w_50 bg_0-255-255-70"></div>
        <div class="min-h_50 min-w_50 bg_0-255-255-60"></div>
        <div class="min-h_50 min-w_50 bg_0-255-255-50"></div>
        <div class="min-h_50 min-w_50 bg_0-255-255-40"></div>
    </div>
`);

const AlignmentSelfBodyExample = (classNames: string[]) => `
    <div class="d_grid align-items_center cols_3">
        ${classNames.map(ClassNameExample).join(" ")}
    </div>
`;

export default AlignmentSelfBodyExample;