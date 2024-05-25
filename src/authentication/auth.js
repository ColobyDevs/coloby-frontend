import React, { useContext, useState, useEffect } from "react";

import { Context } from "../context/context";
import { Link, Navigate, useLocation } from "react-router-dom";

import Input from "./input";

import { useForm } from "./formHook";

import { useHttp } from "../hooks/httpHook";
import { IoIosArrowBack } from "react-icons/io";

import { VALIDATOR_EMAIL, VALIDATOR_MINLENGTH } from "./validators";
import Aos from "aos";
import "aos/dist/aos.css";

const Auth = () => {
    const [authSocial, setAuthSocial] = useState(true)
    useEffect(() => {
        Aos.init({
            startEvent: !authSocial
          });
      }, [authSocial]);
  const { location } = useLocation();
  const { auth } = useContext(Context);
  const { token } = auth;

  const socialAuth = ()=>{
    setAuthSocial(!authSocial)
  }

  const [formState, inputHandler] = useForm(
    {
      email: {
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

  const loginData = {
    email: formState.inputs.email.value,
    password: formState.inputs.password.value,
  };

  const header = {
    "Content-Type": "application/json",
  };
  const api = "https://coloby.onrender.com/api/v1/accounts/log-in/";
  const httpBody = {
    method: "POST",
    headers: header,
    body: JSON.stringify(loginData),
  };

  const [httpHandler] = useHttp(httpBody, api, "login");

  if (!token) {
    return (
      <>
        <section className=" h-full overflow-hidden lg:min-h-screen lg:items-center lg:px-10 flex flex-col lg:grid lg:grid-cols-2 bg-gradient-to-b from-[#B6BEEAB2] to-[#D9D9D900]">
          <div className="w-full hidden lg:block">
            <h2 className="text-[#030E46] lg:text-3xl font-bold">
              The fastest and easiest way <br /> to build your dream team,{" "}
              <br />
              manage task and so many <br /> others
            </h2>
            <span className="lg:mt-6">
              Sign Up for free, no credit card required!
            </span>
          </div>
          <section className="flex">

        { authSocial ? <article   data-aos="fade-right"
          data-aos-easing="ease-out"
          data-aos-duration="600"
          data-aos-once="true" className="lg:bg-white flex flex-col lg:justify-evenly lg:shadow-lg lg:w-full lg:h-[500px]">
            <div className="text-center order-first lg:order-none">
              <h1 className="text-2xl">Sign in to your account.</h1>
              <p className="font-thin">
                Enhance your skills and future-proof your 
              </p>
            </div>
            <section className=" order-last lg:order-none flex flex-col lg:space-y-2">
              <article className="flex order-last flex-row md:flex-col items-center justify-center lg:space-y-2">
                <button className="relative lg:w-2/5 w-1/2 flex bg-transparent justify-center items-center border border-solid  border-[#CBD5E0] rounded-md p-3  text-[#67728A] lg:text-sm font-medium ">
                  <div className="icon">
                    <img
                      alt=""
                      loading="lazy"
                      width="25"
                      height="25"
                      decoding="async"
                      data-nimg="1"
                      style={{ color: "transparent" }}
                      src="google.svg"
                    />
                  </div>
                  Continue with Google
                </button>
                <button className="relative lg:w-2/5 w-1/2 flex bg-transparent justify-center items-center border border-solid border-[#CBD5E0] rounded-md p-3  text-[#67728A]  lg:text-sm font-medium ">
                  <div className="icon ">
                    <img
                      alt=""
                      loading="lazy"
                      width="25"
                      height="25"
                      decoding="async"
                      data-nimg="1"
                      style={{ color: "transparent" }}
                      src="facebook.svg"
                    />
                  </div>
                  Continue with Facebook
                </button>
                <button onClick={socialAuth} className="relative lg:w-2/5 w-1/2 flex bg-transparent justify-center items-center border border-solid border-[#CBD5E0] rounded-md p-3  text-[#67728A]  lg:text-sm font-medium ">
                  <div className="icon ">
                    <img
                      alt=""
                      loading="lazy"
                      width="25"
                      height="25"
                      decoding="async"
                      data-nimg="1"
                      style={{ color: "transparent" }}
                      src="facebook.svg"
                    />
                  </div>
                  Continue with Email
                </button>
              </article>

            </section>

        
            <div className="order-2 lg:order-none">
              <p className="text-center">
                Don’t have an account yet? Click here to{" "}
                <span className="text-blue-700 underline">
                <Link to='/auth/signup'>Sign Up!</Link>
                </span>
              </p>
            </div>
          </article> :  
            <article   data-aos="fade-left"
            data-aos-easing="ease-out"
            data-aos-duration="600"
            data-aos-once="true" className="lg:bg-white flex flex-col lg:justify-evenly lg:shadow-lg lg:w-full lg:h-[500px]">
            <div className="text-center order-first lg:order-none">
            <div className=" text-[#0B1F89] pl-2 flex flex-row items-center cursor-pointer">
                 <IoIosArrowBack /> <p onClick={socialAuth} className="text-start ">Back</p>
                </div>
              <h1 className="text-2xl">Sign in to your account.</h1>
              <p className="font-thin">
                Enhance your skills and future-proof your 
              </p>
            </div>
        
            <form className=" order-3 lg:order-none lg:flex lg:flex-col  mx-auto lg:w-4/5 lg:space-y-6 ">
              <Input
                className="lg:px-4 border border-[#CBD5E0] border-solid lg:w-full lg:h-10 rounded-md"
                name="email"
                type="email"
                id = "email"
                placeholder="Enter Email Address"
                validator={[VALIDATOR_EMAIL()]}
                onInput={inputHandler}
                errMsg="Invalid Email"
              />
              <Input
                className="lg:px-4 border border-[#CBD5E0] border-solid lg:w-full lg:h-10 rounded-md"
                name="passsword"
                type="passsword"
                id = "password"
                placeholder="Enter Password"
                validator={[VALIDATOR_MINLENGTH(8)]}
                onInput={inputHandler}
                errMsg="Invalid Password(should be at least 8 characters)"
              />
              <button disabled={!formState.isValid} onClick={httpHandler} className="lg:h-10 bg-[#0B1F89] w-full text-white rounded-md">
                Log In
              </button>
            </form>
            <div className="order-2 lg:order-none">
              <p className="text-center">
                Don’t have an account yet? Click here to{" "}
                <span className="text-blue-700 underline">
                  <Link to='/auth/signup'>Sign Up!</Link>
                </span>
              </p>
            </div>
          </article>
  }
         
          </section>

        </section>
      </>
    );
  } else if (token) {
    return <Navigate to="/dashboard" />;
  }
};

export default Auth;
