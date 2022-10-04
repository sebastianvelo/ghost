import GenericClassNameExample from "./GenericClassNameExample";

const ClassNameExample = (className: string, size = 9) => GenericClassNameExample(className, `
    <div class="bg_primary">
        <div class="d_flex ${className} h_100 p_20">
            ${Array(size).fill("").map((_, i) => `
                <div class="min-w_50 min-h_50 bg_0-255-255-${100 - (i * 5)}"></div>    
            `).join("")}
        </div>
    </div>
`);

const PlaceContainerBodyExample = (examples: [className: string, size?: number][]) => `
    <div class="d_grid align-items_center cols_3">
        ${examples.map(([className, size]) => ClassNameExample(className, size)).join(" ")}
    </div>
`;

export default PlaceContainerBodyExample;