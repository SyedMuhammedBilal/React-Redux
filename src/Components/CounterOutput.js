import React from 'react'
import { useSelector } from 'react-redux'

export default function CounterOutput() {
    const counter = useSelector((state) => state.counter);

    return (
        <div>
            Counter Value: {counter}
        </div>
    )
}
