import React, {createContext, useState, useCallback, useEffect, useReducer} from "react";
import { useNavigate } from "react-router-dom";


export const Context = createContext()

const ContextProvider = (props)=>{
const [createChModal, setCreateChModal] = useState(false)
const [createTbModal, setCreateTbModal] = useState(false)
const [username, setUsername] = useState('')
const [token, setToken] = useState(null)
const [userId, setUserId] = useState('')
const [tokenExpDate, setTokenExpDate] = useState('')
const [isLoading, setIsLoading] = useState(false)
const [roomMsgs, setRoomMsgs] = useState([])
const [msgTrigger, setMsgTrigger ] = useState(false)
const [showChatDate, setShowChatDate] = useState(false)
const [chatDate, setChatDate] = useState('')
const [errMsg, setErrMsg] = useState('')
const [showModal, setShowModal] = useState(false)
const [showActionModal, setShowActionModal] = useState(false)



const navigate = useNavigate()


const login = useCallback((token, userId, tokenDuration)=>{
        setToken(token)
        setUsername(username)
        setUserId(userId)
        
        const tokenExpirationTime = tokenDuration || new Date().getTime() + (604800000)
        setTokenExpDate(tokenExpirationTime)
        localStorage.setItem('userData', JSON.stringify({accessToken: token,  tokenExpDate: tokenExpirationTime, userId}))
        return navigate(`/dashboard`)

})



const logout = useCallback(()=>{
    setToken(null)
    setTokenExpDate(null)
    setShowActionModal(false)
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

    const taskboardReducerDispatch = dispatch

   

    return(
        <Context.Provider value={{
            
            auth:{
            token,
            setToken,
            setUsername,
            userId,
            login,
            logout,
            username
        },

         modal:{
            createChModal,
            setCreateChModal,
            showModal,
            setShowModal,
            errMsg,
            setErrMsg,
            createTbModal,
            setCreateTbModal,
            showActionModal,
            setShowActionModal
        },

        chat:{
            roomMsgs,
            setRoomMsgs,
            msgTrigger,
            setMsgTrigger,
            showChatDate,
            setShowChatDate,
            chatDate,
            setChatDate,
        },

        taskboardReducer: {
            state,
            taskboardReducerDispatch,
        },

        loader:{
            isLoading,
            setIsLoading,
        }
            
              
        }}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider