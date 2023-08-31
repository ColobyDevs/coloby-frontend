import React, {useState} from "react";
import Input from "./input";
import Button from "./formElements/button";
import { VALIDATOR_EMAIL, VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH } from "./validators";

import { useForm } from "./formHook";
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
        phoneNumber:{
            value: '',
            isValid: false
        },
        password:{
            value: '',
            isValid: false
        }
    })

 

    return(
        <React.Fragment>
            <div className="flex flex-col justify-center  mx-auto  h-screen space-y-3">
            <h3 className="text-blue-500 font-bold">Signup</h3>
            <form  className="bg-gray-100 h-3/4 w-96 py-2 border-md gap-0 mx-auto  grid grid-flow-row text-xs">
            <Input type="text" id='firstName' name= 'First name'  validator = {[VALIDATOR_REQUIRE()]} onInput={inputHandler} errMsg= "first name can't be empty"/>
            <Input type="text" id='lastName'  name= 'Last name' validator = {[VALIDATOR_REQUIRE()]} onInput={inputHandler} errMsg= "last name can't be empty"/>
            <Input type="text" id='userName'   name= 'Username' validator = {[VALIDATOR_REQUIRE()]} onInput={inputHandler} errMsg= "username can't be empty"/>
            <Input type="email" id='email'   name= 'Email address' validator = {[VALIDATOR_EMAIL ()]} onInput={inputHandler} errMsg= "invalid email"/>
            <Input type="number" id='phoneNumber' name= 'Phone Number'  validator = {[VALIDATOR_MINLENGTH(11)]} onInput={inputHandler} errMsg= "Invalid"/>
            <Input type="password" id='password'   name= 'Password' validator = {[VALIDATOR_MINLENGTH(6)]} onInput={inputHandler} errMsg= "password must be at least 6 char"/>
            <Button type='submit' disabled={!formState.isValid} name='Signup' formIsValid = {formState.isValid}/>
    </form>
    <div className="flex flex-row text-sm space-x-2 mt-6 mx-auto">

            <h2 className="">Already have an account?</h2><span className="text-blue-400">Login</span>
    </div>
            </div>
        </React.Fragment>
    )
}
export default Signup