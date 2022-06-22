import { useNavigate } from "react-router-dom";
import "./Home.css";
import Cardcomponent from "../Cardcomponent/Cardcomponent";
import Footer from "../Footer/Footer";
import {useState, useEffect} from "react"

const Home = (props) => {
  const [quote, setQuote] = useState("")
  useEffect(() => {
    async function fetchData() {
      async function randomQuote() {
        const id = Math.floor(Math.random()* 1000); 
        const response = await fetch(`http://localhost:5432/quotes/${id.toString()}`);
        console.log(response);
        const data = await response.json();  
        console.log(data);
        setQuote(data.payload[0].text)
      }
      randomQuote();
    }
    fetchData()
    console.log("useEffect")
  },[])
  
  const navigate = useNavigate();
  return (
    <div className="Home">
      <div className="title-section">
        <h1> FOO-D FOR THOUGHT</h1>
        <p>{quote}</p>
      </div>
      <div className="cards">
        <Cardcomponent
          className="wellbeing-section"
          title="Wellbeing"
          aboutSection="About Section"
          path="/wellbeing"
          navigate={navigate}
        />
        <Cardcomponent
          className="technical-section"
          title="Technical"
          aboutSection="About Section"
          path="technical"
          navigate={navigate}
        />
      </div>
<div className="footer-class">
      <Footer />
      <p>{quote}</p>  
      </div>
    </div>
  );
};
export default Home;