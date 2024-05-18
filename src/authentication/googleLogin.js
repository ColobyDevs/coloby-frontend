import React, { useState, useContext } from "react";
import { useGoogleLogin } from "@react-oauth/google";
import { Context } from "../context/context";

function GoogleLoginAuth({ type }) {
  const { auth, loader } = useContext(Context);
  const  {setIsLoading} = loader
  const {login, token} = auth

  const btnLabel =
    (type === "login" && "Continue with Google") ||
    (type === "signin" && "Sign up with Google");

  const googleLogin = useGoogleLogin({
    onSuccess: (codeResponse) => googleLoginFetch(codeResponse),
    onError: (error) => console.log("Login Failed:", error),
  });

 
  const googleLoginFetch = async (googleCrd) => {
    setIsLoading(true)
    try{
      const response = await fetch(
        "https://coloby.onrender.com/api/v1/accounts/google-login/",
        {
          method: "POST",
          body: JSON.stringify({
            access_token: googleCrd.access_token,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
        );
        const responseData = await response.json();
        console.log(responseData);
      if(response.ok){
        login(responseData.access_token)
      }
        setIsLoading(false)
    }catch(err){
        console.log(err.message);
        setIsLoading(false);
    }
  }
  return (
    <div>
      <button
        onClick={googleLogin}
        className="relative  w-full  flex bg-transparent justify-center items-center border border-solid  border-[#CBD5E0] rounded-md p-3  text-[#67728A] lg:text-sm font-medium "
      >
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
    </div>
  );
}
export default GoogleLoginAuth;
