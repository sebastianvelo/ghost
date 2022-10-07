import GenericClassNameExample from "../../../common/body/GenericClassNameExample";

const ClassNameExample = (className: string, size = 9) => GenericClassNameExample(className, `
    <div class="bg_secondary">
        <div class="d_grid ${className}">
            ${Array(size).fill("").map((_, i) => `
                <div class="w_50 h_50 bg_0-255-255-${100 - (i * 5)}"></div>    
            `).join("")}
        </div>
    </div>
`);

const GridTemplateBodyExample = (examples: [className: string, size?: number][]) => `
    <div class="d_grid align-items_center cols_2">
        ${examples.map(([className, size]) => ClassNameExample(className, size)).join(" ")}
    </div>
`;

export default GridTemplateBodyExample;