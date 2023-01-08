import '../App.css';
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import Map from "./Map";
import Magellanstrasse from "./Magellanstrasse";
import Gibraltar from "./Gibraltar";
import Bosporus from "./Bosporus";
import Suezkanal from "./Suezkanal";
import Hormus from "./Hormus";
import Malakka from "./Malakka";
import Error from "./Error";


function Panamakanal() {
    return(
        <div className="info">
            <h1>Panamakanal:</h1>
            Der Panamakanal ist eine künstliche, rund 82 Kilometer lange Wasserstraße mit, die die Landenge von Panama in Mittelamerika durchschneidet, den Atlantik mit dem Pazifik für die Schifffahrt verbindet und ihr damit die Fahrt um das Kap Hoorn oder durch die Magellanstraße an der Südspitze Südamerikas erspart.
            <br/>
            Arbeiten begannen 1881 bzw. 1894. Der 1914 schließlich eröffnete Kanal mit Schleusen ist eine der wichtigsten Wasserstraßen der Welt; etwa 13.700 Schiffe (Mittel der Jahre 2017 bis 2019; 2011 bis 2013: 14.300) durchfahren ihn pro Jahr.
        </div>
    );
}

export default Panamakanal;
