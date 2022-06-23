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
          content="The front-end of a website is the part that users interact with. Everything that you see when you’re navigating around the Internet, from fonts and colors to dropdown menus and sliders, is a combo of HTML, CSS, and JavaScript being controlled by your computer’s browser."
          className="front-end-title"
        />
        <div className="front-end-content">
          <div className="front-end-left-content">
            <Section
              title="HTML"
              content={<a target="_blank" href="https://htmlcheatsheet.com/">HTML CHEATSHEET</a>}
              className="html-section"
            />
            <Section 
            title="CSS" 
            content={<a target="_blank" href="https://htmlcheatsheet.com/css/">CSS CHEATSHEET</a>}
            className="css-section" 
             />
          </div>
          <div className="front-end-right-content">
            <Section
              title="JavaScript"
              content={<a target="_blank" href="https://htmlcheatsheet.com/js/">JAVASCRIPT CHEATSHEET</a>}
              className="javascript-section"
            />
            <Section
              title="React"
              content={<a target="_blank" href="https://beta.reactjs.org/">REACT BETA DOCS</a>}
              className="react-section"
            />
          </div>
        </div>
      </div>
      {/* BACKEND  */}
      <div className="back-end-div">
        <Section
          title="Backend"
          content="So what makes the front-end of a website possible? Where is all that data stored? This is where the back-end comes in. The back- end of a website consists of a server, an application, and a database. 

A back-end developer builds and maintains the technology that powers those components which, together, enable the user-facing side of the website to even exist in the first place."
          className="back-end-title"
        />
        <div className="back-end-content">
          <div className="back-end-left-content">
            <Section
              title="Express"
              content={<a target="_blank" href="https://expressjs.com/en/starter/installing.html">EXPRESS DOCS</a>}
              className="express-section"
            />
            <Section
              title="Node"
              content={<a target="_blank" href="https://nodejs.org/en/docs/">NODE DOCS</a>}
              className="node-section"
            />
          </div>
          <div className="back-end-right-content">
            <Section
              title="PostgreSQL"
              content={<a target="_blank" href="https://sqlbolt.com/">PostgreSQL PRACTICAL LEARNING</a>}
              className="postgresql-section"
            />
            <Section
              title="Heroku"
              content={<a target="_blank" href="https://devcenter.heroku.com/categories/reference">HEROKU DOCS</a>}
              className="heroku-section"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technical;
