import React from "react";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase";
import { signOut } from "firebase/auth";

export default function Navbar() {
  // Firebase Authentication
  const [user] = useAuthState(auth);

  // Function to handle sign-out
  const handleSignOut = () => {
    signOut(auth);
  };

  return (
    <div className="navbar">
      <nav>
        <ul className="flex flex-row justify-between m-5 mx-7">
          <li style={{ textDecoration: "none", listStyleType: "none" }} >
            LiftEase
          </li>
          <li>
            <Link to="/getRide"> Get Lift</Link>
          </li>
          <li>
            <Link to="/giveRide"> Give Lift</Link>
          </li>
          {/* Conditional rendering for user authentication */}
          {user ? (
            <li>
              {/* Sign-out option */}
              <button onClick={handleSignOut}>Sign Out</button>
            </li>
          ) : null}
          {/* Conditional rendering for user authentication */}
          {user ? (
            <li>
              {/* User profile picture */}
              <img src={user.photoURL} alt="Profile" className="br-50" />
            </li>
          ) : null}
        </ul>
      </nav>
    </div>
  );
}
