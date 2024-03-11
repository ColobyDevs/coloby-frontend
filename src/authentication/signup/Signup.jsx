import React from "react";
import { Link } from "react-router-dom";
import Input from "../input";
import { useForm } from "../formHook";
import { useHttp } from "../../hooks/httpHook";
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
  VALIDATOR_EMAIL,
} from "../validators";

const Signup = () => {
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

  return (
    <>
      <section className="w-full h-full lg:min-h-screen">
        <div className="w-full h-full flex flex-col lg:flex-row">
          <div className="w-full lg:w-1/2 bg-white100 px-[25px] py-[30px] lg:px-[42px] lg:py-[50px] font-outfit">
            <div className="relative mb-[52px] lg:mb-[60px]">
              <a href="#">
                <img
                  alt="coloby"
                  loading="lazy"
                  width="150"
                  height="40"
                  decoding="async"
                  data-nimg="1"
                  className="ml-[-4px] lg:ml-0"
                  style={{ color: "transparent" }}
                  src="colobyIcon.png"
                />
              </a>
            </div>
            <div className="lg:px-[50px]">
              <form>
                <div className="lg:mb-10">
                  <h2 className="font-bold text-st_black text-[36px] lg:text-[48px] lg:leading-[48px] mb-[40px] lg:mb-[34px]">
                    Sign up
                  </h2>
                  <p className="font-normal text-st_grey lg:text-[18px] hidden lg:block">
                    Have an account?
                    <Link to="/login">Login</Link>
                  </p>
                </div>
                <div>
                  <div className="mb-[30px] w-full flex flex-col lg:flex-row lg:gap-[20px]">
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
                    <div className="flex-1">
                      <Input
                        name="last Name"
                        type="text"
                        id="lastName"
                        placeholder="Afolabi"
                        validator={[VALIDATOR_REQUIRE()]}
                        onInput={inputHandler}
                        errMsg="Field is required"
                      />
                    </div>
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
                  <div className="mb-[45px]">
                    <Input
                      type="password"
                      id="password"
                      name="password"
                      placeholder="password"
                      validator={[VALIDATOR_MINLENGTH(8)]}
                      onInput={inputHandler}
                      errMsg="Invalid Password(should be at least 8 characters)"
                    />
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="w-full flex justify-center items-center py-3 bg-[#2a2affe6] text-white rounded-[30px] lg:rounded-[20px] text-white100 text-[20px] leading-[28px] font-semibold"
                      disabled={!formState.isValid}
                      onClick={httpHandler}
                    >
                      Sign up
                    </button>
                  </div>
                  <div className="my-[40px] flex items-center w-full gap-4">
                    <div className="bg-st_slate h-[1px] w-full flex-1"></div>
                    <span className="text-[12px] text-st_grey leading-[20px] font-medium">
                      OR
                    </span>
                    <div className="bg-st_slate h-[1px] w-full flex-1"></div>
                  </div>
                  <div className="w-full flex flex-col gap-8">
                    <button className="relative w-full flex bg-transparent justify-center items-center border border-solid border-[#CBD5E0] rounded-[30px] p-3 lg:p-4 text-[#67728A] text-[18px] font-medium leading-[28px]">
                      <div className="icon absolute left-5">
                        <img
                          alt=""
                          loading="lazy"
                          width="25"
                          height="25"
                          decoding="async"
                          data-nimg="1"
                          src="google.svg"
                          style={{ color: "transparent" }}
                        />
                      </div>
                      Continue with Google
                    </button>
                    <button className="relative w-full flex bg-transparent justify-center items-center border border-solid border-[#CBD5E0] rounded-[30px] p-3 lg:p-4 text-[#67728A] text-[18px] font-medium leading-[28px]">
                      <div className="icon absolute left-5">
                        <img
                          alt=""
                          loading="lazy"
                          width="25"
                          height="25"
                          decoding="async"
                          data-nimg="1"
                          src="/facebook.svg"
                          style={{ color: "transparent" }}
                        />
                      </div>
                      Continue with Facebook
                    </button>
                  </div>
                  <div className="block lg:hidden mt-[35px] lg:mt-0">
                    <p className="font-normal text-st_grey text-[14px] lg:text-[18px] text-center">
                      Have an account?
                      <a className="font-medium text-st_green" href="">
                        Login
                      </a>
                    </p>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="w-full lg:w-1/2 bg-[#2a2affe6]"></div>
        </div>
      </section>
    </>
  );
};

export default Signup;
