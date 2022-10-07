const Tag = (tag: string) => `<span class="txt_86-156-214">${tag}</span>`;
const Attr = (attr: string) => `<span class="txt_91-203-254">${attr}</span>`;
const Value = (value: string) => `<span class="txt_206-145-101">${value}</span>`;

const EscapedDiv = (tag: string = "div", className: string) => `
<pre>
    &lt;${Tag(tag)} ${Attr("class")}=${Value(`"${className} ..."`)}&gt;	
        ...
    &lt;/${Tag(tag)}&gt;
</pre>`;

const GenericClassNameExample = (className: string, content?: string) => `
    <div class="d_flex fd_col justify_between align-items_center h_max-content min-w_70% py_16 px_32 border-b_2-primary border-x_1-primary rounded_0.25rem">
        <h2 class="bg_black txt-size_12 w_100% border_1-fff rounded_0.25rem ">
             ${EscapedDiv(content?.split("<").join(" ").trim().split(" ")[0].replace(/>/, ""), className)}
        </h2>
        ${content ?? ""}
    </div>
`;
export default GenericClassNameExample;