import GenericClassNameExample from "../../../common/body/GenericClassNameExample";

const ClassNameExample = (className: string, size = 9) => GenericClassNameExample(className, `
    <div class="bg_primary">
        <div class="d_grid ${className.includes("align") ? "cols_3" : "rows_4"} ${className} w_300 h_200">
            ${Array(size).fill("").map((_, i) => `
                <div class="min-w_50 min-h_50 bg_0-255-255-${100 - (i * 5)}"></div>    
            `).join("")}
        </div>
    </div>
`);

const AlignmentContentBodyExample = (examples: [className: string, size?: number][]) => `
    <div class="d_grid align-items_center cols_3">
        ${examples.map(([className, size]) => ClassNameExample(className, size)).join(" ")}
    </div>
`;

export default AlignmentContentBodyExample;