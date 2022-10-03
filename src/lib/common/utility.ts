import GhostClassName from "../className/GhostClassName";
import { BreakpointSuffix, PseudoClassSuffix, ThemeSuffix } from "../className/Options";
import PrefixClassName from "../className/PrefixClassName";
import Utilities from "../utility/utilities/Utilities";
import { getFullSelector } from "./selector";
import { Declaration, OptionsSeparator, PropertySeparator } from "./types";

const getDeclarations = (prefix: PrefixClassName, important?: boolean): Declaration[] | null => {
    const [property, value] = prefix.split(PropertySeparator);
    const utility = Utilities[property];
    if (!utility) return null;
    return utility.declarations.map(utility => {
        const val = utility.transformer ? utility.transformer(value) : value;
        return important ? [utility.property, val, "important"] : [utility.property, val];
    });
};


const getUtility = (className: GhostClassName) => {
    const [prefix, ...options] = className.split(OptionsSeparator) as [PrefixClassName, PseudoClassSuffix, BreakpointSuffix, ThemeSuffix];
    const declarations = getDeclarations(prefix);
    if (!declarations) return {
        prefix
    };
    const selector = getFullSelector(prefix, options);

    return {
        declarations, selector, prefix, options
    }
}

export default getUtility;