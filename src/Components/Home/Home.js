import { useNavigate } from "react-router-dom";
import "./Home.css";
import Cardcomponent from "../Cardcomponent/Cardcomponent";
const Home = (props) => {
  const navigate = useNavigate();
  return (
    <div className="Home">
      <div className="title-section">
        <h1> FOO-D FOR THOUGHT</h1>
        <p>INTRODUCTION SECTION</p>
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
    </div>
  );
};

export default Home;
