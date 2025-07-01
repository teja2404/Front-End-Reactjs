import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart-slice";
import uiSlice from "./ui";

const store = configureStore({
  reducer: { uistate: uiSlice.reducer, cart: cartReducer.reducer },
});



export default store;
