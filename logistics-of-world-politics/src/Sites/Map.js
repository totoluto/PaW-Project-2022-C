import '../App.css';
import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet";
import DraggableMarker from "../Components/DebugMarker";

function Map() {
    const panamakanal = [9.11091489121999, -79.69740089917417]
    const magellanstrasse = [-53.38496814557531, -70.70800736557433]
    const gibraltar = [35.921322118708694, -5.6387297816764965]
    const bosporus = [41.11089753627905, 29.071178962349947]
    const suezkanal = [31.07425495971986, 32.30907423425833]
    const hormus = [26.470551190720712, 56.22253417968751]
    const malakka = [3.140528279897002, 100.42604147994945]
    return(
        <div>
            <MapContainer center={[0, 25]} zoom={2} scrollWheelZoom={true}>
                <TileLayer
                    url="https://{s}.tile.jawg.io/jawg-dark/{z}/{x}/{y}{r}.png?access-token=DRREC6tXiaabcmu2WnkGIr9bA96PxlzHWF7j9pivBWhDbCjPsZp4jhmT8HJDGisi"
                />
                <Marker position={panamakanal}>
                    <Popup>
                        Panamakanal
                    </Popup>
                </Marker>
                <Marker position={magellanstrasse}>
                    <Popup>
                        magellanstrasse
                    </Popup>
                </Marker>
                <Marker position={gibraltar}>
                    <Popup>
                        Gibraltar
                    </Popup>
                </Marker>
                <Marker position={bosporus}>
                    <Popup>
                        Bosporus
                    </Popup>
                </Marker>
                <Marker position={suezkanal}>
                    <Popup>
                        Suezkanal
                    </Popup>
                </Marker>
                <Marker position={hormus}>
                    <Popup>
                        Hormus
                    </Popup>
                </Marker>
                <Marker position={malakka}>
                    <Popup>
                        Suezkanal
                    </Popup>
                </Marker>
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
