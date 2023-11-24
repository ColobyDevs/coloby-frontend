import React, {useState} from "react";
import GoogleLoginAuth from "./googleLogin";
import Input from "./input";
import Button from "./formElements/button";
import { Link } from "react-router-dom";
import { VALIDATOR_EMAIL, VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH } from "./validators";

import { useForm } from "./formHook";
import { useHttp } from "../hooks/httpHook";
const Signup = ()=>{

    const [formState, inputHandler] = useForm({
        firstName:{
            value: '',
            isValid: false
        },
        lastName:{
            value: '',
            isValid: false
        },
        userName:{
            value: '',
            isValid: false
        },
        email: {
            value:'',
            isValid: false
        },
        password:{
            value: '',
            isValid: false
        }
    }, false)


    const signUpData = {
            email: formState.inputs.email.value,
            first_name: formState.inputs.firstName.value,
            last_name: formState.inputs.lastName.value,
            password: formState.inputs.password.value,
            username: formState.inputs.userName.value
    }

    const header = {
        'Content-Type': 'application/json'
    }
    const api = 'https://coloby.onrender.com/api/v1/accounts/register/'
    const httpBody = {
            method: 'POST',
            headers: header,
            body: JSON.stringify(signUpData)
    }

    const [httpHandler] = useHttp(httpBody, api, 'register');

 

    return(
        <React.Fragment>
            <div className="flex flex-col justify-center  mx-auto  h-screen space-y-1">
            <h3 className="text-blue-500 font-medium text-center">Signup</h3>
            <form  className="bg-gray-100 h-3/4 w-96 py-2 border-md gap-0 mx-auto  grid grid-flow-row text-xs" onSubmit={httpHandler}>
            <Input type="text" id='firstName' name= 'First name'  validator = {[VALIDATOR_REQUIRE()]} onInput={inputHandler} errMsg= "first name can't be empty"/>
            <Input type="text" id='lastName'  name= 'Last name' validator = {[VALIDATOR_REQUIRE()]} onInput={inputHandler} errMsg= "last name can't be empty"/>
            <Input type="text" id='userName'   name= 'Username' validator = {[VALIDATOR_REQUIRE()]} onInput={inputHandler} errMsg= "username can't be empty"/>
            <Input type="email" id='email'   name= 'Email address' validator = {[VALIDATOR_EMAIL ()]} onInput={inputHandler} errMsg= "invalid email"/>
            <Input type="password" id='password'   name= 'Password' validator = {[VALIDATOR_MINLENGTH(8)]} onInput={inputHandler} errMsg= "password must be at least 6 char"/>
            <Button type='submit' disabled={!formState.isValid} name='Signup' formIsValid = {formState.isValid}/>
        {/* <button className={`${formState.formIsValid && 'bg-blue-500' || 'bg-blue-100'} text-white w-1/2 rounded-md mx-auto`} type='submit' disabled={!formState.isValid}>Signup</button> */}

    </form>
    <div className="mx-auto flex justify-center">
        <GoogleLoginAuth type='signin'/>
    </div>
    <div className="flex flex-row text-sm space-x-2 mt-6 mx-auto">

            <h2 className="">Already have an account?</h2><Link to='/login'>
            <span className="text-blue-400">Login</span>
            </Link>
    </div>
            </div>
        </React.Fragment>
    )
}
export default Signup