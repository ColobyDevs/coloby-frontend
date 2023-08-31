import React, {useReducer, useEffect, useCallback} from "react";
import { validate} from "./validators";
import { useForm } from "./formHook";

const Input = (props)=>{
    const reducer = (state, action)=> {
            if(action.type ==='Change'){
                return {
                    ...state,
                    value: action.val,
                    isValid: validate(action.val, action.validators).isValid
                  };
            } else if(action.type === 'touch'){
                return {...state, isTouch: true}
            }
    }

    const initialState = {
        value: '',
        isValid: false,
        isTouch: false
    }

    const [state, dispatch] = useReducer(reducer, initialState)
    
  
    
    
    const changeHandler=(e)=>{
            dispatch({type: 'Change', val: e.target.value, validators: props.validator})
    }
    
    const touchHander = (e)=>{
        dispatch({type: 'touch'})
    }

console.log(state.value)
 useEffect(()=>{
            props.onInput(state.value, props.id, state.isValid)
    }, [state.value, props.id, state.isValid, props.onInput])

  const errorState = !state.isValid && state.isTouch
 
    return(
        <div className="grid grid-rows-3 py-1 px-4">
            <label htmlFor={props.name} className={`text-start ${errorState ? 'text-red-500': 'text-gray-900'} font-bold`}>{props.name}</label>
            <input  type={props.type} validation={props.validation} value={state.value} onChange={changeHandler} onBlur={touchHander} className={`${errorState ? 'border-red-500': 'border-gray-300'} border rounded-md px-1`} />
         <p className="text-red-500 text-start">{errorState && props.errMsg}</p>
        </div>
    )

}

export default Input