import Category from "../category/Category";
import { RowsContainersProps } from "../category/row/RowsContainer";

export interface CheatsheetSectionProps {
    title: string;
    containers: RowsContainersProps[];
}

const CheatsheetSection = (props: CheatsheetSectionProps) => `
    <div>
        <h1>${props.title}</h1>
        ${Category(props)}
    </div>
`;

export default CheatsheetSection;