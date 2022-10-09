import GhostPrefix from "../../../utility/enum/GhostPrefix";
import PropertyCSS from "../../../utility/enum/PropertyCSS";
import { IUtilities } from "../Utilities";
import SimpleUtility from "../common/helpers/SimpleUtility";
import { BoxTransformer } from "./transformers";

const BoxUtility: IUtilities = SimpleUtility({ prefix: GhostPrefix.BOX, property: PropertyCSS.BOX_SIZING, transformer: BoxTransformer });

const FloatUtility: IUtilities = SimpleUtility({ prefix: GhostPrefix.FLOAT, property: PropertyCSS.FLOAT });

const ClearUtility: IUtilities = SimpleUtility({ prefix: GhostPrefix.CLEAR, property: PropertyCSS.CLEAR });

const ObjectUtility: IUtilities = SimpleUtility({ prefix: GhostPrefix.OBJECT_FIT, property: PropertyCSS.OBJECT_FIT });

const OverflowUtility: IUtilities = SimpleUtility({ prefix: GhostPrefix.OVERFLOW, property: PropertyCSS.OVERFLOW });
const OverflowYUtility: IUtilities = SimpleUtility({ prefix: GhostPrefix.OVERFLOW_Y, property: PropertyCSS.OVERFLOW_Y });
const OverflowXUtility: IUtilities = SimpleUtility({ prefix: GhostPrefix.OVERFLOW_X, property: PropertyCSS.OVERFLOW_X });

const OverscrollUtility: IUtilities = SimpleUtility({ prefix: GhostPrefix.OVERSCROLL, property: PropertyCSS.OVERSCROLL });
const OverscrollYUtility: IUtilities = SimpleUtility({ prefix: GhostPrefix.OVERSCROLL_Y, property: PropertyCSS.OVERSCROLL_Y });
const OverscrollXUtility: IUtilities = SimpleUtility({ prefix: GhostPrefix.OVERSCROLL_X, property: PropertyCSS.OVERSCROLL_X });

const TopUtility: IUtilities = SimpleUtility({ prefix: GhostPrefix.TOP, property: PropertyCSS.TOP });
const BottomUtility: IUtilities = SimpleUtility({ prefix: GhostPrefix.BOTTOM, property: PropertyCSS.BOTTOM });
const RightUtility: IUtilities = SimpleUtility({ prefix: GhostPrefix.RIGHT, property: PropertyCSS.RIGHT });
const LeftUtility: IUtilities = SimpleUtility({ prefix: GhostPrefix.LEFT, property: PropertyCSS.LEFT });

const DisplayUtility: IUtilities = SimpleUtility({ prefix: GhostPrefix.DISPLAY, property: PropertyCSS.DISPLAY });

const PositionUtility: IUtilities = SimpleUtility({ prefix: GhostPrefix.POSITION, property: PropertyCSS.POSITION });

const VisibilityUtility: IUtilities = SimpleUtility({ prefix: GhostPrefix.VISIBILITY, property: PropertyCSS.VISIBILITY });

const ZUtility: IUtilities = SimpleUtility({ prefix: GhostPrefix.Z_INDEX, property: PropertyCSS.Z_INDEX });

const LayoutUtilities: IUtilities = {
    ...DisplayUtility,
    ...PositionUtility,
    ...BoxUtility,
    ...FloatUtility,
    ...ClearUtility,
    ...ObjectUtility,
    ...OverflowUtility,
    ...OverflowYUtility,
    ...OverflowXUtility,
    ...OverscrollUtility,
    ...OverscrollYUtility,
    ...OverscrollXUtility,
    ...TopUtility,
    ...BottomUtility,
    ...RightUtility,
    ...LeftUtility,
    ...ZUtility,
    ...VisibilityUtility,
};

export default LayoutUtilities;