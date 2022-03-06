import React from 'react';
import { useState } from "react";

export function Controller (){
    const [ counter, setCounter ] = useState(0);
    const handleChange = (value) => {
        if(value === -1 && counter === 0){
            return;
        }
        setCounter(counter + value);
    }
    return (
        <>
        <div className="count_div">
            <h1>Count : {counter}</h1>
        </div>
        <div className="btn_div">
            <button className="button-30" onClick={()=> handleChange(1)}>Add</button>
            <button className="button-30" onClick={()=> handleChange(-1)}>Reduce</button>
            <button className="button-30" onClick={()=> handleChange(counter)}>Double</button>
        </div>
        </>
    )
}