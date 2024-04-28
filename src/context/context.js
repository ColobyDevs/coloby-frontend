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
const [rooms, setRooms] = useState([])



const navigate = useNavigate()



const login = useCallback((token, userId, tokenDuration)=>{
    setToken(token)
    setUsername(username)
    setUserId(userId)
    getUserData()
    console.log('p');
    const tokenExpirationTime = tokenDuration || new Date().getTime() + (604800000)
    setTokenExpDate(tokenExpirationTime)
    localStorage.setItem('userData', JSON.stringify({accessToken: token,  tokenExpDate: tokenExpirationTime, userId}))
        const lastVisitedPage = localStorage.getItem("lastVisitedPage");
        if (lastVisitedPage) {
          localStorage.removeItem("lastVisitedPage"); // Remove the stored URL
          return navigate(lastVisitedPage)
        }
        const lastTaskState = JSON.parse(localStorage.getItem("lastTaskState"));
        if(lastTaskState){
            localStorage.removeItem("lastTaskState"); 
            dispatch({type: lastTaskState})
        }else{
            return navigate('/app/dashboard')
        }
    getUserData()
    
    })
    const getUserData = async ()=>{
        if(token){
        setIsLoading(true)
        const response = await fetch('https://coloby.onrender.com/api/v1/userdata', {
            headers:{
                "Content-Type": "application/json",
                Authorization: "Bearer " + token,
            }
        })
        const responseData = await response.json()
         setRooms(responseData.created_rooms)
         setIsLoading(false)
        }
    }
    console.log(rooms);
    
const logout = useCallback(async ()=>{
    // const response = await fetch('https://coloby.onrender.com/api/v1/accounts/log-out/', {
    //     method: 'POST',
    //     headers:{
    //         "Content-Type": "application/json",
    //         Authorization: "Bearer " + token,
    //     }
    // })
    // const responseData = await response.json()
    // console.log(responseData);
    setToken(null)
    setTokenExpDate(null)
    setShowActionModal(false)
    localStorage.removeItem('userData')
    return navigate('/auth/login')
})

// persist login after refresh
useEffect(()=>{
    
    const storedData = JSON.parse(localStorage.getItem('userData'))
    if(storedData && storedData.accessToken  && storedData.userId && storedData.tokenExpDate > new Date().getTime()){
       
        login(storedData.accessToken, storedData.userId, tokenExpDate)
    }else{
        //to be implemented, user must sign in again
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
        console.log('called');
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
        },
        rooms,
        setRooms
            
              
        }}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider