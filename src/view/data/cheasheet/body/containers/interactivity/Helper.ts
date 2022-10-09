import GhostPrefix from "../../../../../../lib/utility/enum/GhostPrefix";
import PropertyCSS from "../../../../../../lib/utility/enum/PropertyCSS";
import { RowProps } from "../../../../../components/pages/cheatsheet/body/section/category/row/Row";

export const GenericOverflow = (property: PropertyCSS, prefix: GhostPrefix): RowProps => ({
    header: {
        cssProperties: [property],
        prefix: prefix,
        possibleSuffixes: ["auto", "hidden", "clip", "visible", "scroll"],
        example: { suffix: "scroll" }
    }
});

export const GenericOverscroll = (property: PropertyCSS, prefix: GhostPrefix): RowProps => ({
    header: {
        cssProperties: [property],
        prefix: prefix,
        possibleSuffixes: ["auto", "contain", "none"],
        example: { suffix: "contain" }
    }
});
