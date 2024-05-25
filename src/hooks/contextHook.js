import { Context } from "../context/context";
import { useContext } from "react";


const useContextStates = ()=>{
    const contextStates = useContext(Context)
    console.log(contextStates, 'dodo');
    return contextStates
}
export default useContextStates