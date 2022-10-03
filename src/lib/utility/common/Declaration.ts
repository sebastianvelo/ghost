import PropertyCSS from "../../property/PropertyCSS";
import ClassNameTransformer from "./transformers/ClassNameTransformer";

interface Declaration {
  property: PropertyCSS;
  transformer?: ClassNameTransformer;
}

export default Declaration;