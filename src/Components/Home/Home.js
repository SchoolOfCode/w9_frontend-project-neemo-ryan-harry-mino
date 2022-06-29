import { useNavigate } from "react-router-dom";
import "./Home.css";
import Card from "../Card/Card";
import Footer from "../Footer/Footer";
import Logo from "../Logo/Logo";

const Home = (props) => {
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
      </div>
    </div>
  );
};
export default Home;
