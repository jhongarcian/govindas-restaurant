import { configureStore } from '@reduxjs/toolkit';
import todaysMenuReducer from "../features/todays_menuSlice";
import reviewsReducer from "../features/get_reviewsSlice";

export default configureStore({
    reducer: {
        todays_menu: todaysMenuReducer,
        reviews: reviewsReducer,
    }
});