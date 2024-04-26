import React, { useRef ,useEffect,useState} from "react";
import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import markerIconPng from "leaflet/dist/images/marker-icon.png";
import { Icon } from "leaflet";
import RoutingMachine from "./RoutingMachine";

export default function Demo({pickUp,drop}) {
  const maps = {
    base: "https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.png"
  };
  const [map, setMap] = useState(null);

  return (
    
    <div>
      <MapContainer
        // center={[51.505, -0.09]}
        center={[20.505, 79.09]}
        zoom={5}
        scrollWheelZoom={false}
        dragging={true}
        style={{ height: "80vh", width: "60vw" }}
        whenCreated={map => setMap(map)}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.png"
        />
        {pickUp&&(
        <Marker
          position={[pickUp.lat, pickUp.lon]}
          icon={
            new Icon({
              iconUrl: markerIconPng,
              iconSize: [25, 41],
              iconAnchor: [12, 41],
            })
          }
        >
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
        
        )}
        {drop&&(
        <Marker
          position={[drop.lat, drop.lon]}
          icon={
            new Icon({
              iconUrl: markerIconPng,
              iconSize: [25, 41],
              iconAnchor: [7, 11], // You can adjust the anchor as per your marker's design
            })
          }
        >
          <Popup>
            Another CSS3 popup. <br /> Customizable too.
          </Popup>
        </Marker>
      )}
      <RoutingMachine 
      // waypoints={[
      //     [33.52001088075479, 36.26829385757446],
      //     [33.50546582848033, 36.29547681726967]
      //   ]}
      //   lineOptions={{ styles: [{ color: "#6FA1EC", weight: 4 }] }}
        />
      </MapContainer>
    </div>
  );
}
