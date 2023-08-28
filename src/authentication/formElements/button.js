import React from "react";

const Button = (props)=>{
    return(
        <button className="bg-yellow-500 w-1/2 rounded-md" type={props.type} disabled={props.disabled}>{props.name}</button>
    )
}

export default Button