import React from "react";
import { Link } from "react-router-dom";

export default function LandingPage(){
    return(
        <div className="landing-page">
            <Link to="/mainPage">
                <button>Get started</button>
            </Link>
        </div>
    )
}