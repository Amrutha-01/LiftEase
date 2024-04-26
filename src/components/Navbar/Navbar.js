import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase";
import { signOut } from "firebase/auth";
import "./Navbar.css";

export default function Navbar() {
  const [user] = useAuthState(auth);
  const [showSignOut, setShowSignOut] = useState(false);
  const signOutRef = useRef(null);

  // Function to handle sign-out
  const handleSignOut = () => {
    signOut(auth);
  };

  useEffect(() => {
    // Event listener to detect clicks outside sign-out button
    function handleClickOutside(event) {
      if (signOutRef.current && !signOutRef.current.contains(event.target)) {
        setShowSignOut(false);
      }
    }

    // Add event listener when sign-out option is shown
    if (showSignOut) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }

    // Cleanup function to remove event listener
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [showSignOut]);

  return (
    <div className="navbar-wrapper py-4">
      <nav className="container mx-auto navbar">
        <div className="logo">LiftEase</div>
        {/* Navigation Links */}
        <ul className="nav-links">
          <li>
            <Link to="/getRide" className="nav-link">
              Find Lift
            </Link>
          </li>
          <li>
            <Link to="/giveRide" className="nav-link">
              Give Lift
            </Link>
          </li>
        </ul>
        {/* User Profile Picture and Sign-out */}
        {user ? (
          <div className="user-profile" ref={signOutRef}>
            {/* User profile picture */}
            <img
              src={user.photoURL}
              alt="Profile"
              className="profile-pic"
              onClick={() => setShowSignOut(!showSignOut)}
            />
            {/* Sign-out option */}
            {showSignOut && (
              <button onClick={handleSignOut} className="sign-out-btn">
                Sign Out
              </button>
            )}
          </div>
        ) : null}
      </nav>
    </div>
  );
}
