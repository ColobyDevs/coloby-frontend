import React, { useState} from "react";
import Input from "./input";
import Button from "./formElements/button";
import { VALIDATOR_EMAIL, VALIDATOR_MINLENGTH } from "./validators";

const Login = ()=>{
const [emailIsValid, setEmalIsValid] = useState(false)
const [passwordIsValid, setPasswordIsValid] = useState(false)
const btnIsValid = emailIsValid && passwordIsValid


console.log(emailIsValid, passwordIsValid)
return (
    <React.Fragment>
    <form  className="bg-blue-600 w-1/2 mx-auto h-40 my-auto absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 h-56">
    <Input type='email' name='email'  validityFunc={setEmalIsValid} validator = {VALIDATOR_EMAIL}/>
    <Input type='password' name='password'  validityFunc={setPasswordIsValid}  validator = {VALIDATOR_MINLENGTH}/>
    <Button type='submit' disabled={!btnIsValid} name='Login'/>
    </form>
    </React.Fragment>
)
}

export default Login