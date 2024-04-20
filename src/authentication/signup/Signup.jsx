import React, {useContext} from "react";
import { Context } from "../../context/context";
import { Link, Navigate } from "react-router-dom";
import Input from "../input";
import { useForm } from "../formHook";
import { useHttp } from "../../hooks/httpHook";
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
  VALIDATOR_EMAIL,
} from "../validators";

const Signup = () => {

  const {auth} = useContext(Context)
  const {token} = auth
 

  const [formState, inputHandler] = useForm(
    {
      email: {
        value: "",
        isValid: false,
      },
      firstName: {
        value: "",
        isValid: false,
      },
      lastName: {
        value: "",
        isValid: false,
      },
      userName: {
        value: "",
        isValid: false,
      },
      password: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const signUpData = {
    email: formState.inputs.email.value,
    first_name: formState.inputs.firstName.value,
    last_name: formState.inputs.lastName.value,
    password: formState.inputs.password.value,
    username: formState.inputs.userName.value,
  };
  console.log(formState);

  const header = {
    "Content-Type": "application/json",
  };
  const api = "https://coloby.onrender.com/api/v1/accounts/register/";
  const httpBody = {
    method: "POST",
    headers: header,
    body: JSON.stringify(signUpData),
  };

  const [httpHandler] = useHttp(httpBody, api, "register");

  if(!token){

  return (
    <>
      <section className="w-full h-screen">
        <div className="w-full h-full flex flex-col lg:flex-row ">
        <div className="w-full lg:w-1/2 bg-[#2a2affe6]"></div>
          <div className="w-full lg:w-1/2 bg-white100 px-[25px] lg:py-auto  lg:px-[42px] font-outfit">
            <div className="lg:px-[50px]">
              <form>
                <div className="lg:mb-10">
                  <h2 className="font-bold text-st_black text-[36px] lg:py-4 lg:text-[42px] lg:leading-[48px] mb-[40px] lg:mb-[34px]">
                    Sign up
                  </h2>
                  <p className="font-normal text-st_grey lg:text-[18px] hidden lg:block">
                    Have an account?
                    <Link to="/login">Login</Link>
                  </p>
                </div>
                <div className=" lg:flex-col  lg:grid lg:grid-rows-3 lg:gap-y-4  ">
                  <div className="mb-[30px] lg:mb-0 w-full flex flex-col lg:flex-row lg:gap-[10px]">
                    <div className="flex-1 mb-[30px] lg:mb-0">
                      <Input
                        name="first Name"
                        type="text"
                        id="firstName"
                        placeholder="Moyinoluwa"
                        validator={[VALIDATOR_REQUIRE()]}
                        onInput={inputHandler}
                        errMsg="Field is required"
                      />
                    </div>
                    <div className="mb-[30px]">
                    <Input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="example@gmail.com"
                      validator={[VALIDATOR_EMAIL()]}
                      onInput={inputHandler}
                      errMsg="Invalid Email"
                    />
                  </div>
                  </div>
                  <div className="mb-[30px] lg:mb-0 w-full flex flex-col lg:flex-row lg:gap-[10px]">
                  <div className="mb-[30px]">
                    <Input
                      name="username"
                      type="text"
                      id="userName"
                      placeholder="Moyin123"
                      validator={[VALIDATOR_REQUIRE()]}
                      onInput={inputHandler}
                      errMsg="Field is required"
                    />
                  </div>
                  <div className="mb-[45px] lg:mb-0">
                    <Input
                      type="password"
                      id="password"
                      name="password"
                      placeholder="password"
                      validator={[VALIDATOR_MINLENGTH(8)]}
                      onInput={inputHandler}
                      errMsg="Must at least 8 characters"
                    />
                  </div>
                  </div>           
                  <div className="lg:mb-0 lg:mt-2">
                    <button
                      type="submit"
                      className="w-full flex justify-center items-center py-3 bg-[#2a2affe6] text-white rounded-[30px] lg:rounded-[20px] text-white100 text-[20px] leading-[28px] font-semibold"
                      disabled={!formState.isValid}
                      onClick={httpHandler}
                    >
                      Sign up
                    </button>
                  </div>
                 
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}if(token){
return <Navigate to='signup'/>
}
;
};

export default Signup;
