import {combineReducers, configureStore} from "@reduxjs/toolkit";
import schedulesSlice from "./schedulesSlice";


const rootReducer = combineReducers({
    schedules: schedulesSlice
})

export const store = configureStore({
    reducer: rootReducer
})