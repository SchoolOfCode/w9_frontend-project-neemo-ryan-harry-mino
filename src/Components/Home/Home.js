import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Home.css";
import Card from "../Card/Card";
import Footer from "../Footer/Footer";
import Logo from "../Logo/Logo";

const Home = (props) => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    async function fetchData() {
      async function randomQuote() {
        const id = Math.floor(Math.random() * 1000).toString();
        const response = await fetch(`http://localhost:5432/quotes/${id}`);
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

  const navigate = useNavigate();
  return (
    <div className="Home">
      <div className="title-section">
        <h1> FOO-D FOR THOUGHT</h1>
      </div>
      <Logo />
      <div className="cards">
        <Card
          className="wellbeing-section"
          title="Wellbeing"
          aboutSection="Click here if you'd like some useful resources on how to manage your mental wellbeing as a developer!"
          path="/wellbeing"
          navigate={navigate}
        />
        <Card
          className="technical-section"
          title="Technical"
          aboutSection="Click here if you wanted some resources to help with your journey in becoming a full-stack developer!"
          path="technical"
          navigate={navigate}
        />
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
export default Home;
