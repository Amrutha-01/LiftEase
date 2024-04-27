import React, { useState } from "react";
import "../../../index";
import Map from "../Map/Map";
import { useEffect } from "react";
import { auth, provider } from "../../../firebase";
import { signInWithPopup, signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import PickUp from "../PickUp/PickUp";
import Drop from "../Drop";
import { useSelector } from "react-redux";
import "./GetRide.css";
import img1 from "../../images/Designer (2).png";
import { getDatabase, ref, onValue } from "firebase/database";
import { app } from "../../../firebase";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import toast, { Toaster } from 'react-hot-toast';

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

  const [data, setData] = useState(null);

  const notify = () => toast('Connected! Enjoy Your Ride!', {
    duration: 4000,
    position: 'top-center',
  
    icon: '👏',
  
    // Change colors of success/error/loading icon
    iconTheme: {
      primary: '#000',
      secondary: '#fff',
    },
  
    ariaProps: {
      role: 'status',
      'aria-live': 'polite',
    },
  });

  useEffect(() => {
    const fetchData = async () => {
      const database = getDatabase(app); // Get a reference to the database
      const dbRef = ref(database, "giveRideData"); // Reference to the desired path in the database

      // Listen for changes to the data
      onValue(dbRef, (snapshot) => {
        const responseData = snapshot.val();
        setData(responseData);
      });
    };

    fetchData();

    // Clean up listener when component unmounts
    return () => {
      const database = getDatabase(app);
      const dbRef = ref(database, "giveRideData");
      // Unsubscribe from realtime updates
      // Note: This is important to avoid memory leaks
      onValue(dbRef, () => {});
    };
  }, []);
  console.log(data);
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
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
    setSelectedRide(true);
    
  };
  const [selectedRide, setSelectedRide] = useState(false);
  const handleSelect = () => {
    setSelectedRide(true);
  };
  return (
    <div className="get-ride flex flex-row">
      <div className="searching-part flex flex-col">
        <h1 id="tagline-head">Find a Lift</h1>
        <p id="tagline">Hop in and enjoy a free ride!</p>
        <PickUp />
        <Drop />
        <button
          className="bg-black text-white w-40"
          onClick={handleSearch}
          id="search"
        >
          {user ? "Search" : "Sign in to Search"}
        </button>
        <Toaster/>
        {data && (
          <FormControl
            variant="standard"
            sx={{ m: 1, minWidth: 120 }}
            className={selectedRide ? "after-search" : "before-search"}
          >
            <InputLabel id="demo-simple-select-standard-label">Select your Ride</InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={age}
              onSelect={handleSelect}
              onChange={handleChange}
              onClick={()=>{notify()}}
              label="Select your Ride"
            >
              {data &&
                Object.keys(data).map((key) => {
                  const obj = data[key];
                  return (
                    <MenuItem key={key} value={obj.name}>
                      {obj.name}
                    </MenuItem>
                  );
                })}
            </Select>
          </FormControl>
        )}
      </div>

      {searched ? <Map searched={searched} /> : <img src={img1} />}
    </div>
  );
}
