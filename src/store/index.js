import { configureStore } from "@reduxjs/toolkit";
import kitaplarReducer from "./kitaplar";

export const store = configureStore({
    reducer: {
        kitap: kitaplarReducer
    }
});