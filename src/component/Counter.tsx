import React, {JSX, MouseEventHandler} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState,useStoreDispatch} from "@/state/store";
import {counter, increment, decrement, incrementAsync, useCounterSelector} from "@/state/counter/counterSlice";

type Element = JSX.Element

interface CounterProps {
    children: React.ReactNode
}

export default function ({
                             children
                         }: CounterProps): Element {


    const dispatch = useStoreDispatch();
    const {value} = useCounterSelector();



    const incrementAction: MouseEventHandler<HTMLButtonElement> = (e) => {
        dispatch(increment());
    };

    const incrementAsyncAction: MouseEventHandler<HTMLButtonElement> = (e) => {
        dispatch(incrementAsync(10));
    };

    const decrementAction: MouseEventHandler<HTMLButtonElement> = (e
    ) => {
        dispatch(decrement());
    };


    return (
        <>
            <p>{value}</p>
            <div>
                <button onClick={incrementAction}>Increment</button><br/>
                <button onClick={incrementAsyncAction}>Increment Async</button><br/>
                <button onClick={decrementAction}>Decrement</button>
            </div>
        </>
    )
}