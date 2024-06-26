import React, { useEffect, useRef, useState } from 'react'

export default function Useref() {
    const [value,setvalue]=useState(0);
    const count =useRef(0);
    useEffect(()=>{
        count.current = count.current +1;    
    });


    const inputElem = useRef();
    const btnClicked = ()=>{
    inputElem.current.style.background = "Blue"; 
    }
  return (
    <>
     {/* Useref is a reatc hook that allows us to create mutable variables,which will not re-render the component. */}
     {/* useref is also used for accesing DOM elements.*/}


     {/* ex:1  */}
     <button onClick={()=>{setvalue(prev =>prev-1)}}>-1</button>
     <h1>{value}</h1>
     <button onClick={()=>{setvalue(prev =>prev+1)}}>+1</button>
     <h1>Render count: {count.current}</h1>



     {/* ex:2  */}
     <input type="text" ref={inputElem}/>
     <button onClick={btnClicked}>Click here</button>
     <br />
    </>
  )
}
