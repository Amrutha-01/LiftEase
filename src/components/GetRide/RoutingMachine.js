import L from "leaflet";
import { createControlComponent } from "@react-leaflet/core";
import "leaflet-routing-machine";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import { useMap } from "react-leaflet";
import './RoutingMachine.css';

const RoutingMachine = ({pickup,drop}) => {
  const mapp=useMap();
  L.Routing.control({
    waypoints: [
        L.latLng(pickup.lat, pickup.lon),
        L.latLng(drop.lat, drop.lon)
    ],
    createMarker: function () {
      return null; // Disable default marker creation
    }
}).addTo(mapp);
};

export default RoutingMachine;
