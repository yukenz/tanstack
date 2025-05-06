import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {useSelector} from "react-redux";
import {RootState} from "@/state/store";
import {initialState} from "./counterState";


const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        incrementByAmount: (state, {type, payload}: PayloadAction<number>) => {
            console.log(type)
            state.value += payload;
        },
        decrement: (state) => {
            state.value -= 1;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(
                incrementAsync.pending,
                function () {
                    console.log('pending ')
                }
            )
            .addCase(
                incrementAsync.fulfilled,
                function (state, {type, payload}: PayloadAction<number>) {
                    state.value += payload;
                }
            );
    }
});


// Async
const incrementAsync = createAsyncThunk(
    counterSlice.name + '/incrementAsync',
    async (amount: number): Promise<number> => {
        const numberPromise = new Promise<number>(resolve => {
            setTimeout(() => {
                resolve(amount)
            }, 3_000)
        });

        return await numberPromise;
    }
);

// For Component
export {
    incrementAsync
}

export const useCounterSelector = () => useSelector((state: RootState) => state[counterSlice.name])

export const {
    increment,
    incrementByAmount,
    decrement,
} = counterSlice.actions;

// For Store
export const counter = counterSlice.name;
export default counterSlice.reducer;


