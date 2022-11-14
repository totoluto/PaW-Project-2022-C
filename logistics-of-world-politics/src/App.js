import './App.css';
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import Map from "./Sites/Map";
import Error from "./Sites/Error";

function App() {
  return(
      <div className="App">
          <BrowserRouter>
              <nav className={"App-nav"}>
                  <ul className={"App-ul-nav"}>
                      <Link to="/" className={"Navlink"}><li className="App-li-nav">Karte</li></Link>
                      <Link to="/" className={"Navlink"}><li className="App-li-nav">Other Stuff</li></Link>
                      <Link to="/" className={"Navlink"}><li className="App-li-nav">Other Stuff</li></Link>
                      <Link to="/" className={"Navlink"}><li className="App-li-nav">Other Stuff</li></Link>
                      <Link to="/" className={"Navlink"}><li className="App-li-nav">Other Stuff</li></Link>
                      <Link to="/" className={"Navlink"}><li className="App-li-nav">Other Stuff</li></Link>
                  </ul>
              </nav>
              <div>
                  <Routes>
                      <Route path="/" element={<Map/>}/>
                      <Route path="/" element={<Map/>}/>
                      <Route path="/" element={<Map/>}/>
                      <Route path="/" element={<Map/>}/>
                      <Route path="/" element={<Map/>}/>
                      <Route path="*" element={<Error/>}/>
                  </Routes>
              </div>
          </BrowserRouter>
      </div>
  );
}

export default App;
