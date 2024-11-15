import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: "",
    userName: "",
    followers: "",
    publicRespositories: "",
    image: "",
}

export const userSlice = createSlice({
    name:"user",
    initialState,
    reducers: {
        addUser: (state, action) => {
            const { name, login, currentFolowers , currentRepositories, avatar_url } = action.payload;
            state.name = name;
            state.userName = login; 
            state.followers = currentFolowers;
            state.publicRespositories = currentRepositories;
            state.image = avatar_url;
        }
    }
})

export const { addUser } = userSlice.actions;
export default userSlice.reducer;