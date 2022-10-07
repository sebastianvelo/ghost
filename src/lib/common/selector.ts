import PrefixClassName from "../className/PrefixClassName";
import Utilities from "../utility/utilities/Utilities";
import { PropertySeparator } from "./types";

const PseudoClassMap: any = {
    even: "nth-child(even)",
    odd: "nth-child(odd)",
    first: "first-child",
    last: "last-child"
};

const getPseudoClass = (pseudoClass: string) => PseudoClassMap[pseudoClass] ?? pseudoClass;

const getSelectors = (options: [string, string, string]) => {
    const [pseudoClass = "", breakpoint = "", theme = ""] = options;

    const themeParentSelector = theme ? `.${theme}` : "";
    const breakpointSelector = breakpoint ? `\\\:\\\:${breakpoint}` : "";
    const pseudoClassSelector = pseudoClass ? `\\\:${pseudoClass}:${getPseudoClass(pseudoClass)}` : "";
    return [pseudoClassSelector, breakpointSelector, themeParentSelector];
}

const getSelector = (prefix: PrefixClassName, options: [string, string, string]) => {
    const [pseudoClass, breakpoint, theme] = getSelectors(options);

    return `${theme} .${prefix}${breakpoint}${pseudoClass}`;
}

const scapePrefix = (prefix: PrefixClassName) => ["%", "."]
    .reduce((acc, val) => acc.replace(val, `\\${val}`), prefix);

export const getFullSelector = (prefix: PrefixClassName, options: [string, string, string]): string => {
    const [property] = prefix.split(PropertySeparator);
    const utility = Utilities[property];
    const scapedPrefix = scapePrefix(prefix);
    const selector = getSelector(scapedPrefix, options);
    return utility && utility.selector ? utility.selector(selector) : selector;
}
