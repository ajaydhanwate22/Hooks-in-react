import React, { useCallback, useState } from 'react'
import Header from './Footer'

export default function Usecallback() {
    const [count,setCount]=useState(0);
    const newFn =useCallback(()=>{},[])
  return (
    <>
      {/* use callback is a Hook that lets you catche a function defiation between re-renders.*/}
      {/* its menas,when we us the callback Hook,it doesn't create multiples instance of same function when we re-renders happens */}
      {/* instaed of creating new instance of the function, it provide the cached the function on re-render of the component.*/}
      <Header newFn={newFn}/>
      <h1>{count}</h1>
      <button onClick={()=>setCount(prev=>prev+1)}>Click Here!</button>
    </>
  )
}
