import GhostPrefix from "../../../../../lib/property/GhostPrefix";
import PropertyCSS from "../../../../../lib/property/PropertyCSS";
import { FlexBasisTransformer, FlexDirectionTransformer } from "../../../../../lib/utility/utilities/flex/FlexUtilities";
import { RowProps } from "../../../../components/row/Row";
import { RowsContainersProps } from "../../../../components/row/RowsContainer";

const FlexBasis: RowProps = {
    header: {
        cssProperties: [PropertyCSS.FLEX_BASIS],
        prefix: GhostPrefix.FLEX_BASIS,
        possibleSuffixes: ["percentage", "divisor-dividend"],
        example: { suffix: "3-4", transformer: FlexBasisTransformer }
    }
};

const FlexDirection: RowProps = {
    header: {
        cssProperties: [PropertyCSS.FLEX_DIRECTION],
        prefix: GhostPrefix.FLEX_DIRECTION,
        possibleSuffixes: ["row", "row-reverse", "col", "col-reverse"],
        example: { suffix: "col-reverse", transformer: FlexDirectionTransformer }
    }
};

const FlexWrap: RowProps = {
    header: {
        cssProperties: [PropertyCSS.FLEX_WRAP],
        prefix: GhostPrefix.FLEX_WRAP,
        possibleSuffixes: ["wrap", "wrap-reverse", "nowrap"],
        example: { suffix: "wrap", }
    }
};

const FlexGrow: RowProps = {
    header: {
        cssProperties: [PropertyCSS.FLEX_GROW],
        prefix: GhostPrefix.FLEX_GROW,
        possibleSuffixes: ["1", "0"],
        example: { suffix: "0", }
    }
};

const FlexShrink: RowProps = {
    header: {
        cssProperties: [PropertyCSS.FLEX_SHRINK],
        prefix: GhostPrefix.FLEX_SHRINK,
        possibleSuffixes: ["1", "0"],
        example: { suffix: "0", }
    }
};

const FlexContainer: RowsContainersProps = {
    title: "Flex",
    rows: [
        FlexBasis,
        FlexDirection,
        FlexWrap,
        FlexGrow,
        FlexShrink,
    ]
};

export default FlexContainer;