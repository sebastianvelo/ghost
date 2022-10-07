import { PropertySeparator, SuffixSeparator } from "../../../../../../../../lib/common/types";
import GhostPrefix from "../../../../../../../../lib/utility/GhostPrefix";
import PropertyCSS from "../../../../../../../../lib/utility/PropertyCSS";
import ClassNameTransformer from "../../../../../../../../lib/utility/common/transformers/ClassNameTransformer";

export interface RowHeaderProps {
    cssProperties: PropertyCSS[];
    prefix: GhostPrefix;
    possibleSuffixes: string[];
    example: {
        suffix: string;
        transformer?: ClassNameTransformer;
    },
    extendsSelector?: string;
}

export interface RowProps {
    header: RowHeaderProps;
    body?: string;
}
const Column = (column: string, span = 1) => `<p class="px_26 leading_2 col-span_${span}">${column}</p>`;

const suffixIntegerValues = ["width", "number", "numberUnit", "percentage", "divisor-dividend", "r", "g", "b", "a", "thickness", "x1", "x2", "y1", "y2"];
const valueIntegerValues = ["px", "rem", "em", "%"];
const suffixIsItInteger = (suffix: string) => suffixIntegerValues.includes(suffix);
const valueIsItInteger = (value: string) => !isNaN(+value) || valueIntegerValues.some(v => value.includes(v));

const StringValue = (value: string) => `<span class="txt_206-127-58">${value}</span>`;
const IntegerValue = (value: string) => `<span class="txt_181-206-137">${value}</span>`;
const Value = (val: string) => val.split(" ").map(value => valueIsItInteger(value) ? IntegerValue(value) : StringValue(value)).join(" ");
const Property = (property: PropertyCSS) =>
    /*`<a class="txt_91-203-254 decoration_none" href="${`https://www.w3schools.com/cssref/css3_pr_${property}.asp`}">     */
    `<a class="txt_91-203-254 decoration_none">    
        ${property}
    </a>
`;
const Declaration = (property: PropertyCSS, value: string) => `${Property(property)}: ${Value(value)};</span>`;

const Selector = (selector: string) => `<span class="txt_215-168-60 txt-weight_bold">${selector}</span>`;

const Suffix = (suff: string) => suff.split(SuffixSeparator)
    .map(suffix => suffixIsItInteger(suffix) ? IntegerValue(suffix) : Selector(suffix))
    .join(SuffixSeparator);

const Properties = (cssProperties: PropertyCSS[]) => cssProperties.map(Property).join(" ");

const Prefix = (prefix: string) => Selector(prefix);

const Suffixes = (possibleSuffixes: string[]) => `{ ${possibleSuffixes.map(Suffix).join(" | ")} }`;

const Example = (props: RowHeaderProps) => {
    const selector = `.${props.prefix}${PropertySeparator}${props.example.suffix} ${props.extendsSelector ?? ""}`;
    const value = props.example.transformer ? props.example.transformer(props.example.suffix) : props.example.suffix;
    const Declarations = props.cssProperties.map(property => Declaration(property, value)).join(" ");
    return `${Selector(selector)} { ${Declarations} }`;
}

const rowColor = {
    "true": "bg_255-255-255-10",
    "false": "bg_secondary",
};

const Row = (props: RowProps, idx: number) => `
    <details>
        <summary class="d_grid align-items_center cols_6 px_12 box_border border_2-transparent ${rowColor[`${idx % 2 === 0}`]} ${props.body ? "bg_black:hover border-y_2-primary:hover transition_all-250-ease-in-out" : ""}" >
            ${Column(Properties(props.header.cssProperties))}
            ${Column(Prefix(props.header.prefix))}
            ${Column(Suffixes(props.header.possibleSuffixes), 2)}
            ${Column(Example(props.header), 2)}
        </summary>
        ${props.body ? `
            <div class="p_12 bg_255-255-255-50">
                ${props.body}
            </div>
        ` : ""}
    </details>`;

export default Row;
