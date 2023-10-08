import React, {createContext, useState} from "react";

export const Context = createContext()

const ContextProvider = (props)=>{
const [createChModal, setCreateChModal] = useState(false)
const coloby = 'coloby'
    return(
        <Context.Provider value={{
                coloby,
                createChModal,
                setCreateChModal
        }}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider