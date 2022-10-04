import GenericClassNameExample from "./GenericClassNameExample";

interface BodyExampleProps {
    classNames: string[];
    aditionalClassName?: string;
    content?: string;
    tag?: string;
}

const ClassNameExample = (className: string, aditionalClassName?: string, content?: string, tag: string = "div") =>
    GenericClassNameExample(className, `
        <${tag} class="${aditionalClassName} ${className}">
            ${content ?? ""}
        </${tag}>
    `);

const BodyExample = (props: BodyExampleProps) => `
    <div class="d_grid cols_3">
        ${props.classNames.map(className => ClassNameExample(className, props.aditionalClassName, props.content, props.tag)).join(" ")}
    </div>
`;

export default BodyExample;