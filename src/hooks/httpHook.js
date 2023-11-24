import React, {useContext} from 'react'
import { useNavigate } from 'react-router-dom'
import { Context } from '../context/context'


export const useHttp=(httpBody, api, type)=>{
    const {login, setRoomMsgs, msgTrigger, setMsgTrigger} = useContext(Context)
    const httpFunction = async(httpBody, api, type)=>{
        
        try{
          const response = await fetch(`${api}`,
                httpBody
            )
            const responseData = await response.json()
            const {access_token,  user_id} = responseData
            console.log(responseData);
            if(type === 'login'){
                login(access_token,  user_id);
            }else if(type === 'sendMessage'){
                console.log('ko');
               setMsgTrigger(!msgTrigger)
            }
            if (!response.ok) {
                throw new Error(responseData.message)
            }

        }catch(err){

            console.log(err);
        }
        

    }

    const httpHandler=(e)=>{
        e.preventDefault()
        console.log(api, type);
        httpFunction(httpBody, api, type)
    }
    return [httpHandler]
}


// email
// : 
// "mayowaayeni008@gmail.com"
// first_name
// : 
// "Mayowa"
// last_name
// : 
// "Ayeni"
// username
// : 
// "mayhor"

// Mayhoral
