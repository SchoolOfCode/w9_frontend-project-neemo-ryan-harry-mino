import Section from "../Section/Section";
import "./Technical.css";

const Technical = () => {
  return (
    <div className="technical-div">
      <h1> TECHNICAL </h1>
      <div className="front-end-div">
        {/* FRONTEND */}
        <Section
          title="Frontend"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
          className="front-end-title"
        />
        <div className="front-end-content">
          <div className="front-end-left-content">
            <Section
              title="HTML"
              content="Some links"
              className="html-section"
            />
            <Section title="CSS" content="Some links" className="css-section" />
          </div>
          <div className="front-end-right-content">
            <Section
              title="JavaScript"
              content="Some links"
              className="javascript-section"
            />
            <Section
              title="React"
              content="Some links"
              className="react-section"
            />
          </div>
        </div>
      </div>
      {/* BACKEND  */}
      <div className="back-end-div">
        <Section
          title="Backend"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud "
          className="back-end-title"
        />
        <div className="back-end-content">
          <div className="back-end-left-content">
            <Section
              title="Express"
              content="some links"
              className="express-section"
            />
            <Section
              title="Node"
              content="some links"
              className="node-section"
            />
          </div>
          <div className="back-end-right-content">
            <Section
              title="PostgreSQL"
              content="some links"
              className="postgresql-section"
            />
            <Section
              title="Heroku"
              content="some links"
              className="heroku-section"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technical;
