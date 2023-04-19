import { createContext } from "react";
import { useState } from "react";
export let myContext = createContext();
export default function AuthContext({children}) {
    let [isBool, setBool] = useState(true)
    let [isBool2, setBool2] = useState(false)
    return (
        <>
        <myContext.Provider value={{setBool, setBool2, isBool, isBool2}}>

            {children}
        </myContext.Provider>
        </>
    )
}