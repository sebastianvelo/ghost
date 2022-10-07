import { RowProps } from "../../../../../components/pages/cheatsheet/body/category/row/Row";
import { RowsContainersProps } from "../../../../../components/pages/cheatsheet/body/category/row/RowsContainer";
import FocusBodyExample from "./body/FocusBodyExample";
import HoverBodyExample from "./body/HoverBodyExample";
import { GenericPseudoclass, GenericPseudoclassChild } from "./Helper";

const Hover: RowProps = GenericPseudoclass("hover", HoverBodyExample);
const Focus: RowProps = GenericPseudoclass("focus", FocusBodyExample);
const FirstChild: RowProps = GenericPseudoclassChild("first");
const LastChild: RowProps = GenericPseudoclassChild("last");
const OddChild: RowProps = GenericPseudoclassChild("odd");
const EvenChild: RowProps = GenericPseudoclassChild("even");

const PseudoclassesContainer: RowsContainersProps = {
    title: "Pseudoclases",
    rows: [
        Hover,
        Focus,
        FirstChild,
        LastChild,
        OddChild,
        EvenChild,
    ]
};

export default PseudoclassesContainer;