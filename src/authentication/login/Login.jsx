import React from "react";
import { Link } from "react-router-dom";
import Input from "../input";
import { useForm } from "../formHook";
import { useHttp } from "../../hooks/httpHook";
import { VALIDATOR_EMAIL, VALIDATOR_MINLENGTH } from "../validators";
const Login = () => {
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

  return (
    <>
      <section className="w-full h-full lg:min-h-screen">
        <div className="w-full h-full flex flex-col lg:flex-row">
          <div className="w-full lg:w-1/2 bg-white100 px-[25px] py-[30px] lg:px-[42px] lg:py-[50px] font-outfit">
            <div className="relative mb-[52px] lg:mb-[60px]">
              <a href="/">
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
                    Sign in
                  </h2>
                  <p className="font-normal text-st_grey lg:text-[18px] hidden lg:block">
                    Don't have an account?
                    <Link
                      className="font-medium ml-1 text-st_green"
                      to="/signup"
                      target="_blank"
                    >
                      Create now
                    </Link>
                  </p>
                </div>
                <div>
                  <div className="lg:flex lg:flex-col lg:space-y-4 border">
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="example@gmail.com"
                      validator={[VALIDATOR_EMAIL()]}
                      onInput={inputHandler}
                      errMsg="Invalid Email"
                    />
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
                  <div className="flex items-center justify-between mb-[45px]">
                    <div className="text-st_grey flex items-center gap-3">
                      <input type="checkbox" name="rememberMe" />
                      <p>Remind me</p>
                    </div>
                    <a className="font-semibold text-st_green" href="#">
                      Forgot password?
                    </a>
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="w-full flex justify-center rounded-[30px] items-center py-3 bg-[#2a2affe6] lg:rounded-[20px] text-white text-[20px] leading-[28px] font-semibold"
                      disabled={!formState.isValid}
                      onClick={httpHandler}
                    >
                      Sign in
                    </button>
                  </div>
                  <div className="my-[40px] flex items-center w-full gap-4">
                    <div className="bg-[#2a2affe6] h-[1px] w-full flex-1"></div>
                    <span className="text-[12px] text-gray-500 bg- leading-[20px] font-medium">
                      OR
                    </span>
                    <div className="bg-[#2a2affe6] h-[1px] w-full flex-1"></div>
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
                          style={{ color: "transparent" }}
                          src="google.svg"
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
                          style={{ color: "transparent" }}
                          src="facebook.svg"
                        />
                      </div>
                      Continue with Facebook
                    </button>
                  </div>
                  <div className="block lg:hidden mt-[35px] lg:mt-0">
                    <p className="font-normal text-st_grey text-[14px] lg:text-[18px] text-center">
                      Don't have an account?
                      <a className="font-medium text-st_green" href="/register">
                        Create now
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

export default Login;
