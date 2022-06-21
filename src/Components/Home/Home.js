import { useNavigate } from "react-router-dom";
import "./Home.css"
import Cardcomponent from "../Cardcomponent/Cardcomponent";
const Home = (props) => {
const navigate = useNavigate() 
    return (
      <div>
        <div className="mainTitle">
          <h1> FOO-D FOR THOUGHT</h1>
          <p>INTRODUCTION SECTION</p>
        </div>
        <div className="wellbeignSection">
          <Cardcomponent className="wellbeing-section" title={"Wellbeing"} aboutSection= {"About Section"} />
          <button onClick={() => navigate("/wellbeing")}>CLICK ME</button>
        </div>
        <div className="technicalSection">
          <Cardcomponent className="tecnhical-section" title={"Technical"} aboutSection= {"About Section"} />
          <button onClick={() => navigate("/technical")}>CLICK ME</button>
        </div>

      </div>
    );
}
 
export default Home;