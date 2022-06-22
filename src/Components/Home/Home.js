import { useNavigate } from "react-router-dom";
import "./Home.css";
import Cardcomponent from "../Cardcomponent/Cardcomponent";
import Footer from "../Footer/Footer";
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

const navigate = useNavigate() 
    return (
      <div>
        <div className="mainTitle">
          <h1> FOO-D FOR THOUGHT</h1>
          <p>INTRODUCTION SECTION</p>
        </div>
        <div>
          <Cardcomponent className="wellbeing-section" title={"Wellbeing"} aboutSection= {"About Section"} />
          <button onClick={() => navigate("/wellbeing")}>CLICK ME</button>
        </div>
        <div>
          <Cardcomponent className="tecnhical-section" title={"Technical"} aboutSection= {"About Section"} />
          <button onClick={() => navigate("/technical")}>CLICK ME</button>
        </div>
        <Footer/>

      </div>
    </div>
  );
};

export default Home;
