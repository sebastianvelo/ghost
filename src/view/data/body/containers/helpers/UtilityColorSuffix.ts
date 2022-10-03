import GhostPrefix from "../../../../../lib/property/GhostPrefix";
import PropertyCSS from "../../../../../lib/property/PropertyCSS";
import ColorTransformer from "../../../../../lib/utility/common/transformers/color/ColorTransformer";
import { RowProps } from "../../../../components/row/Row";

const UtilityColorSuffix =
    (property: PropertyCSS, prefix: GhostPrefix, suffix: string, otherSuffixes: string[] = []): RowProps => ({
        header: {
            cssProperties: [property],
            prefix: prefix,
            possibleSuffixes: ["r-g-b", "r-g-b-a", "hexa", "colorName"],
            example: { suffix, transformer: ColorTransformer }
        }
    });

export default UtilityColorSuffix;