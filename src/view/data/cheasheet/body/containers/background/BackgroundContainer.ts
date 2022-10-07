import GhostPrefix from "../../../../../../lib/property/GhostPrefix";
import PropertyCSS from "../../../../../../lib/property/PropertyCSS";
import ReplaceSeparatorWithSpaceTransformer from "../../../../../../lib/utility/common/transformers/common/ReplaceSeparatorWithSpaceTransformer";
import { BackgroundPositioningTransformer, BackgroundRepeatTransformer } from "../../../../../../lib/utility/utilities/background/BackgroundUtilities";
import { RowProps } from "../../../../../components/row/Row";
import { RowsContainersProps } from "../../../../../components/row/RowsContainer";
import GenericBodyExample from "../../common/body/GenericBodyExample";
import UtilityColorSuffix from "../../common/helpers/UtilityColorSuffix";
import { GenericBackground } from "./Helper";
import { BackgroundAttachmentSuffixes, BackgroundBlendModeSuffixes, BackgroundPositioningSuffixes, BackgroundPositionSuffixes, BackgroundRepeatSuffixes } from "./Suffixes";

const BackgroundColor: RowProps = {
    ...UtilityColorSuffix(PropertyCSS.BG_COLOR, GhostPrefix.BG_COLOR, "200-10-102-50"),
    body: GenericBodyExample({
        classNames: ["bg_0-40-200", "bg_0-40-200-50", "bg_92AFDA", "bg_tomato"],
        aditionalClassName: "w_150 h_150",
    })
};

const BackgroundClip: RowProps = GenericBackground({
    property: PropertyCSS.BG_CLIP,
    prefix: GhostPrefix.BG_CLIP,
    suffixes: BackgroundPositioningSuffixes,
    transformer: BackgroundPositioningTransformer,
});

const BackgroundOrigin: RowProps = GenericBackground({
    property: PropertyCSS.BG_ORIGIN,
    prefix: GhostPrefix.BG_ORIGIN,
    suffixes: BackgroundPositioningSuffixes,
    transformer: BackgroundPositioningTransformer,
});

const BackgroundAttachment: RowProps = GenericBackground({
    property: PropertyCSS.BG_ATTACHMENT,
    prefix: GhostPrefix.BG_ATTACHMENT,
    suffixes: BackgroundAttachmentSuffixes,
});

const BackgroundBlendMode: RowProps = GenericBackground({
    property: PropertyCSS.BG_BLEND,
    prefix: GhostPrefix.BG_BLEND,
    suffixes: BackgroundBlendModeSuffixes,
});

const BackgroundPosition: RowProps = GenericBackground({
    property: PropertyCSS.BG_POSITION,
    prefix: GhostPrefix.BG_POSITION,
    suffixes: BackgroundPositionSuffixes,
    transformer: ReplaceSeparatorWithSpaceTransformer,
});

const BackgroundRepeat: RowProps = GenericBackground({
    property: PropertyCSS.BG_REPEAT,
    prefix: GhostPrefix.BG_REPEAT,
    suffixes: BackgroundRepeatSuffixes,
    transformer: BackgroundRepeatTransformer
});

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