import React from 'react'
import { useState } from 'react';

const Test = () => {

    const [number ,setNumber] = useState(0)

    let num =0;

    const plus = () =>{
        // num++;
        // console.log(num)
        setNumber(number+1)
        console.log(number)


        ///
    }
  return (
    <div>
        <h1>{number}</h1>
        <button onClick={plus} >plus</button>
    </div>
  )
}

export default Test