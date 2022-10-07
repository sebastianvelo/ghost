import GhostPrefix from "../../../../../../lib/utility/GhostPrefix";
import PropertyCSS from "../../../../../../lib/utility/PropertyCSS";
import ColorTransformer from "../../../../../../lib/utility/common/transformers/color/ColorTransformer";
import { RowProps } from "../../../../../components/row/Row";

const UtilityColorSuffix =
    (property: PropertyCSS, prefix: GhostPrefix, suffix: string): RowProps => ({
        header: {
            cssProperties: [property],
            prefix: prefix,
            possibleSuffixes: ["r-g-b", "r-g-b-a", "hexa", "colorName"],
            example: { suffix, transformer: ColorTransformer }
        }
    });

export default UtilityColorSuffix;