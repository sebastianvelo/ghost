import PrefixClassName from "./PrefixClassName";
import Options from "./Options";
import { PropertySeparatorType } from "../common/types";

export type GenericClassName<P extends string, S extends string | number> = `${P}${PropertySeparatorType}${S}`

type GhostClassName = `${PrefixClassName}${Options}`;

export default GhostClassName;
