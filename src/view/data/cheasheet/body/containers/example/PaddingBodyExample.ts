import GenericClassNameExample from "./GenericClassNameExample";

const ClassNameExample = (className: string) =>
    GenericClassNameExample(className, `
        <div class="bg_0-0-0-75 d_flex ${className}">
            <div class="w_50 h_50 bg_75-0-130"></div>
            <div class="w_50 h_50 bg_75-0-150"></div>
            <div class="w_50 h_50 bg_75-0-170"></div>
        </div>
    `);

const PaddingBodyExample = (classNames: string[]) => `
    <div class="d_grid cols_4">
        ${classNames.map(ClassNameExample).join(" ")}
    </div>
`;

export default PaddingBodyExample;