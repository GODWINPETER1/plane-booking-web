import { configureStore } from "@reduxjs/toolkit";
import airportReducer  from "../admin/features/airports/airportSlice";


export const store = configureStore({
    reducer: {
        airports: airportReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;