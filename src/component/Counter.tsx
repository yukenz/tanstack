import React, {JSX, MouseEventHandler, useCallback, useEffect} from 'react'
import {useStoreDispatch} from "@/state/store";
import {increment, decrement, useCounterSelector, incrementAsync, getJwtAsync} from "@/state/counter/counterSlice";

type Element = JSX.Element

interface CounterProps {
    children: React.ReactNode,
}

export default function ({
                             children
                         }: CounterProps): Element {


    const counterState = useCounterSelector();
    const dispatch = useStoreDispatch();

    return (
        <>
            <p>{counterState.nested.jwt}</p>
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

                <button
                    onClick={() => dispatch(getJwtAsync())}
                >
                    Get JWT
                </button>
                <br/>

            </div>
        </>
    )
}