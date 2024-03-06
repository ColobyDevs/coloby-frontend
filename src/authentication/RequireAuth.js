import { Outlet, useNavigate, Navigate,  useLocation } from "react-router-dom";
import useContextStates from "../hooks/contextHook";
import { Context } from "../context/context";
import { useContext } from "react";
import { useEffect, useState } from "react";

const RequireAuth=()=>{
    const [testData, setTestData] = useState('')
    const {token}= useContext(Context).auth


    const navigate = useNavigate()
    const location = useLocation()
    console.log(token);

   return(
       <>
    {
        token  ? <Outlet/> :   <Navigate to ='/login' />

    }
    </>
    
   )
              
}
export default RequireAuth