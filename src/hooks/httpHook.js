import {useContext} from 'react'
import { Context } from '../context/context'
import { useNavigate } from 'react-router-dom'
import { toast } from 'sonner'

export const useHttp=(httpBody, api, type)=>{
    const navigate = useNavigate()
const {auth, modal, loader, chat} =  useContext(Context)
const {login} = auth
const { setErrMsg, setCreateChModal, setShowModal} = modal
const {setMsgTrigger, msgTrigger} = chat
const {setIsLoading} = loader
  
    const httpFunction = async(httpBody, api, type)=>{
        
        try{
           type !== 'sendMessage' && setIsLoading(true)
          const response = await fetch(`${api}`,
                httpBody
            )
            const responseData = await response.json()
            const {access_token,  user_id} = responseData
            console.log(responseData);
            if (!response.ok) {
                console.log(Object.values(responseData)[0][0]);
                throw new Error(Object.values(responseData)[0][0])
            }else if(response.ok && type === 'login'){
                login(access_token,  user_id);
            }else if(type === 'sendMessage'){
               setMsgTrigger(!msgTrigger)
            } else if(type === 'register'){
                setIsLoading(false)
                return navigate('/login')
            } else if(type === 'createRoom'){
                setCreateChModal(false)
                toast.success('Room Succesfully Created!')
            }
            setIsLoading(false)
            
        }catch(err){
            setIsLoading(false)
            setShowModal(true)
     
       
            setErrMsg(err.message)
            console.log(err.message);
        }
        

    }

    const httpHandler=(e)=>{
        e.preventDefault()
       
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
{credential_error: Array(1)}