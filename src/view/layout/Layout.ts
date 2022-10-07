const Layout = (body: string) => `
    <header class="d_flex fd_col px_20">
        <h1 class="txt-size_38 txt_white">GhostCSS</h1>
    </header>
    <main class="overflow_hidden px_64 bg_0-0-0">
        ${body}
    </main>
    <footer class="p_16 txt_white txt-size_24 txt-align_right">
    </footer>
`;

export default Layout;