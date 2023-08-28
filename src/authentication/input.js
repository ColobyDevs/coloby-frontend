import React, {useReducer, useEffect} from "react";
import { validate} from "./validators";


const Input = (props)=>{
    const reducer = (state, action)=>{
            if(action.type ==='Change'){
                const newState = {...state, value: action.payload}
                const validation = validate(newState.value, [props.validator(props.name === 'password' && 6)])
                return {...newState, isValid: validation.isValid}
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
    
    const errorMsg = (props.type === 'email' && 'email is invalid' ) || (props.type === 'password' && 'password is invalid' ) || (props.type === 'name' && 'name is invalid' )
    
  
    
    
    const changeHandler=(e)=>{
            dispatch({type: 'Change', payload: e.target.value})
    }
    const touchHander = (e)=>{
        dispatch({type: 'touch'})
    }

   

    
 

    return(
        <div className="grid grid-rows-3 text-sm py-2 px-4">
            <label htmlFor={props.name} className="text-start text-white">{props.name}</label>
            <input type={props.type} validation={props.validation} value={state.value} onChange={changeHandler} onBlur={touchHander} />
         <p className="text-red-700 text-start">{!state.isValid && state.isTouch && errorMsg}</p>
        </div>
    )

}

export default Input