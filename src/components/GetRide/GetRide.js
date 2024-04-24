import React, { useState } from "react";
import "../../index.css";

export default function GetRide(){
    const [pickup,setPickUp]=useState("")
    const [drop,setDrop]=useState("")

    return(
        <div className="get-ride">
            <div className="searching-part flex flex-col">
                <input type="text" onChange={(e)=>{setPickUp(e.target.value)}} value={pickup} placeholder="Pickup Location" className="border-2 w-40 m-5"/>
                <input type="text" onChange={(e)=>{setDrop(e.target.value)}} value={drop} placeholder="Drop Location" className="border-2 w-40 m-5"/>
                <button className="bg-black text-white w-40 m-5">Search</button>
            </div>
        </div>
    )
}