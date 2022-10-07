import GhostPrefix from "../../GhostPrefix";
import PropertyCSS from "../../PropertyCSS";
import Utilities from "../../common/IUtilities";
import OneActionUtility from "../../common/OneActionUtility";

export const FlexBasisTransformer = (suffix: string) => {
    const [divisor, dividend] = suffix.split("-");
    if (!dividend) return `${divisor}%`;

    const result = (+divisor / +dividend) * 100;
    return `${result}%`;
}

export const FlexDirectionTransformer = (suffix: string) => suffix.replace(/col/, "column");

const FlexUtilities: Utilities = {
    ...OneActionUtility(GhostPrefix.FLEX_BASIS, PropertyCSS.FLEX_BASIS, FlexBasisTransformer),
    ...OneActionUtility(GhostPrefix.FLEX_DIRECTION, PropertyCSS.FLEX_DIRECTION, FlexDirectionTransformer),
    ...OneActionUtility(GhostPrefix.FLEX_WRAP, PropertyCSS.FLEX_WRAP),
    ...OneActionUtility(GhostPrefix.FLEX_GROW, PropertyCSS.FLEX_GROW),
    ...OneActionUtility(GhostPrefix.FLEX_SHRINK, PropertyCSS.FLEX_SHRINK),
};

export default FlexUtilities;