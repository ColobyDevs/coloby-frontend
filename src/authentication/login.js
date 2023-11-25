import React from "react";
import Input from "./input";
import Button from "./formElements/button";
import { VALIDATOR_EMAIL, VALIDATOR_MINLENGTH } from "./validators";
import { useForm } from "./formHook";
import { Link } from "react-router-dom";
import { useHttp } from "../hooks/httpHook";
import GoogleLoginAuth from "./googleLogin";


const Login = ()=>{
    
const [formState, inputHandler] = useForm( {
    email:{
      value: '',
      isValid: false
    },
    password:{
      value: '',
      isValid: false
    }
}
, false);


const loginData = {
  email: formState.inputs.email.value,
  password: formState.inputs.password.value
}

const header = {
  'Content-Type': 'application/json'
}
const api = 'https://coloby.onrender.com/api/v1/accounts/log-in/'
const httpBody = {
      method: 'POST',
      headers: header,
      body: JSON.stringify(loginData)
}


const [httpHandler] = useHttp(httpBody, api, 'login')



return (
    <React.Fragment>
      <div className="my-auto absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 grid-rows-3 space-y-3">
            <h3 className="text-blue-500 font-medium">Login</h3>
    <form className="bg-gray-100 w-96 mx-auto h-56 grid grid-flow-row py-3 text-xs"  onSubmit={httpHandler}>
    <Input type='email' id='email' name='Email' validator = {[VALIDATOR_EMAIL()]} onInput={inputHandler} errMsg = 'Invalid Email'/>
    <Input type='password' id='password' name = 'Password'  validator = {[VALIDATOR_MINLENGTH(8)]} onInput={inputHandler} errMsg = 'Invalid Password(should be at least 6 characters)'/>
    <Button type='submit' disabled={!formState.isValid} name='Login' formIsValid = {formState.isValid}/>
    </form>
    <div className="mx-auto flex justify-center">
      
      <GoogleLoginAuth type='login'/>
    </div>
    
    <div className="flex flex-row text-sm space-x-2 mt-6 mx-auto justify-center">
            <h2 className="">Don't have an account?</h2>
            <Link to='/signup'>
            <span className="text-blue-400">Signup</span>
            </Link>
    </div>
      </div>
    </React.Fragment>
)
}

export default Login