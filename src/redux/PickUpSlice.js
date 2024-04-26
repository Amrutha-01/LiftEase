import { createSlice } from "@reduxjs/toolkit";

const pickUpSlice = createSlice({
  name: "pickup",
  initialState: {
    pickup: "",
  },
  reducers: {
    setpickUp: (state, action) => {
      state.pickup = action.payload;
    },
  },
});

export const {
  setpickUp
} = pickUpSlice.actions;
export default pickUpSlice.reducer;
