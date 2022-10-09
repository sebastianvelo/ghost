import GhostPrefix from "../../../../../../lib/utility/enum/GhostPrefix";
import PropertyCSS from "../../../../../../lib/utility/enum/PropertyCSS";
import { RowProps } from "../../../../../components/pages/cheatsheet/body/section/category/row/Row";
import { RowsContainersProps } from "../../../../../components/pages/cheatsheet/body/section/category/row/RowsContainer";
import UtilityColorSuffix from "../../common/helpers/UtilityColorSuffix";
import { CursorSuffixes, PointerEventSuffixes, ResizeSuffixes, ScrollBehaviorSuffixes } from "./Suffixes";

const Cursor: RowProps = {
    header: {
        cssProperties: [PropertyCSS.CURSOR],
        prefix: GhostPrefix.CURSOR,
        possibleSuffixes: CursorSuffixes,
        example: { suffix: "not-allowed" }
    },
};

const PointerEvents: RowProps = {
    header: {
        cssProperties: [PropertyCSS.POINTER_EVENTS],
        prefix: GhostPrefix.POINTER_EVENTS,
        possibleSuffixes: PointerEventSuffixes,
        example: { suffix: "none" }
    },
};

const ScrollBehavior: RowProps = {
    header: {
        cssProperties: [PropertyCSS.SCROLL_BEHAVIOR],
        prefix: GhostPrefix.SCROLL_BEHAVIOR,
        possibleSuffixes: ScrollBehaviorSuffixes,
        example: { suffix: "smooth" }
    },
};

const Resize: RowProps = {
    header: {
        cssProperties: [PropertyCSS.RESIZE],
        prefix: GhostPrefix.RESIZE,
        possibleSuffixes: ResizeSuffixes,
        example: { suffix: "horizontal" }
    },
};

const CaretColor: RowProps = {
    ...UtilityColorSuffix(PropertyCSS.CARET_COLOR, GhostPrefix.CARET_COLOR, "10af0a"),
};

const AccentColor: RowProps = {
    ...UtilityColorSuffix(PropertyCSS.CARET_COLOR, GhostPrefix.CARET_COLOR, "10af0a"),
};

const InteractivityContainer: RowsContainersProps = {
    title: "Interactivity",
    rows: [
        Cursor,
        ScrollBehavior,
        Resize,
        PointerEvents,
        CaretColor,
        AccentColor,
    ]
};

export default InteractivityContainer;