import React, {useEffect} from "react";


export default function Requests(){
    useEffect(()=>{
        localStorage.setItem("lastVisitedPage", window.location.pathname);
      }, [])
    return<>Requests</>
}