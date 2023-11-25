import {useContext} from 'react'
import { Context } from '../context/context'
import { useNavigate } from 'react-router-dom'

export const useHttp=(httpBody, api, type)=>{
    const navigate = useNavigate()

    const {login, setIsLoading, msgTrigger, setMsgTrigger, setCreateChModal} = useContext(Context)
    const httpFunction = async(httpBody, api, type)=>{
        
        try{
           type !== 'sendMessage' && setIsLoading(true)
          const response = await fetch(`${api}`,
                httpBody
            )
            const responseData = await response.json()
            const {access_token,  user_id} = responseData
            console.log(responseData);
            if(type === 'login'){
                login(access_token,  user_id);
            }else if(type === 'sendMessage'){
        
               setMsgTrigger(!msgTrigger)
            } else if(type === 'register'){
                setIsLoading(false)
                return navigate('/login')
            } else if(type === 'createRoom'){
                setCreateChModal(false)
            }
            if (!response.ok) {
                throw new Error(responseData.message)
            }
            setIsLoading(false)

        }catch(err){
            setIsLoading(false)
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
