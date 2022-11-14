import '../App.css';
import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet";

function Map() {
    return(
        <div>
            <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={true}>
                <TileLayer
                    url="https://{s}.tile.jawg.io/jawg-dark/{z}/{x}/{y}{r}.png?access-token=DRREC6tXiaabcmu2WnkGIr9bA96PxlzHWF7j9pivBWhDbCjPsZp4jhmT8HJDGisi"
                />
                <Marker position={[51.505, -0.09]}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    );
}

export default Map;
