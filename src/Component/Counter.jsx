import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addOne } from '../Actions'

export default function Counter() {
    const [count,setcount]=useState(0)
    const dispatch = useDispatch()
    
    return (
        <>

            <button onClick={()=> dispatch(addOne())}>-</button>
            <h1>{count}</h1>
            <button onClick={()=> dispatch(incFun())}>+</button>
        </>
    )
}
