// src/app/about/layout.js
const AboutLayout = ( { children } ) => {
    return (
        <div>
            <header>
                header
            </header>
            <main>{children}</main>
            <footer>
                footer
            </footer>
        </div>
    );
};

export default AboutLayout;
