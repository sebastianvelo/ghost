import GhostPrefix from "../../../../../../lib/utility/GhostPrefix";
import PropertyCSS from "../../../../../../lib/utility/PropertyCSS";
import { FlexBasisTransformer, FlexDirectionTransformer } from "../../../../../../lib/utility/utilities/flex/transformers";
import { RowProps } from "../../../../../components/pages/cheatsheet/body/category/row/Row";
import { RowsContainersProps } from "../../../../../components/pages/cheatsheet/body/category/row/RowsContainer";
import { FlexBasisSuffixes, FlexDirectionSuffixes, FlexGrowSuffixes, FlexShrinkSuffixes, FlexWrapSuffixes } from "./Suffixes";

const FlexBasis: RowProps = {
    header: {
        cssProperties: [PropertyCSS.FLEX_BASIS],
        prefix: GhostPrefix.FLEX_BASIS,
        possibleSuffixes: FlexBasisSuffixes,
        example: { suffix: "3-4", transformer: FlexBasisTransformer }
    }
};

const FlexDirection: RowProps = {
    header: {
        cssProperties: [PropertyCSS.FLEX_DIRECTION],
        prefix: GhostPrefix.FLEX_DIRECTION,
        possibleSuffixes: FlexDirectionSuffixes,
        example: { suffix: "col-reverse", transformer: FlexDirectionTransformer }
    }
};

const FlexWrap: RowProps = {
    header: {
        cssProperties: [PropertyCSS.FLEX_WRAP],
        prefix: GhostPrefix.FLEX_WRAP,
        possibleSuffixes: FlexWrapSuffixes,
        example: { suffix: "wrap", }
    }
};

const FlexGrow: RowProps = {
    header: {
        cssProperties: [PropertyCSS.FLEX_GROW],
        prefix: GhostPrefix.FLEX_GROW,
        possibleSuffixes: FlexGrowSuffixes,
        example: { suffix: "0", }
    }
};

const FlexShrink: RowProps = {
    header: {
        cssProperties: [PropertyCSS.FLEX_SHRINK],
        prefix: GhostPrefix.FLEX_SHRINK,
        possibleSuffixes: FlexShrinkSuffixes,
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