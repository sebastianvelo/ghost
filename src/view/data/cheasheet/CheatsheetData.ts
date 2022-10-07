import { CheatsheetTableProps } from "../../components/pages/cheatsheet/body/CheatsheetBody";
import * as Sections from "./body/CheatsheetSectionsData";

const CheatsheetData: CheatsheetTableProps = {
    sections: [
        Sections.GeneralSection,
        Sections.SpacingSection,
        Sections.LayoutPositioningSection,
        Sections.FlexAndGridSection,
        Sections.BorderAndOutlineSection,
        Sections.InteractivitySection,
        Sections.OptionsSection
    ]
};

export default CheatsheetData;