import React from 'react'


function CounterInput(props) {
    return (
        <>
         <button onClick={() => props.setCounter(props.counter + 1)}>+</button>   
         <button onClick={() => props.setCounter(props.counter - 1)}>-</button>   
        </>
    )
}

export default CounterInput
