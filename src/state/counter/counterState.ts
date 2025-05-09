import {undefined} from "zod";

export interface CounterState {
    value: number,
    nested: {
        value: number,
        jwt: string | null
    }

}

export const initialState: CounterState = {
    value: 0,
    nested: {
        value: 100,
        jwt: null
    }
}