import { configureStore } from '@reduxjs/toolkit';
import todaysMenuReducer from "../features/todays_menuSlice";

export default configureStore({
    reducer: {
        todays_menu: todaysMenuReducer,
    }
});