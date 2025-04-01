import uiSlice from "./cart-slice";
import {configureStore} from "@reduxjs/toolkit";
import cartSlice from "./cart-slice";

configureStore({
    reducer: {
        ui: uiSlice.reducer,
        cart: cartSlice.reducer
    }
})