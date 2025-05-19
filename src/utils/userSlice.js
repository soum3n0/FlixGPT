import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "userConfig",
    initialState: {
        user : null,
        config : {
            lang: "en",
            langName: "English",
        }
    },
    reducers:{
        addUser: (state, action)=>{
            state.user = action.payload;
        },
        removeUser: (state, action)=>{
            state.user = null;
        },
        changeLanguage: (state, action) =>{
            const arr = action.payload.split(",");
            state.config.lang = arr[0];
            state.config.langName = arr[1];
        },
    }
})

export const {addUser, removeUser, changeLanguage} = userSlice.actions;
export default userSlice.reducer;