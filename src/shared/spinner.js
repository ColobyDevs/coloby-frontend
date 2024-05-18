import React, {useContext} from "react";
import { PiSpinnerGapBold } from "react-icons/pi";
import { CgSpinner } from "react-icons/cg";
import { Context } from "../context/context";

export default function Spinner(){
    const {loader} = useContext(Context)
    const {isLoading} = loader
   
  if(isLoading){

      return (<div className=" backdrop fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center text-[#052CFD]  z-50 "><CgSpinner className="animate-spin text-7xl"/></div>)
    }
}