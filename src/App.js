import logo from './logo.svg';
import './App.css';
import Counters from './Counters';
import Todolist from './Todolist/Todolist';
import Imagesearch from './Imagesearch/Imagesearch';
import Imagesearchfn from './Imagesearch/Imagesearchfn';
import Weather from './WeatherApp/Weather';

// import{
//     BrowserRouter as Router,
//     Routes,
//     Route,
//     Link
// } from "react-router-dom";    


function App() {
  return (
  
    <div className="App">
      <Weather/>
    </div>
  //      <Router>
  //      <div>
  //        <nav>
  //          <ul> 
  //            <li>
  //              <Link to="/Counters">Counters</Link>
  //            </li>
  //            <li>
  //              <Link to="/todo">Todo</Link>
  //            </li> 
  //            <li>
  //              <Link to="/">home</Link>
  //            </li>
  //            <li>
  //              <Link to="/Imagesearch">Imagesearch</Link>
  //            </li> 
  //            <li>
  //              <Link to="/Imagesearchfn">Imagesearch</Link>
  //            </li>  

  //            <li>
  //              <Link to="/WeatherReport">WeatherReport</Link>
  //            </li> 
  //          </ul>
  //        </nav>
  //       </div> 
  //   <Routes>
  //   <Route path="counters" element={<Counters/>} >
      
  //   </Route>
  //   <Route path="/todo" element={<Todolist/>} >
      
  //   </Route>
  //   <Route path="/" element>
      
  //   </Route>
  //   <Route path="/imagesearch" element={<Imagesearch/>} >
      
  //   </Route> 
  //   <Route path="/imagesearchfn" element={<Imagesearchfn/>}  > 
      
    
  //    <Route path="/WeatherReport" element={<WeatherReport/>}  >

  // </Route>
  // </Routes>
  // </Router>  
)
}
export default App;
