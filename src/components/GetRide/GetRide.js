import React, { useState } from "react";
import "../../index.css";
import Map from "./map.js";
import { useEffect } from "react";
import { auth, provider } from "../../firebase";
import { signInWithPopup, signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import PickUp from "./PickUp";
import Drop from "./Drop";
import { useSelector } from "react-redux";
import "./GetRide.css";
import img1 from "../images/Designer (2) (7).svg";

function sleep(duration) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, duration);
  });
}

export default function GetRide() {
  // const [pickup, setPickUp] = useState("");
  // const [drop, setDrop] = useState("");
  const [searched, setSearched] = useState(false);

  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState([]);
  const loading = open && options.length === 0;
  const [list, setList] = useState(null);

  // Firebase Authentication
  const [user] = useAuthState(auth);
  const { pickup } = useSelector((state) => state.pickup);
  const { drop } = useSelector((state) => state.drop);
  console.log(pickup, drop);
  useEffect(() => {
    let active = true;
    if (!loading) {
      return undefined;
    }
    (async () => {
      await sleep(1e3);
      if (active) {
        setOptions([...list]);
      }
    })();

    return () => {
      active = false;
    };
  }, [loading]);

  useEffect(() => {
    if (!open) {
      setOptions([]);
    }
  }, [open]);

  useEffect(() => {
    const locationResult = (query, format, limit) => {
      fetch(
        `https://nominatim.openstreetmap.org/search?addressdetails=1&q=${query}&format=${format}&limit=${limit}`
      )
        .then((res) => res.json())
        .then((data) => {
          setOptions(data);
        });
    };
    locationResult("andhra", "jsonv2", 10);
  }, []);

  // Function to handle Google sign-in
  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error(error.message);
    }
  };

  // Function to handle sign-out
  const handleSignOut = () => {
    signOut(auth);
  };

  // Function to handle search
  const handleSearch = () => {
    if (user) {
      setSearched(!searched);
    } else {
      signInWithGoogle();
    }
  };

  return (
    <div className="get-ride flex flex-row">
      <div className="searching-part flex flex-col">
        <PickUp />
        <Drop />
        <button className="bg-black text-white w-40 m-5" onClick={handleSearch}>
          {user ? "Search" : "Sign in to Search"}
        </button>
      </div>

      {searched ? <Map searched={searched} /> : <img src={img1} />}
    </div>
  );
}
