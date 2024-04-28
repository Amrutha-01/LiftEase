import React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import CircularProgress from "@mui/material/CircularProgress";
import { Divider } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setDrop } from "../../redux/DropSlice";
import "../GetRide/PickUp/PickUp.css"
import dropImg from "../images/location.svg"

function sleep(duration) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, duration);
  });
}

export default function Drop() {
  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState([]);
  const loading = open && options.length === 0;
  const [list, setList] = useState(null);
  const [input, setInput] = useState("");
//   const [drop, setDrop] = useState("")
  const dispatch=useDispatch();

  useEffect(() => {
    let active = true;
    if (!loading) {
      return undefined;
    }
    (async () => {
      await sleep(1e3);
      if (active && list) {
        setOptions([...list]);
      }
    })();

    return () => {
      active = false;
    };
  }, [loading, list]);

  useEffect(() => {
    if (!open) {
      setOptions([]);
    }
  }, [open]);

  useEffect(() => {
    const locationResult = async (query, format, limit) => {
      await fetch(
        `https://nominatim.openstreetmap.org/search?addressdetails=1&q=${query}&format=${format}&limit=${limit}`
      )
        .then((res) => res.json())
        .then((data) => {
          setList(data);
          //   setOpen(!open)
        });
    };
    locationResult(input, "jsonv2", 10);
  }, [input]);
  return (
    <div className="drop">
      <img src={dropImg} className="location"/>
      <Autocomplete
        id='drop'
        sx={{ width: 300 ,".css-14lo706 span":{
          color:"black"
        },
        '& .MuiOutlinedInput-root .MuiOutlinedInput-input': {
          color: 'black', // Set input text color
        },
        '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input::placeholder': {
          color: 'black', // Set placeholder text color when focused
        },
          '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
            borderColor: 'white', 
          },
          '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: 'white', 
          },
          '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: 'white', 
          },}}
        open={open}
        onOpen={() => {
          setOpen(true);
        }}
        onClose={() => {
          setOpen(false);
        }}
        isOptionEqualToValue={(option, value) => {
          if (option && value) {
            return option.place_id === value.place_id;
          }
        }}
        onChange={(event, newValue) => {
            // setDrop(newValue);
            dispatch(setDrop(newValue))
        }}
        getOptionLabel={(option) => option.display_name}
        options={options}
        loading={loading}
        renderOption={(props, option, { selected }) => (
          <>
            <li {...props}>{option.display_name}</li>
            <Divider />
          </>
        )}
        renderInput={(params) => (
          <TextField
            onChange={(e) => {
              setInput(e.target.value);
            }}
            {...params}
            placeholder="Drop Location"
            InputProps={{
              ...params.InputProps,
              endAdornment: (
                <React.Fragment>
                  {loading ? (
                    <CircularProgress color="inherit" size={20} />
                  ) : null}
                  {params.InputProps.endAdornment}
                </React.Fragment>
              ),
            }}
          />
        )}
      />{" "}
    </div>
  );
}
