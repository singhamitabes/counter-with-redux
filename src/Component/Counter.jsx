import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addOne,subOne } from '../Actions/index'

export default function Counter() {
    const dispatch = useDispatch()
    const mystate = useSelector((state)=>state.changeNum) 
    return (
        <>

            <button onClick={()=> dispatch(addOne())}>-</button>
            <h1>{mystate}</h1>
            <button onClick={()=> dispatch(subOne())}>-</button>
        </>
    )
}
