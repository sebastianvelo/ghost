import RowsContainer, { RowsContainersProps } from "./row/RowsContainer";

export interface CategoryProps {
    containers: RowsContainersProps[];
}

const Category = (props: CategoryProps) => `
    <div class="space-y_16">
        ${props.containers.map(RowsContainer).join(" ")}
    </div>
`;

export default Category;