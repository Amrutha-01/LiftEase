import { createSlice } from "@reduxjs/toolkit";

const dropSlice = createSlice({
  name: "drop",
  initialState: {
    drop: "",
  },
  reducers: {
    setDrop: (state, action) => {
      state.drop = action.payload;
    },
  },
});

export const {
  setDrop
} = dropSlice.actions;
export default dropSlice.reducer;
