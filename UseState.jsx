import React, { useState } from 'react'


import './App.css'


 export const UseState = () => {

    const [count, setCount] = useState(0)


    const increment = ()=>{
        setCount(count +1)
    }


    const decrement = ()=>{
        setCount( (curr)=>curr - 1)
    }


    const reset =() =>{
        setCount(0)
    }

    
  return (
    <div>
        <h1>Counter : {count}</h1>
        <button onClick={increment}>Increment (+)</button><br />
        <button onClick={decrement}>Decrement(-)</button><br />
        <button onClick={reset}>Reset</button>

         
    </div>
  )
}

export default UseState