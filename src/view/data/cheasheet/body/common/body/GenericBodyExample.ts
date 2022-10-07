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

const GenericBodyExample = (props: BodyExampleProps) => `
    <div class="d_grid cols_3 gap_4 place-items_stretch">
        ${props.classNames.map(className => ClassNameExample(className, props.aditionalClassName, props.content, props.tag)).join(" ")}
    </div>
`;

export default GenericBodyExample;