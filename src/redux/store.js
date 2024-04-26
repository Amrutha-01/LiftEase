import { configureStore } from '@reduxjs/toolkit';
import PickUpReducer from './PickUpSlice';
import DropReducer from "./DropSlice"

const store = configureStore({
  reducer: {
    pickup:PickUpReducer,
    drop:DropReducer
  },
});

export default store;
