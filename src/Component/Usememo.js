import React, { useMemo, useState } from 'react'

export default function Usememo() {
    const [number,setNumber]=useState(0);
    const [counter,setCounter]=useState(0);


    function cubNum(num){
        console.log('calculation done!');
        return Math.pow(num,3)
    }
     const result = useMemo(()=>cubNum(number),[number]); 
  return (
    <>
      {/* use memo hooks return a memorized value.(its is like caching a value so that it doesn't need to be recalculated . ) */}
      {/* use memo hooks only runs when one of its dependencies get update.*/}
      {/* thois can improve the performance of the application,there is one more hook in react to improve erformance, that is usecallback hook.*/}
      {/* the useMemo and usecallback hooks are similar. The main diffrence is:
      -useMemo returns a memonized value 
      -usecallback return a memoized function*/}
      <input type="text" value={number} onChange={(e)=>{setNumber(e.target.value)}}  />
      <h1>Cube of the number : {result}</h1>
      <button onClick={()=>{setCounter(counter+1)}}>Counter++</button>
      <h1>Counter:{counter}</h1>
    </>
  )
}