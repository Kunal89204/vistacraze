// src/app/about/layout.js
const AboutLayout = ({ children }) => {
  return (
    <div>
      <header>
        hello1
      </header>
      <main>{children}</main>
      <footer>
          hello2
      </footer>
    </div>
  );
};

export default AboutLayout;
