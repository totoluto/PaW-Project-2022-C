import {Polygon} from 'react-leaflet';
import '../App.css';
import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet";
import DraggableMarker from "../Components/DebugMarker";
import DebugMarker from "../Components/DebugMarker";
import {Link} from "react-router-dom";

function Map() {
    const panamakanal = [9.11091489121999, -79.69740089917417]
    const magellanstrasse = [-53.38496814557531, -70.70800736557433]
    const gibraltar = [35.921322118708694, -5.6387297816764965]
    const bosporus = [41.11089753627905, 29.071178962349947]
    const suezkanal = [31.07425495971986, 32.30907423425833]
    const hormus = [26.470551190720712, 56.22253417968751]
    const malakka = [3.140528279897002, 100.42604147994945]
    const asiaAmerica = [
        [
            [29.25549499558665, 127.97911854729703],
            [24.980287601887333, 130.60545450749],
            [20.466735155329864, 127.93556111751005],
            [15.509904531413927, 236.02339477246997],
            [20.457206460517163, 239.3636088277306],
            [25.051505246958722, 236.32031250000003]
        ]
    ]
    const asiaEurope = [
        [
            [10.31491928581316, 118.99443769322464],
            [6.402648405963896, 121.02517314931434],
            [5.477856485570586, 125.73719387157176],
            [-8.228437266155943, 116.80853099057529],
            [3.337953961416485, 95.71605238689143],
            [5.7908968128719565, 57.83651459490426],
            [10.833305983642491, 50.80211956191174],
            [5.353521355337334, 38.935831266281255],
            [30.751277776257812, 28.478553238968676],
            [35.60371874069731, 5.8929712020164],
            [32.10118973232094, -14.234450332152715],
            [48.574789910928864, -21.707562418593803],
            [50.17689812200107, -18.281467475685663],
            [49.38237278700955, -13.4481857144393],
            [38.41055825094609, -8.17483185893379],
            [40.04443758460859, 8.795720601760767],
            [33.7243396617476, 37.61170042116199],
            [17.14079039331665, 46.05308152570594],
            [19.973348786110613, 55.546808084404425],
            [13.581920900545857, 63.45676358761767],
            [10.833305983642491, 102.12154553448559],
            [3.8642546157214084, 114.78492204541547]
        ]
    ]

    const europeAmerica = [
        [
            [19.632067278255374, -65.92866636304517],
            [21.208451258480384, -65.0832223368258],
            [38.82259097617713, -20.750819611830575],
            [37.16031654673677, -21.093683084404418],
            [36.31512514748051, -19.248398181876833],
            [19.14530643342011, -63.76469849317601]
        ]
    ]
    return(
        <div>
            <MapContainer center={[0, 25]} zoom={2} scrollWheelZoom={true}>
                <TileLayer
                    url="https://{s}.tile.jawg.io/jawg-dark/{z}/{x}/{y}{r}.png?access-token=DRREC6tXiaabcmu2WnkGIr9bA96PxlzHWF7j9pivBWhDbCjPsZp4jhmT8HJDGisi"
                />
                <Marker position={panamakanal}>
                    <Popup>
                        Der Panamakanal ist ein künstlicher Wasserweg, der den Atlantischen Ozean mit dem Pazifischen Ozean durch Panama in Mittelamerika verbindet. Er wurde von den Vereinigten Staaten zwischen 1904 und 1914 gebaut und verkürzte die Reisezeit für Schiffe zwischen den Ost- und Westküsten von Nord- und Südamerika erheblich. <Link to="/panamakanal">Mehr lesen</Link>
                    </Popup>
                </Marker>
                <Marker position={magellanstrasse}>
                    <Popup>
                        Der Magellanstraße ist ein schmaler Wasserweg, der das Festland Südamerikas vom Archipel Tierra del Fuego an der Südspitze des Kontinents trennt. Sie liegt in der Patagonien-Region von Chile und Argentinien. Der Kanal wurde nach Ferdinand Magellan, dem portugiesischen Entdecker, benannt, der im Jahr 1520 während seiner Weltumsegelung als erster Europäer hindurchsegelte. <Link to="/magellanstrasse">Mehr lesen</Link>
                    </Popup>
                </Marker>
                <Marker position={gibraltar}>
                    <Popup>
                        Der Gibraltar-Straße ist ein schmaler Wasserweg, der die Iberische Halbinsel (Spanien und Portugal) von Afrika trennt. Sie verbindet den Atlantischen Ozean mit dem Mittelmeer und hat an ihrem schmalsten Punkt eine Breite von etwa 8,7 Meilen (14 km). <Link to="/gibraltar">Mehr lesen</Link>
                    </Popup>
                </Marker>
                <Marker position={bosporus}>
                    <Popup>
                        Die Bosporus-Straße ist ein schmaler Wasserweg, der Europa und Asien trennt und Teil der Grenze zwischen dem Schwarzen Meer und dem Marmarameer bildet. Sie befindet sich in Istanbul, der Türkei, und ist etwa 50 km lang und variiert in der Breite von etwa 1,2 bis 6,5 km. <Link to="/bosporus">Mehr lesen</Link>
                    </Popup>
                </Marker>
                <Marker position={suezkanal}>
                    <Popup>
                        Der Suezkanal ist ein künstlicher Wasserweg in Ägypten, der das Mittelmeer mit dem Roten Meer verbindet. Er wurde im 19. Jahrhundert gebaut und ist etwa 193 km lang. <Link to="/suezkanal">Mehr lesen</Link>
                    </Popup>
                </Marker>
                <Marker position={hormus}>
                    <Popup>
                        Die Straße von Hormus ist ein schmaler Wasserweg im Persischen Golf, der die Arabische Halbinsel von Iran trennt. Sie ist an ihrem schmalsten Punkt etwa 34 km breit und ist eine wichtige Schifffahrtsroute, da sie der einzige Seeweg vom Golf zum offenen Ozean ist. <Link to="/hormus">Mehr lesen</Link>
                    </Popup>
                </Marker>
                <Marker position={malakka}>
                    <Popup>
                        Die Straße von Malakka ist ein schmaler Wasserweg, der die Malaiische Halbinsel von der indonesischen Insel Sumatra trennt. Sie liegt zwischen dem Andamanischen Meer im Westen und dem Südchinesischen Meer im Osten und ist eine der belebtesten Schifffahrtsstraßen der Welt. Die Straße von Malakka ist etwa 970 km lang und variiert in der Breite von 32 bis 483 km. <Link to="/malakka">Mehr lesen</Link>
                    </Popup>
                </Marker>
                <Polygon positions={asiaAmerica}>
                    <Popup>
                        Transportierter Wert: 15,4 TEU
                        <br/>Gehandelte Ware: Autos, Rohöl, Computer, Pharmazeutische Produkte, TV-Geräte & Telefone
                    </Popup>
                </Polygon>
                <Polygon positions={asiaEurope}>
                    <Popup>
                        Transportierter Wert: 17,7 TEU
                        <br/>Gehandelte Ware: Konsumgüter, Maschinen, Ausrüstungen, Kleidung, Schuhe
                    </Popup>
                </Polygon>
                <Polygon positions={europeAmerica}>
                    <Popup>
                        Transportierter Wert: 4,4 TEU
                        <br/>Gehandelte Ware: Maschinen, Fahrzeuge, Chemikalien, Fertigzeugnisse
                    </Popup>
                </Polygon>
            </MapContainer>
        </div>
    );

    /*
    * Panamakanal: { lat: 9.11091489121999, lng: -79.69740089917417}
    * Magellanstrasse: { lat: -53.38496814557531, lng: -70.70800736557433}
    * Gibraltar: { lat: 35.921322118708694, lng: -5.6387297816764965}
    * Bosporus: { lat: 41.11089753627905, lng: 29.071178962349947 }
    * Suezkanal: { lat: 31.07425495971986, lng: 32.30907423425833 }
    * Strasse von hormus: { lat: 26.470551190720712, lng: 56.22253417968751 }
    * Strasse von Malakka: { lat: 3.140528279897002, lng: 100.42604147994945 }
     */
}

export default Map;
