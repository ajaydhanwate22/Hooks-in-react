import React, { useEffect, useState } from 'react'

export default function Useeffect() {
    const [count,setCount]=useState(0);
    useEffect(()=>{
        setTimeout(() => {
            setCount(count =>count+1);
        }, 2000);
    },[])

  return (
    <>
     {/* the useeffect hooks allows you to perform side effect in your component. */}
     {/* some example of side effect are:
     -fetching data from API 
     -Directly updating the DOM 
     -Timers like Settimeout and setInterval */}
     {/* 3 ways to use useEffect(CallBack,Defendency) 1>without any dependency 2>empty array 3>Array with variables[]*/}
    <h1> I have render {count} times</h1>
    </>
  )
}
