import React, {createContext, useState, useCallback, useEffect} from "react";
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
                setChatDate

        }}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider