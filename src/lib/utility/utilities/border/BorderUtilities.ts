import GhostPrefix from "../../GhostPrefix";
import PropertyCSS from "../../PropertyCSS";
import Utilities from "../../common/IUtilities";
import OneDeclarationUtility from "../../common/OneDeclarationUtility";
import { BorderTransformer } from "./transformers";

const BorderUtilities: Utilities = {
    ...OneDeclarationUtility(GhostPrefix.BORDER, PropertyCSS.BORDER, BorderTransformer),
    ...OneDeclarationUtility(GhostPrefix.BORDER_BOTTOM, PropertyCSS.BORDER_BOTTOM, BorderTransformer),
    ...OneDeclarationUtility(GhostPrefix.BORDER_TOP, PropertyCSS.BORDER_TOP, BorderTransformer),
    ...OneDeclarationUtility(GhostPrefix.BORDER_RIGHT, PropertyCSS.BORDER_RIGHT, BorderTransformer),
    ...OneDeclarationUtility(GhostPrefix.BORDER_LEFT, PropertyCSS.BORDER_LEFT, BorderTransformer),
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
    ...OneDeclarationUtility(GhostPrefix.BORDER_RADIUS, PropertyCSS.BORDER_RADIUS),
};

export default BorderUtilities;