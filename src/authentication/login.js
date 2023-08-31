import React, { useReducer, useCallback} from "react";
import Input from "./input";
import Button from "./formElements/button";
import { VALIDATOR_EMAIL, VALIDATOR_MINLENGTH } from "./validators";
import { useForm } from "./formHook";


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


return (
    <React.Fragment>
      <div className="my-auto absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 grid-rows-3 space-y-3">
            <h3 className="text-blue-500 font-bold">Login</h3>
    <form className="bg-gray-100 w-96 mx-auto h-40 h-56 grid grid-flow-row py-3 text-xs" >
    <Input type='email' id='email' name='Email' validator = {[VALIDATOR_EMAIL()]} onInput={inputHandler} errMsg = 'Invalid Email'/>
    <Input type='password' id='password' name = 'Password'  validator = {[VALIDATOR_MINLENGTH(6)]} onInput={inputHandler} errMsg = 'Invalid Password(should be at least 6 characters)'/>
    <Button type='submit' disabled={!formState.isValid} name='Login'/>
    </form>
    <h3 className="text-sm">Don't have an account ?</h3>
      </div>
    </React.Fragment>
)
}

export default Login