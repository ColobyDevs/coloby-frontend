import React, {useContext} from "react";
import { PiSpinnerGapBold } from "react-icons/pi";
import { Context } from "./context/context";

export default function Spinner(){
    const {isLoading} = useContext(Context)
  if(isLoading){

      return (<div className=" spinner fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center  z-40 "><PiSpinnerGapBold className="animate-spin text-7xl"/></div>)
    }
}