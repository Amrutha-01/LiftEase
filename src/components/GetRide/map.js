import React, { useRef, useEffect, useState } from "react";
import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import markerIconPng from "leaflet/dist/images/marker-icon.png";
import { Icon } from "leaflet";
import RoutingMachine from "./RoutingMachine";
import L from "leaflet";
import { toHaveAccessibleDescription } from "@testing-library/jest-dom/matchers";
import { useSelector } from "react-redux";

export default function Map(props) {
  // let {pickup,drop} = props;
  // console.log(pickup,drop)
  const { pickup} = useSelector(
    (state) => state.pickup
  );
  const {drop}=useSelector((state)=>state.drop)
  console.log(pickup,drop)
  return (
    <div>
      <MapContainer
        center={[51.505, -0.09]}
        // center={[20.505, 79.09]}
        zoom={5}
        scrollWheelZoom={false}
        dragging={true}
        style={{ height: "80vh", width: "60vw" }}
        // whenCreated={(map) => setMap(map)}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://api.maptiler.com/maps/winter-v2/256/{z}/{x}/{y}.png?key=JlhDos5nXAz2NvTyUuks"
        />
        {pickup && (
          <Marker
            position={[pickup.lat, pickup.lon]}
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
        {drop && (
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
        {pickup&&drop&&(<RoutingMachine pickup={pickup} drop={drop} />)}
        {/* <ResetCenterView  pickup={pickup} drop={drop} /> */}
      </MapContainer>
    </div>
  );
}
