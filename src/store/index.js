import { configureStore } from "@reduxjs/toolkit";
import conceptSlice from "./concept-slice";

const store = configureStore({
    reducer: conceptSlice.reducer,
});

export default store;
