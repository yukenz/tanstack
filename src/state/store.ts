import {configureStore} from "@reduxjs/toolkit";
import counterReducer, {counter} from './counter/counterSlice'
import {useDispatch, useSelector} from "react-redux";

export const store = configureStore({
    reducer: {
        [counter]: counterReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useStoreDispatch =
    () => useDispatch<AppDispatch>();
