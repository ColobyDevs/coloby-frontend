import React from "react";

const Button = (props)=>{
    return(
        <button className={`${props.formIsValid && 'bg-blue-500' || 'bg-blue-100'} text-white w-1/2 rounded-md mx-auto`} type={props.type} disabled={props.disabled}>{props.name}</button>
    )
}

export default Button