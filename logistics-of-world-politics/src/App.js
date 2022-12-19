import './App.css';
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import Map from "./Sites/Map";
import Error from "./Sites/Error";
import Gibraltar from "./Sites/Gibraltar";
import Panamakanal from "./Sites/Panamakanal";
import Magellanstrasse from "./Sites/Magellanstrasse";
import Bosporus from "./Sites/Bosporus";
import Suezkanal from "./Sites/Suezkanal";
import Hormus from "./Sites/Hormus";
import Malakka from "./Sites/Malakka";

function App() {
  return(
      <div className="App">
          <BrowserRouter>
              <nav className={"App-nav"}>
                  <ul className={"App-ul-nav"}>
                      <Link to="/" className={"Navlink"}><li className="App-li-nav">Karte</li></Link>
                      <Link to="/panamakanal" className={"Navlink"}><li className="App-li-nav">Panamakanal</li></Link>
                      <Link to="/magellanstrasse" className={"Navlink"}><li className="App-li-nav">Magellanstrasse</li></Link>
                      <Link to="/gibraltar" className={"Navlink"}><li className="App-li-nav">Gibraltar</li></Link>
                      <Link to="/bosporus" className={"Navlink"}><li className="App-li-nav">Bosporus</li></Link>
                      <Link to="/suezkanal" className={"Navlink"}><li className="App-li-nav">Suezkanal</li></Link>
                      <Link to="/hormus" className={"Navlink"}><li className="App-li-nav">Strasse von Hormus</li></Link>
                      <Link to="/malakka" className={"Navlink"}><li className="App-li-nav">Strasse von Malakka</li></Link>
                  </ul>
                  <div className={"footer"}>Logistics of world Politics</div>
              </nav>
              <div>
                  <Routes>
                      <Route path="/" element={<Map/>}/>
                      <Route path="/panamakanal" element={<Panamakanal/>}/>
                      <Route path="/magellanstrasse" element={<Magellanstrasse/>}/>
                      <Route path="/gibraltar" element={<Gibraltar/>}/>
                      <Route path="/bosporus" element={<Bosporus/>}/>
                      <Route path="/suezkanal" element={<Suezkanal/>}/>
                      <Route path="/hormus" element={<Hormus/>}/>
                      <Route path="/malakka" element={<Malakka/>}/>
                      <Route path="*" element={<Error/>}/>
                  </Routes>
              </div>
          </BrowserRouter>
      </div>
  );
}

export default App;
