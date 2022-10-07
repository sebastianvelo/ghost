import GhostPrefix from "../GhostPrefix";
import PropertyCSS from "../PropertyCSS";
import ClassNameTransformer from "./transformers/ClassNameTransformer";

const OneActionUtility = (prefix: GhostPrefix, property: PropertyCSS, transformer?: ClassNameTransformer) => ({
    [prefix]: {
        declarations: [{ property, transformer }]
    }
});

export default OneActionUtility;