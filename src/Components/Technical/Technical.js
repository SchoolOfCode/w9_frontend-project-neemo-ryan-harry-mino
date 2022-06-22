import Section from "../Section/Section";
// import Footer from "../Footer/Footer"
const Technical = () => {
  return (
    <div>
      <h1> TECHNICAL </h1>
      {/* FRONTEND */}
      <Section
        title="Frontend"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
      />
      <Section title="HTML" content="Some links" className="html-section" />
      <Section title="CSS" content="Some links" className="css-section" />
      <Section
        title="JavaScript"
        content="Some links"
        className="javascript-section"
      />
      <Section title="React" content="Some links" className="react-section" />
      <Section
        title="Backend"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud "
      />

       {/* BACKEND  */}

      <Section
        title="Express"
        content="some links"
        className="express-section"
      />
      <Section title="Node" content="some links" className="node-section" />
      <Section
        title="PostgreSQL"
        content="some links"
        className="postgresql-section"
      />
      <Section title="Heroku" content="some links" className="heroku-section" />
    </div>
  );
};

export default Technical;
