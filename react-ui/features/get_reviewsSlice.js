import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchReviews = createAsyncThunk("get/reviews", async() => {
    const reviewUrl = "http://localhost:8080/api/reviews";

    try {
        const response = await fetch(reviewUrl, {method: "GET"});
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