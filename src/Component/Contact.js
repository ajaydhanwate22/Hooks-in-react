import React, { useContext }  from 'react'
import { Appcontext } from '../Context/AppContext'

export default function Contact() {
  const {Phone,name} = useContext(Appcontext);
  return (
    <>

<h1>Contact</h1>
<h3>Phone:{Phone}</h3>
<h2>name:{name}</h2>
    </>
  )
}
