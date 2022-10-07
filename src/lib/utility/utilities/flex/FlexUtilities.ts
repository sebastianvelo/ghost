import GhostPrefix from "../../GhostPrefix";
import PropertyCSS from "../../PropertyCSS";
import Utilities from "../../common/IUtilities";
import OneDeclarationUtility from "../../common/OneDeclarationUtility";

export const FlexBasisTransformer = (suffix: string) => {
    const [divisor, dividend] = suffix.split("-");
    if (!dividend) return `${divisor}%`;

    const result = (+divisor / +dividend) * 100;
    return `${result}%`;
}

export const FlexDirectionTransformer = (suffix: string) => suffix.replace(/col/, "column");

const FlexUtilities: Utilities = {
    ...OneDeclarationUtility(GhostPrefix.FLEX_BASIS, PropertyCSS.FLEX_BASIS, FlexBasisTransformer),
    ...OneDeclarationUtility(GhostPrefix.FLEX_DIRECTION, PropertyCSS.FLEX_DIRECTION, FlexDirectionTransformer),
    ...OneDeclarationUtility(GhostPrefix.FLEX_WRAP, PropertyCSS.FLEX_WRAP),
    ...OneDeclarationUtility(GhostPrefix.FLEX_GROW, PropertyCSS.FLEX_GROW),
    ...OneDeclarationUtility(GhostPrefix.FLEX_SHRINK, PropertyCSS.FLEX_SHRINK),
};

export default FlexUtilities;