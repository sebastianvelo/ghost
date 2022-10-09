import GhostPrefix from "../GhostPrefix";
import PropertyCSS from "../PropertyCSS";
import IUtilities from "./IUtilities";
import ClassNameTransformer from "./transformers/ClassNameTransformer";

const SimpleUtility = (prefix: GhostPrefix, property: PropertyCSS, transformer?: ClassNameTransformer): IUtilities => ({
    [prefix]: {
        declarations: [{ property, transformer }]
    }
});

export default SimpleUtility;