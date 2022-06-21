import { useNavigate } from "react-router-dom";
import "./Home.css"
const Home = (props) => {
const navigate = useNavigate() 
    return (
      <div>
        <div className="mainTitle">
          <h1> FOO-D FOR THOUGHT</h1>
          <p>INTRODUCTION SECTION</p>
        </div>
        <div className="wellbeignSection">
          <h1> WELLBEING </h1>
          <p>ABOUT SECTION</p>
          <button onClick={() => navigate("/wellbeing")}>CLICK ME</button>
        </div>
        <div className="technicalSection">
          <h1> TECHNICAL </h1>
          <p>ABOUT SECTION</p>
          <button onClick={() => navigate("/technical")}>CLICK ME</button>
        </div>

      </div>
    );
}
 
export default Home;