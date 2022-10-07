import { SuffixSeparator } from "../../../common/types";
import GhostPrefix from "../../../property/GhostPrefix";
import PropertyCSS from "../../../property/PropertyCSS";
import Utilities from "../../common/IUtilities";
import OneActionUtility from "../../common/OneActionUtility";
import ColorTransformer from "../../common/transformers/color/ColorTransformer";

export const BorderRadiusTransformer = (suffix: string) => `${suffix}%`;

export const BorderTransformer = (suffix: string) => {
    const [width, color = "black", style = "solid"] = suffix.split(SuffixSeparator);
    return `${width ?? 1}px ${style} ${ColorTransformer(color)}`;
};

const BorderUtilities: Utilities = {
    ...OneActionUtility(GhostPrefix.BORDER, PropertyCSS.BORDER, BorderTransformer),
    ...OneActionUtility(GhostPrefix.BORDER_BOTTOM, PropertyCSS.BORDER_BOTTOM, BorderTransformer),
    ...OneActionUtility(GhostPrefix.BORDER_TOP, PropertyCSS.BORDER_TOP, BorderTransformer),
    ...OneActionUtility(GhostPrefix.BORDER_RIGHT, PropertyCSS.BORDER_RIGHT, BorderTransformer),
    ...OneActionUtility(GhostPrefix.BORDER_LEFT, PropertyCSS.BORDER_LEFT, BorderTransformer),
    [GhostPrefix.BORDER_X]: {
        declarations: [
            { property: PropertyCSS.BORDER_LEFT, transformer: BorderTransformer },
            { property: PropertyCSS.BORDER_RIGHT, transformer: BorderTransformer }
        ],
    },
    [GhostPrefix.BORDER_Y]: {
        declarations: [
            { property: PropertyCSS.BORDER_TOP, transformer: BorderTransformer },
            { property: PropertyCSS.BORDER_BOTTOM, transformer: BorderTransformer }
        ],
    },
    ...OneActionUtility(GhostPrefix.BORDER_RADIUS, PropertyCSS.BORDER_RADIUS),
};

export default BorderUtilities;