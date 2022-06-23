import { useEffect, useState } from "react";
import Section from "../Section/Section";
import "./Technical.css";
import Footer from "../Footer/Footer";
import Logo from "../Logo/Logo";

const Technical = (props) => {
   const [quote, setQuote] = useState("");
   const [author, setAuthor] = useState("");

   useEffect(() => {
     async function fetchData() {
       async function randomQuote() {
         const id = Math.floor(Math.random() * 1000);
         const response = await fetch(
           `http://localhost:5432/quotes/${id.toString()}`
         );
         console.log(response);
         const data = await response.json();
         console.log(data);
         setQuote(data.payload[0].text);
         setAuthor(data.payload[0].author);
       }
       randomQuote();
     }
     fetchData();
     console.log("useEffect");
   }, []);

  return (
    <div className="technical-div">
      <Logo />
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
      <div className="footer-class">
        <Footer />
        <p className="quote-paragraph">
          {quote} {author}
        </p>
      </div>
    </div>
  );
};

export default Technical;
