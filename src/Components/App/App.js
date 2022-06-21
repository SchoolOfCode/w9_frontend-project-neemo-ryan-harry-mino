import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../Home/Home';
import Wellbeing from '../Wellbeing/Wellbeing';

function App() {
  return (
    <div>

  <Router> 
  <Routes>
  <Route path= "/" element={<Home/>}/> 
  <Route path= "/Wellbeing" element={<Wellbeing/>}/> 
    </Routes>
    </Router>
    </div>
  )
}

export default App;

