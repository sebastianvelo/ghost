import GhostPrefix from "../../../../../../lib/property/GhostPrefix";
import PropertyCSS from "../../../../../../lib/property/PropertyCSS";
import { BackgroundPositioningMap, BackgroundPositioningTransformer, BackgroundRepeatMap } from "../../../../../../lib/utility/utilities/background/BackgroundUtilities";
import { RowProps } from "../../../../../components/row/Row";

export const BackgroundPositioningSuffixes = Object.keys(BackgroundPositioningMap);
export const BackgroundRepeatSuffixes = Object.keys(BackgroundRepeatMap);

export const GenericBackgroundPositioning = (property: PropertyCSS, prefix: GhostPrefix): RowProps => ({
    header: {
        cssProperties: [property],
        prefix: prefix,
        possibleSuffixes: BackgroundPositioningSuffixes,
        example: { suffix: "border", transformer: BackgroundPositioningTransformer }
    }
});