import GhostPrefix from "../../../../../lib/property/GhostPrefix";
import PropertyCSS from "../../../../../lib/property/PropertyCSS";
import ReplaceSeparatorWithSpaceTransformer from "../../../../../lib/utility/common/transformers/common/ReplaceSeparatorWithSpaceTransformer";
import { BackgroundRepeatTransformer } from "../../../../../lib/utility/utilities/background/BackgroundUtilities";
import { RowProps } from "../../../../components/row/Row";
import { RowsContainersProps } from "../../../../components/row/RowsContainer";
import UtilityColorSuffix from "./helpers/UtilityColorSuffix";
import BodyExample from "./example/BodyExample";
import { BackgroundRepeatSuffixes, GenericBackgroundPositioning } from "./helpers/BackgroundHelper";

const BackgroundColor: RowProps = {
    ...UtilityColorSuffix(PropertyCSS.BG_COLOR, GhostPrefix.BG_COLOR, "200-10-102-50"),
    body: BodyExample({
        classNames: ["bg_0-40-200", "bg_0-40-200-50", "bg_92AFDA", "bg_tomato"],
        aditionalClassName: "w_150 h_150",
    })
};

const BackgroundAttachment: RowProps = {
    header: {
        cssProperties: [PropertyCSS.BG_ATTACHMENT],
        prefix: GhostPrefix.BG_ATTACHMENT,
        possibleSuffixes: ["scroll", "fixed", "local", "initial", "inherit"],
        example: { suffix: "fixed", }
    }
};

const BackgroundBlendMode: RowProps = {
    header: {
        cssProperties: [PropertyCSS.BG_BLEND],
        prefix: GhostPrefix.BG_BLEND,
        possibleSuffixes: ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "saturation", "color", "luminosity"],
        example: { suffix: "saturation", }
    }
};

const BackgroundPosition: RowProps = {
    header: {
        cssProperties: [PropertyCSS.BG_POSITION],
        prefix: GhostPrefix.BG_POSITION,
        possibleSuffixes: ["left-top", "left-center", "left-bottom", "right-top", "right-center", "right-bottom", "center-top", "center-center", "center-bottom",],
        example: { suffix: "left-right", transformer: ReplaceSeparatorWithSpaceTransformer }
    }
};

const BackgroundRepeat: RowProps = {
    header: {
        cssProperties: [PropertyCSS.BG_REPEAT],
        prefix: GhostPrefix.BG_REPEAT,
        possibleSuffixes: BackgroundRepeatSuffixes,
        example: { suffix: "x", transformer: BackgroundRepeatTransformer }
    }
};

const BackgroundClip: RowProps = GenericBackgroundPositioning(PropertyCSS.BG_CLIP, GhostPrefix.BG_CLIP);

const BackgroundOrigin: RowProps = GenericBackgroundPositioning(PropertyCSS.BG_ORIGIN, GhostPrefix.BG_ORIGIN);

const BackgroundContainer: RowsContainersProps = {
    title: "Background",
    rows: [
        BackgroundColor,
        BackgroundAttachment,
        BackgroundBlendMode,
        BackgroundClip,
        BackgroundOrigin,
        BackgroundPosition,
        BackgroundRepeat,
    ]
};

export default BackgroundContainer;