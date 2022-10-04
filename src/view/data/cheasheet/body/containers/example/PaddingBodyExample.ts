import GenericClassNameExample from "./GenericClassNameExample";

const ClassNameExample = (className: string) =>
    GenericClassNameExample(className, `
        <div class="d_flex bg_primary ${className}">
            <div class="w_50 h_50 bg_0-255-255-100"></div>
            <div class="w_50 h_50 bg_0-255-255-80"></div>
            <div class="w_50 h_50 bg_0-255-255-60"></div>
        </div>
    `);

const PaddingBodyExample = (classNames: string[]) => `
    <div class="d_grid cols_4">
        ${classNames.map(ClassNameExample).join(" ")}
    </div>
`;

export default PaddingBodyExample;