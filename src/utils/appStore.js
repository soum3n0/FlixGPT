import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import moviesSlice from "./moviesSlice";
import gptSlice from "./gptSlice";

const appStore = configureStore({
    reducer:{
        userConfig: userSlice,
        movies: moviesSlice,
        gpt: gptSlice,
    }
});

export default appStore;