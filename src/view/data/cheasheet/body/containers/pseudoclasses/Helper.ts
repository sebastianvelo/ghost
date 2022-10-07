import GhostPrefix from "../../../../../../lib/utility/GhostPrefix";
import PropertyCSS from "../../../../../../lib/utility/PropertyCSS";
import { RowProps } from "../../../../../components/pages/cheatsheet/body/section/category/row/Row";
import ChildBodyExample from "./body/ChildBodyExample";

export const GenericPseudoclass = (pseudoClass: string, body: string): RowProps => ({
    header: {
        cssProperties: [PropertyCSS.GENERIC],
        prefix: GhostPrefix.GENERIC,
        possibleSuffixes: [`:${pseudoClass}`],
        example: { suffix: `any-suffix:${pseudoClass}`, transformer: (s: string) => `any-value` }
    },
    body
});

export const GenericPseudoclassChild = (pseudoClass: string): RowProps =>
    GenericPseudoclass(pseudoClass, ChildBodyExample(pseudoClass))
