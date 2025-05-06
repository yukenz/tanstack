export interface CounterState {
    value: number,
    nested: {
        value: number
    }

}

export const initialState: CounterState = {
    value: 0,
    nested: {
        value: 100
    }
}