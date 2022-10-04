import GhostPrefix from "../../../property/GhostPrefix";
import PropertyCSS from "../../../property/PropertyCSS";
import Utilities from "../../common/IUtilities";

const SpaceUtilities: Utilities = {
    [GhostPrefix.SPACE_X]: {
        declarations: [{ property: PropertyCSS.MARGIN_LEFT }],
        selector: (className: string) => `${className} > * + *`
    },
    [GhostPrefix.SPACE_Y]: {
        declarations: [{ property: PropertyCSS.MARGIN_TOP },],
        selector: (className: string) => `${className} > * + *`
    },
};

export default SpaceUtilities;