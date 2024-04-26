import React, { useState, useRef } from "react";
import "../../index.css";
import Map from "./map";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import CircularProgress from "@mui/material/CircularProgress";
import { Divider } from "@mui/material";
import { useEffect } from "react";
import SearchComponent from "./searchComp";
import L from "leaflet";

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
  console.log(pickup,drop)
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

  return (
    <div className="get-ride flex flex-row">
      <div className="searching-part flex flex-col">
        <SearchComponent
          id="pickup"
          placeholder="PickUp Location"
          setPickUp={setPickUp}
          setDrop={setDrop}
          setSelectedOption={setSelectedOption}
        />
        <SearchComponent
          id="drop"
          placeholder="Drop Location"
          setPickUp={setPickUp}
          setDrop={setDrop}
          setSelectedOption={setSelectedOption}
        />

        <button
          className="bg-black text-white w-40 m-5"
          onClick={() => {
            setSearched(!searched);
          }}
        >
          Search
        </button>
      </div>

      {searched ? <Map pickup={pickup} drop={drop} /> : <Map/>}
      {/* <Demo pickup={pickup} drop={drop} /> */}
    </div>
  );
}
