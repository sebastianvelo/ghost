import GenericClassNameExample from "../../../common/body/GenericClassNameExample";

const classNames = (pseudoClass: string) => [
    `bg_secondary:${pseudoClass}`,
    `border-t_4-fuchsia:${pseudoClass}`,
];

const ClassNameExample = (className: string) => GenericClassNameExample(className, `
    <div class="d_grid cols_5">
        ${Array(15).fill("").map((_, i) => `
            <div class="w_50 h_50 box_border border_1 bg_0-0-0-50 ${className}"></div>    
        `).join("")}
    </div>
`);

const ChildBodyExample = (pseudoClass: string) =>  `
    <div class="d_grid align-items_center cols_2">
        ${classNames(pseudoClass).map((className) => ClassNameExample(className)).join(" ")}
    </div>
`;

export default ChildBodyExample;