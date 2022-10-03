import PrefixClassName from "../className/PrefixClassName";
import Utilities from "../utility/utilities/Utilities";
import { PropertySeparator } from "./types";

const getSelectors = (options: [string, string, string]) => {
    const [pseudoClass = "", breakpoint = "", theme = ""] = options;

    const themeParentSelector = theme ? `.${theme}` : "";
    const breakpointSelector = breakpoint ? `\\\:\\\:${breakpoint}` : "";
    const pseudoClassSelector = pseudoClass ? `\\\:${pseudoClass}:${pseudoClass}` : "";
    return [pseudoClassSelector, breakpointSelector, themeParentSelector];
}

const getSelector = (prefix: PrefixClassName, options: [string, string, string]) => {
    const [pseudoClass, breakpoint, theme] = getSelectors(options);

    return `${theme} .${prefix}${breakpoint}${pseudoClass}`;
}

export const getFullSelector = (prefix: PrefixClassName, options: [string, string, string]): string => {
    const [property] = prefix.split(PropertySeparator);
    const utility = Utilities[property];
    const selector = getSelector(prefix, options);
    return utility && utility.selector ? utility.selector(selector) : selector;
}
