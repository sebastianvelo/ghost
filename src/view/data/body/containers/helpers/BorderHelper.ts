import GhostPrefix from "../../../../../lib/property/GhostPrefix";
import PropertyCSS from "../../../../../lib/property/PropertyCSS";
import { BorderTransformer } from "../../../../../lib/utility/utilities/border/BorderUtilities";
import { RowProps } from "../../../../components/row/Row";
import BorderBodyExample from "../example/BorderBodyExample";

export const GenericBorder = (properties: PropertyCSS[], prefix: GhostPrefix, suffix: string, examples: string[]): RowProps => ({
    header: {
        cssProperties: properties,
        prefix: prefix,
        possibleSuffixes: ["numberUnit-color?-width?"],
        example: { suffix, transformer: BorderTransformer }
    },
    body: BorderBodyExample(examples)
});
