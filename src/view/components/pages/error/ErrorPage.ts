const ErrorPage = (error: string = "Page not found") => `
    <div class="txt_red txt-size_32 p_12">${error}</div>
`;

export default ErrorPage;