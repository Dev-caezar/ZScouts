import { configureStore } from "@reduxjs/toolkit";
import Features from "./Fearures"

 export const Store = configureStore({
    reducer: {
        user: Features
    }
})



