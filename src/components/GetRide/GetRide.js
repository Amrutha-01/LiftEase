import React, { useState } from "react";
import "../../index.css";
import Demo from "./map";
import { useEffect } from "react";
import SearchComponent from "./searchComp";
import { auth, provider } from "../../firebase";
import { signInWithPopup, signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";

function sleep(duration) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, duration);
  });
}

export default function GetRide() {
  const [pickup, setPickUp] = useState("");
  const [drop, setDrop] = useState("");
  const [searched, setSearched] = useState(false);

  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState([]);
  const loading = open && options.length === 0;
  const [list, setList] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);

  // Firebase Authentication
  const [user] = useAuthState(auth);

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
        <SearchComponent
          id="pickup"
          placeholder="PickUp Location"
          setPickUp={setPickUp}
          setDrop={setDrop}
        />
        <SearchComponent
          id="drop"
          placeholder="Drop Location"
          setPickUp={setPickUp}
          setDrop={setDrop}
        />

        {/* Search button */}
        <button className="bg-black text-white w-40 m-5" onClick={handleSearch}>
          {user ? "Search" : "Sign in to Search"}
        </button>
      </div>

      {searched ? <Demo pickUp={pickup} drop={drop} /> : <Demo />}
    </div>
  );
}
