import React, {useReducer, useEffect, useState} from "react";
import { validate} from "./validators";


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
 useEffect(()=>{
            props.onInput(state.value, props.id, state.isValid)
    }, [state.value, props.id, state.isValid, props.onInput])

  const errorState = !state.isValid && state.isTouch
  const [focusColor, setFocusColor] = useState(false)
 const colorChange = ()=>{
    setFocusColor(true)
 }

 const label = props.name.replace(props.name[0], props.name[0].toUpperCase()) 
    return(
        <section className="lg:flex lg:flex-col lg:space-y-2 lg:h-20  ">
            <div className="lg:flex lg:flex-col space-y-0">
            <label htmlFor={props.name} className={`text-start ${errorState ? 'text-red-500': 'text-gray-900'} font-bold mb-[4px] text-st_grey`}>{label}</label>
            <input placeholder={props.placeholder}  type={props.type} validation={props.validation} value={state.value} onChange={changeHandler} onBlur={touchHander} onFocus={colorChange} className={`${errorState ? 'border-red-500': 'border-gray-300'}  focus:outline-none px-1 w-full bg-transparent border border-solid border-[#CBD5E0] rounded-[12px] p-[12px]`} />
            <p className={`${errorState? 'block': 'hidden'} text-red-500 font-light text-sm`}>{errorState && props.errMsg}</p>
            </div>
        </section>
    )

}

export default Input