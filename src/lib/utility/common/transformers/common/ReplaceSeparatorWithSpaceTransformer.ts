import { SuffixSeparator } from "../../../../common/types";

const ReplaceSeparatorWithSpaceTransformer =
    (suffix: string) => suffix.split(SuffixSeparator).join(" ");

export default ReplaceSeparatorWithSpaceTransformer;