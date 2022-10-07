const Tag = (tag: string) => `<span class="txt_86-156-214">${tag}</span>`;
const Attr = (attr: string) => `<span class="txt_91-203-254">${attr}</span>`;
const Value = (value: string) => `<span class="txt_206-145-101">${value}</span>`;

const EscapedDiv = (tag: string = "div", className: string) => `
<pre>
    &lt;${Tag(tag)} ${Attr("class")}=${Value(`"${className} ..."`)}&gt;	
        ...
    &lt;/${Tag(tag)}&gt;
</pre>`;

const FakeBrowser = (content: string) => `
<div class="w_100% h_100% rounded_0.25rem">
    <div class="d_grid cols_4 w_100% bg_255-255-255-50 box_border">
        <span class="bg_255-255-255-75 txt_black justify-self_stretch p_8 rounded_0.25rem">My website</span>
    </div>
    <div class="h_16 w_100% bg_255-255-255-25"></div>
    <div class="bg_white p_16">
        ${content}
    </div>
</div>
`;

const GenericClassNameExample = (className: string, content?: string) => `
    <div class="d_flex fd_col justify_between align-items_center h_max-content min-w_70% py_16 px_32 border-b_2-primary border-x_1-primary rounded_0.25rem">
        <h2 class="bg_black txt-size_12 w_100% border_1-fff rounded_0.25rem ">
             ${EscapedDiv(content?.split("<").join(" ").trim().split(" ")[0].replace(/>/, ""), className)}
        </h2>
        ${content ?? "" /*content ? FakeBrowser(content) : "" */}
    </div>
`;
export default GenericClassNameExample;