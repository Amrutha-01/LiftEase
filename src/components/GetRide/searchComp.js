import React from "react";
import Demo from "./map";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import CircularProgress from "@mui/material/CircularProgress";
import { Divider } from "@mui/material";
import { useEffect, useState } from "react";
import SearchComp from "./searchComp";

function sleep(duration) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, duration);
  });
}
export default function SearchComponent({
  id,
  placeholder,
  setPickUp,
  setDrop,
}) {
  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState([]);
  const loading = open && options.length === 0;
  const [list, setList] = useState(null);
  const [input, setInput] = useState("");
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
  }, [loading, list]);

  useEffect(() => {
    if (!open) {
      setOptions([]);
    }
  }, [open]);

  useEffect(() => {
    const locationResult = async (query, format, limit) => {
      // setLoading(true);
      //   await sleep(1e3);
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
    <div className="searchcomp">
      <Autocomplete
        id={id}
        sx={{ width: 300 }}
        open={open}
        onOpen={() => {
          setOpen(true);
        }}
        onClose={() => {
          setOpen(false);
        }}
        isOptionEqualToValue={(option, value) =>
          option.place_id === value.place_id
        }
        onChange={(event, newValue) => {
          if (id == "pickup") {
            setPickUp(newValue);
          } else {
            setDrop(newValue);
          }
          // Update the selected option state
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
            label={placeholder}
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
      />
    </div>
  );
}
