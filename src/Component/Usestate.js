import React, { useState } from 'react'

export default function Usestate() {
    // const [color ,setColor]=useState('Red');
    // const changeColor = ()=>{
    //     setColor('Blue')
    // } 





    // const [car,setCar] = useState({
    //     brand:"ferrari",
    //     model:"roma",
    //     year:"2023",
    //     color:"Red"
    // });
    // const changeColor =()=>{
    //     setCar ((pcar)=>{
    //           return {...car,color:"Blue"}  
    //     })
    // }




    const [count,setCount]=useState(0)
    const increasecount =()=>{
            setCount (count+1)
    }
  return (
    <>
    {/* usetate is a react hook,which creates an "state variables". */}
    {/* which helps us to track state in component & updates the user interface when state changes.*/}

    {/* ex:1  */}
     {/* <h1>My Favourite Color is {color}!</h1>
     <button onClick={changeColor}>Blue</button>  */}

     {/* Ex:2  */}
     {/* <h1>my {car.brand}</h1>
     <p>It us a {car.color} {car.model} from {car.year}</p>
     <button onClick={changeColor}>Blue</button> */}


     {/* ex:3  */}
     <h1>count :{count}</h1>
     <button onClick={increasecount}>Increase</button>
    </>
  )
}
