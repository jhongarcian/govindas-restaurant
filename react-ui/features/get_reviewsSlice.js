import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import apiUrl from "../mocks/config.json";

export const fetchReviews = createAsyncThunk("get/reviews", async() => {
    // Production
    const productionUrl = `${apiUrl.production}/api/reviews`;
    // Development
    const devUrl = `${apiUrl.development}/api/reviews`;


    try {
        const response = await fetch(productionUrl, {method: "GET"});
        if(response.ok) {
            const data = await response.json();
            return data
        };
    } catch (error) {
        console.log(error);
        throw error;
    };
});

export const reviewsSlice = createSlice({
    name: "reviews",
    initialState: [],
    reducers: {},
    extraReducers(builder) {
        builder.addCase(fetchReviews.fulfilled, (state, action) => {
            return action.payload;
        });
    }
});

export const selectedReviews = state => state.reviews;

export default reviewsSlice.reducer;