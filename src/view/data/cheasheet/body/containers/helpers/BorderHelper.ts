import GhostPrefix from "../../../../../../lib/property/GhostPrefix";
import PropertyCSS from "../../../../../../lib/property/PropertyCSS";
import { BorderTransformer } from "../../../../../../lib/utility/utilities/border/BorderUtilities";
import { RowProps } from "../../../../../components/row/Row";
import BorderBodyExample from "../example/BorderBodyExample";

export const GenericBorder = (properties: PropertyCSS[], prefix: GhostPrefix, examples: string[]): RowProps => ({
    header: {
        cssProperties: properties,
        prefix: prefix,
        possibleSuffixes: ["numberUnit-color?-width?"],
        example: { suffix: examples[0], transformer: BorderTransformer }
    },
    body: BorderBodyExample(examples.map(suffix => `${prefix}_${suffix}`))
});
