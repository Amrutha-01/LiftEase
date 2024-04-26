import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar">
      <nav >
        <ul className="flex flex-row justify-between m-5 mx-7">
          <li style={{ textDecoration: "none", "list-style-type": "none" }}>
            LiftEase
          </li>
          <li><Link to="/getRide"> Get Lift</Link></li>
          <li><Link to="/giveRide"> Give Lift</Link></li>
        </ul>
      </nav>
    </div>
  );
}
