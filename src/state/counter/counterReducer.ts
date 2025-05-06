import {PayloadAction, ReducerCreators, ValidateSliceCaseReducers} from "@reduxjs/toolkit";
import {CounterState} from "@/state/counter/counterState";

const reducer : ValidateSliceCaseReducers<CounterState, CR> | ((creators: ReducerCreators<CounterState>) => CR) = {
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
}
export {

}