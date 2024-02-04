import { configureStore } from "@reduxjs/toolkit";
import inputReducer from "./inputSlice";
import cartReducer from "./cartSlice";

export const store = configureStore({
    reducer: {
        userInput: inputReducer,
        cartContent: cartReducer
    }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch