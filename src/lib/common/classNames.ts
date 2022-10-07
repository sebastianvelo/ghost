import GhostClassName from "../className/GhostClassName";
import { utilityExists } from "../utility/utilities/Utilities";

const removeDuplicates = (arr: any[]) => Array.from(new Set(arr));
const filterInvalidClasses = (arr: string[]) => removeDuplicates(arr).filter(utilityExists);

const getAllClassesFromDocument = () => Array.from(document.querySelectorAll("body, body *"));
const flatClasses = (e: Element) => e.className.split(" ");

const getUniquesClassesFromDocument = (): string[] => getAllClassesFromDocument().flatMap(flatClasses);

const sources: any = {
    "onload": getUniquesClassesFromDocument,
};

export const getGhostClassNames = (type: string) =>
    filterInvalidClasses(sources[type] ? sources[type]() : []).sort() as GhostClassName[];
