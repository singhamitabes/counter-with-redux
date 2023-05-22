import React, { useState } from 'react'

export default function Counter() {
    const [count,setcount]=useState(0)
    function decFun(){
        setcount(count-1)
    }
    function incFun(){
        setcount(count+1)
    }
    return (
        <>
            <button onClick={decFun}>-</button>
            <h1>{count}</h1>
            <button onClick={incFun}>+</button>
        </>
    )
}
