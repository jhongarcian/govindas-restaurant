import {createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchTodaysMenu = createAsyncThunk("today/menu", async() => {
    const menuUrl = "http://localhost:8080/today-menu";

    try {
        const response = await fetch(menuUrl, {method: "GET"});
        if (response.ok) {
            const data = await response.json();
            return data;
        }
    } catch (error) {
        console.log(error)
        throw error;
    };
});

export const todaysMenuSlice = createSlice({
    name: "todays_menu",
    initialState: [],
    reducers: {},
    extraReducers(builder) {
        builder.addCase(fetchTodaysMenu.fulfilled, (state, action) => {
            return action.payload;
        });
    }
});

export const selectedMenu = state => state.todays_menu;

export default todaysMenuSlice.reducer;