import GhostClassName from "../className/GhostClassName";
import { utilityExists } from "../utility/utilities/Utilities";

const removeDuplicates = (arr: any[]) => Array.from(new Set(arr));
const filterInvalidClasses = (arr: string[]) => removeDuplicates(arr).filter(utilityExists);

const getAllClassesFromDocument = () => Array.from(document.querySelectorAll("body, body *"));
const flatClasses = (e: Element) => e.className.split(" ");

export const getGhostClassNames = (classNames: string[]) =>
    filterInvalidClasses(classNames).sort() as GhostClassName[];

export const getGhostClassNamesFromDocument = () =>
    getGhostClassNames(getAllClassesFromDocument().flatMap(flatClasses));
