import GetClassNamesFromSource from "./GetClassNamesFromSource";
import getGhostClassNamesFromDocument from "./impl/getGhostClassNamesFromDocument";
import getGhostClassNamesFromFiles from "./impl/getGhostClassNamesFromFiles";
import getGhostClassNamesFromMock from "./impl/getGhostClassNamesFromMock";

interface ISources {
    [key: string]: GetClassNamesFromSource;
}

const sources: ISources = {
    document: getGhostClassNamesFromDocument,
    files: getGhostClassNamesFromFiles,
    mock: getGhostClassNamesFromMock
};

export default sources;