import { configureStore } from "@reduxjs/toolkit";
import filterSlice from "./slices/filterSlice";
import CartdSlice from "./slices/CartdSlice";
import pizzasSlice from "./slices/pizzasSlice";

export const store = configureStore({
  reducer: { filterSlice: filterSlice, CartdSlice,pizzasSlice },
});
