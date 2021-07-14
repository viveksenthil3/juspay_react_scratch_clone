import React, { useEffect, useState } from 'react'

function Input({type, stateVar, state, setState, ...rest}) {
    useEffect(()=>{
        // console.log(state, stateVar, state[stateVar])
    },[])
    
    return (
        <div>
            {type==='select' ? null : <input type={type} {...rest} value={state[stateVar]}  onChange={(e)=>setState(state=>({...state, [stateVar]:e.target.value}))} />}
        </div>
    )
}

export default Input
