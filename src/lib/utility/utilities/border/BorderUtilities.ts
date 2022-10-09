import GhostPrefix from "../../GhostPrefix";
import PropertyCSS from "../../PropertyCSS";
import Utilities from "../../common/IUtilities";
import SimpleUtility from "../../common/SimpleUtility";
import { BorderTransformer } from "./transformers";

const BorderUtilities: Utilities = {
    ...SimpleUtility(GhostPrefix.BORDER, PropertyCSS.BORDER, BorderTransformer),
    ...SimpleUtility(GhostPrefix.BORDER_BOTTOM, PropertyCSS.BORDER_BOTTOM, BorderTransformer),
    ...SimpleUtility(GhostPrefix.BORDER_TOP, PropertyCSS.BORDER_TOP, BorderTransformer),
    ...SimpleUtility(GhostPrefix.BORDER_RIGHT, PropertyCSS.BORDER_RIGHT, BorderTransformer),
    ...SimpleUtility(GhostPrefix.BORDER_LEFT, PropertyCSS.BORDER_LEFT, BorderTransformer),
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
    ...SimpleUtility(GhostPrefix.BORDER_RADIUS, PropertyCSS.BORDER_RADIUS),
};

export default BorderUtilities;