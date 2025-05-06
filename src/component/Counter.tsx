import React, {JSX, MouseEventHandler} from 'react'
import {useStoreDispatch} from "@/state/store";
import {increment, decrement, useCounterSelector, incrementAsync} from "@/state/counter/counterSlice";

type Element = JSX.Element

interface CounterProps {
    children: React.ReactNode
}

export default function ({
                             children
                         }: CounterProps): Element {


    const {value} = useCounterSelector();
    const dispatch = useStoreDispatch();


    return (
        <>
            <p>{value}</p>
            <div>
                <button
                    onClick={() => dispatch(increment())}
                >
                    Increment
                </button>
                <br/>
                <button
                    onClick={() => dispatch(decrement())}
                >
                    Decrement
                </button>
                <br/>
                <button
                    onClick={() => dispatch(incrementAsync(10))}
                >
                    Increment Async
                </button>
                <br/>

            </div>
        </>
    )
}