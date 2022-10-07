import GenericClassNameExample from "../../../common/body/GenericClassNameExample";

const ClassNameExample = (className: string) =>
    GenericClassNameExample(className, `
    <div class="d_grid cols_4 rows_2 justify-items_stretch w_600 h_200 bg_0-0-0-50">
        <div class="min-h_50 min-w_50 bg_0-255-255-100"></div>
        <div class="min-h_50 min-w_50 bg_0-255-255-90"></div>
        <div class="min-h_50 min-w_50 bg_secondary ${className}"></div>
        <div class="min-h_50 min-w_50 bg_0-255-255-80"></div>
        <div class="min-h_50 min-w_50 bg_0-255-255-70"></div>
        <div class="min-h_50 min-w_50 bg_0-255-255-60"></div>
        <div class="min-h_50 min-w_50 bg_0-255-255-50"></div>
        <div class="min-h_50 min-w_50 bg_0-255-255-40"></div>
    </div>
`);

const AlignmentSelfBodyExample = (classNames: string[]) => `
    <div class="d_grid place-items_stretch cols_2 gap_4">
        ${classNames.map(ClassNameExample).join(" ")}
    </div>
`;

export default AlignmentSelfBodyExample;