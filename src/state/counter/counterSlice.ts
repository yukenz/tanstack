import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {useSelector} from "react-redux";
import {RootState} from "@/state/store";
import {CounterState, initialState} from "./counterState";
import {WritableDraft} from "immer";
import {getJwtToken, JwtResponse} from "@/utils/apigateway";
import {getEnviVar} from "@/serverFn/environment";


const name = 'counter';

// Sync
const reducers = {
    increment: (state: WritableDraft<CounterState>) => {
        state.value += 1;
    },
    incrementByAmount: (state: WritableDraft<CounterState>, {type, payload}: PayloadAction<number>) => {
        console.log(type)
        state.value += payload;
    },
    decrement: (state: WritableDraft<CounterState>) => {
        state.value -= 1;
    }
}

// Async
const incrementAsync = createAsyncThunk(
    name + '/incrementAsync',
    async (amount: number): Promise<number> => {
        const numberPromise = new Promise<number>(resolve => {
            setTimeout(() => {
                resolve(amount)
            }, 3_000)
        });

        return await numberPromise;
    }
);

const getJwtAsync = createAsyncThunk(
    name + '/getJwt',
    async (): Promise<JwtResponse> => {

        const apiKey = await getEnviVar("APIKEY");
        const appId = await getEnviVar("APPID");

        return getJwtToken(apiKey!, appId)
    }
);

const counterSlice = createSlice({
    name,
    initialState,
    reducers,
    extraReducers: (builder) => {

        builder
            //incrementAsync
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
            )
            //getJwtAsync
            .addCase(
                getJwtAsync.fulfilled,
                function (state, {type, payload}: PayloadAction<JwtResponse>) {
                    console.log(payload);
                    if (payload.accessToken) {
                        state.nested.jwt = payload.accessToken;
                    }
                }
            );
    }
});


// For Component
export {
    incrementAsync,
    getJwtAsync
}

export const {
    increment,
    incrementByAmount,
    decrement,
} = counterSlice.actions;

export const useCounterSelector = () => useSelector((state: RootState) => state[counterSlice.name])

// For Store
export default counterSlice.reducer;
export const counter = name;

