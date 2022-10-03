import SelectorTransformer from "./selector/SelectorTransformer";
import Declaration from "./Declaration";

 interface Utility {
    declarations: Declaration[];
    selector?: SelectorTransformer;
}

export default Utility;