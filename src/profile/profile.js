import React, {useContext} from "react";
import { Context } from "../context/context";


export default function Profile(){
const {userId} = useContext(Context)


const getProfile = async()=>{

    
   
        try{
            const response = await fetch(`https://coloby.onrender.com/api/v1/accounts/update-profile/${userId}/`, {
                method: 'GET',
               
            })
            const responseData = await response.json()
            console.log(response);
            console.log(responseData);
            if(!response.ok){
                throw new Error(responseData.message)
            }
        }catch(err){
                console.log(err)
        }
}

return(<>
<button className="ml-96" onClick={getProfile}>Get Profile</button>
</>)

}