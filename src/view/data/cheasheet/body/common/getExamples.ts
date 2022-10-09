import GhostPrefix from "../../../../../lib/utility/enum/GhostPrefix";

const getExamples = (prefix: GhostPrefix, suffixes: string[]) =>
    suffixes.map(suffix => `${prefix}_${suffix}`);

export default getExamples;