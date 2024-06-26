import { createContext } from "react";
export const Appcontext = createContext();

const ContextProvider= (props)=>{
  const Phone ="+1 3872347684783"
  const name= "ajay dhanwate"
  return (
    <Appcontext.Provider value={{Phone,name}}>
      {props.children}
    </Appcontext.Provider>
  )
}

export default ContextProvider
