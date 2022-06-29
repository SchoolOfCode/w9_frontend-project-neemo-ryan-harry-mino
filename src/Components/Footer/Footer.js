import { useEffect, useState } from "react";
import "./Footer.css";
const Footer = (props) => {
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
  }, []);
  return (
    <footer className="footer-component">
      <p className="quote-paragraph">
        {quote} {author}
      </p>
    </footer>
  );
};
export default Footer;
