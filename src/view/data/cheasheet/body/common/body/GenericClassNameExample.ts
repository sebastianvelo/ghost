const GenericClassNameExample = (className: string, content?: string) => `
    <div class="d_flex fd_col align-items_center h_max-content">
        <h2 class="txt_primary">.${className.split(" ").join(".")}</h2>
        ${content ?? ""}
    </div>
`;
export default GenericClassNameExample;