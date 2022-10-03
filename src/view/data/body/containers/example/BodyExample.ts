interface BodyExampleProps {
    classNames: string[];
    aditionalClassName?: string;
    content?: string;
    tag?: string;
}

const ClassNameExample = (className: string, aditionalClassName?: string, content?: string, tag: string = "div") => `
    <div class="d_flex fd_col align-items_center h_max-content">
        <h2 class="txt_20-20-20">.${className}</h2>
        <${tag} class="${aditionalClassName} ${className}">
            ${content ?? ""}
        </${tag}>
    </div>
`;

const BodyExample = (props: BodyExampleProps) => `
    <div class="d_grid cols_3">
        ${props.classNames.map(className => ClassNameExample(className, props.aditionalClassName, props.content, props.tag)).join(" ")}
    </div>
`;

export default BodyExample;