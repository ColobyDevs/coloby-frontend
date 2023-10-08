import React, {useEffect, useReducer} from "react";
import { validate } from "../authentication/validators";
import { AiOutlineSend, AiTwotoneCamera } from "react-icons/ai";
import { ImAttachment } from "react-icons/im";

const Input = (props)=>{
const {name, type, onInput, id, validators, func} = props
    const reducer = (state, action)=>{
        if(action.type === 'firstP'){
            return {...state, value: action.value, type: action.type , isValid: validate(action.value, validators).isValid}
        }else if(action.type === 'secondP'){
            return {...state, value: action.value, type: action.type}
        }else if(action.type === 'clear'){
            return initialState
        }
                }
    
        const initialState = {
            value: '',
            type: '',
            isValid: false
        }
      
        const [state, dispatch]  = useReducer(reducer, initialState)
   
        const messageHandler = (e)=>{
            e.preventDefault();
        dispatch({value: e.target.value, payload: 'right', type: 'firstP'})
        }

    console.log(func);
  const sendMessage=()=>{
    dispatch({type: 'clear'})
  }

        useEffect(()=>{
                onInput(state.value, id, state.isValid)
        }, [state.value])

    return(<>
    <input name={name} type={type} value={state.value} onChange={messageHandler} placeholder="Message" className=" text-xs w-full focus:outline-none px-2  bg-inherit "/>

    
    </>)
}

export default Input