import React, {createContext, useState, useCallback, useEffect, useReducer} from "react";
import { useNavigate } from "react-router-dom";


export const Context = createContext()

const ContextProvider = (props)=>{
const [createChModal, setCreateChModal] = useState(false)
const [username, setUsername] = useState('')
const [token, setToken] = useState(null)
const [userId, setUserId] = useState('')
const [tokenExpDate, setTokenExpDate] = useState('')
const [isLoading, setIsLoading] = useState(false)
const [roomMsgs, setRoomMsgs] = useState([])
const [msgTrigger, setMsgTrigger ] = useState(false)
const [showChatDate, setShowChatDate] = useState(false)
const [chatDate, setChatDate] = useState('')





const navigate = useNavigate()

const login = useCallback((token, userId, tokenDuration)=>{
        setToken(token)
        setUsername(username)
        setUserId(userId)
        
        const tokenExpirationTime = tokenDuration || new Date().getTime() + (604800000)
        setTokenExpDate(tokenExpirationTime)
        localStorage.setItem('userData', JSON.stringify({accessToken: token,  tokenExpDate: tokenExpirationTime, userId}))
        return navigate(`/dashboard/${userId}`)

})



const logout = useCallback(()=>{
    setToken(null)
    setTokenExpDate(null)
    localStorage.removeItem('userData')
    return navigate('/login')
})

// persist login after refresh
useEffect(()=>{
    console.log('test');
    const storedData = JSON.parse(localStorage.getItem('userData'))
    if(storedData && storedData.accessToken  && storedData.userId && storedData.tokenExpDate > new Date().getTime()){
       
        login(storedData.accessToken, storedData.userId, tokenExpDate)
    }
}, [token])



// auto-logout after token expires
useEffect(()=>{
    let timeoutId;
    if(tokenExpDate){
      const minutesLeft = tokenExpDate - new Date().getTime()
      timeoutId = setTimeout(logout, minutesLeft)
    }else{
        clearTimeout(timeoutId)
    }
  }, [tokenExpDate, logout])



  const getMsgs = async (first)=>{

            setIsLoading(true)
            console.log(token);
        
    
                try{
                    const response = await fetch(`https://coloby.onrender.com/api/v1/chat/get/colobytest_mhz0/`, {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'application/json',
                            Authorization: 'Bearer ' + JSON.parse(localStorage.getItem('userData')).accessToken
                        }
                    })
                    const responseData = await response.json()
                    console.log(responseData);
            if(responseData.detail === 'Given token not valid for any token type'){
                throw new Error(responseData.message)
            }
              setRoomMsgs(responseData.messages)
            // dispatch({type: 'clear'})
            setIsLoading(false)
            if(!response.ok){
                throw new Error(responseData.message)
            }
        }catch(err){
            setIsLoading(false)
            console.log(err)
        } 
    
    }
    useEffect(()=>{
        console.log(1);
                getMsgs()
    }, [ msgTrigger])



    // taskboard subsection navigation
    const initialState = {
        overview:{
            isActive: true
        },
        assigned:{
            isActive: false
        },
        requests:{
            isActive: false
        },
        analysis:{
            isActive: false
        },
    }

    const reducerFunc = (state, action)=>{
            switch(action.type){
                case 'OVERVIEW':{
                    return {...state, overview:{isActive:true }, assigned: {isActive: false}, requests: {isActive: false}, analysis: {isActive: false} }
                }
                case 'ASSIGNED':{
                    return {...state, overview:{isActive:false }, assigned: {isActive: true}, requests: {isActive: false}, analysis: {isActive: false} }
                }
                case 'REQUESTS': {
                    return {...state, overview:{isActive:false }, assigned: {isActive: false}, requests: {isActive: true}, analysis: {isActive: false} }
                }
                case 'ANALYSIS': {
                    return {...state, overview:{isActive:false }, assigned: {isActive: false}, requests: {isActive: false}, analysis: {isActive: true} }
                }
            }
    }

    const [state, dispatch] = useReducer(reducerFunc, initialState)

   




const coloby = 'coloby'

    return(
        <Context.Provider value={{
                coloby,
                createChModal,
                setCreateChModal,
                username,
                setUsername,
                token,
                setToken,
                userId,
                login,
                logout,
                isLoading,
                setIsLoading,
                roomMsgs,
                setRoomMsgs,
                msgTrigger,
                setMsgTrigger,
                showChatDate,
                setShowChatDate,
                chatDate,
                setChatDate,
                state,
                dispatch

        }}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider