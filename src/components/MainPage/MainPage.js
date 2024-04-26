import React from "react";
import GetRide from "../GetRide/GetRide";
import GiveRide from "../GiveRide/GiveRide";
import Navbar from "../Navbar/Navbar";

export default function MainPage(){
    return(
        <div className="main-page">
            <Navbar/>
            <GetRide/>
        </div>
    )
}