import GhostPrefix from "../../../../utility/enum/GhostPrefix";
import GhostDeclaration from "../../../../utility/GhostDeclaration";
import SelectorTransformer from "../../../../utility/types/SelectorTransformer";
import { IUtilities } from "../../Utilities";

export interface IGenericUtility {
    prefix: GhostPrefix;
    selector?: SelectorTransformer;
    declarations: GhostDeclaration[];
}

const GenericUtility = (data: IGenericUtility): IUtilities => ({
    [data.prefix]: { ...data }
});

export default GenericUtility;