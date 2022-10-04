import GhostPrefix from "../../../../../../lib/property/GhostPrefix";
import PropertyCSS from "../../../../../../lib/property/PropertyCSS";
import { RowProps } from "../../../../../components/row/Row";

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
