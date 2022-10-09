import ColorTransformer from "../../../../../../lib/app/utilities/common/transformers/color/ColorTransformer";
import GhostPrefix from "../../../../../../lib/utility/enum/GhostPrefix";
import PropertyCSS from "../../../../../../lib/utility/enum/PropertyCSS";
import { RowProps } from "../../../../../components/pages/cheatsheet/body/section/category/row/Row";

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