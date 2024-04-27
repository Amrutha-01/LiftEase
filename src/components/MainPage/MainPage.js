import React from "react";
import GetRide from "../GetRide/GetRidePage/GetRide";
import GiveRide from "../GiveRide/GiveRide";
import Navbar from "../Navbar/Navbar";
import LEWorkGet from "../LEWorkGet/LEWorkGet";

export default function MainPage() {
  return (
    <div className="main-page">
      <Navbar />
      <GetRide />
    </div>
  );
}
