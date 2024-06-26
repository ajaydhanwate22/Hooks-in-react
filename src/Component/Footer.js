import React, { useContext } from 'react'
import { Appcontext } from '../Context/AppContext'

export default function Footer() {
    const {Phone,name} =useContext(Appcontext);
  return (
    <>
      <h2>Footer</h2>
      <h3>phone:{Phone}</h3>
      <h2>name:{name}</h2>
    </>
  )
}
