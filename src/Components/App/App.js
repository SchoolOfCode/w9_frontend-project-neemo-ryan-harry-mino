import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../Home/Home';
import Technical from '../Technical/Technical';
import Wellbeing from '../Wellbeing/Wellbeing';

function App() {
  return (
    <div>
  <Router> 
  <Routes>
  <Route path= "/" element={<Home/>}/> 
  <Route path= "/Wellbeing" element={<Wellbeing/>}/> 
  <Route path= "/Technical" element={<Technical/>}/> 
    </Routes>
    </Router>
    </div>
  )
}

export default App;

