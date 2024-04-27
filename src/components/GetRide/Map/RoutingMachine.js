import L from "leaflet";
import { createControlComponent } from "@react-leaflet/core";
import "leaflet-routing-machine";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import { useMap } from "react-leaflet";
import "./RoutingMachine.css"

const RoutingMachine = ({pickup,drop}) => {
    console.log(pickup)
  const mapp=useMap();
  L.Routing.control({
    waypoints: [
        L.latLng(pickup.lat, pickup.lon),
        L.latLng(drop.lat, drop.lon)
    ],
    
}).addTo(mapp);
};

export default RoutingMachine;
