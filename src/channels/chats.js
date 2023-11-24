import React, {useReducer, useState, useRef, useContext, useEffect} from "react";
import { Context } from "../context/context";
import { useLocation } from "react-router-dom";
import { chatData } from "./chatData";
import ChatDataList from "./dataList";
import {CiFaceSmile } from 'react-icons/ci'
import {ImAttachment} from 'react-icons/im'
import {AiTwotoneCamera, AiOutlineSend} from 'react-icons/ai'
import avatar from '../img/avatar.jpg'
import { useHttp } from "../hooks/httpHook";


const Chat = ()=>{
    const {token, msgTrigger, roomMsgs, setRoomMsgs} = useContext(Context)
    const location = useLocation()
    
    const reducer = (state, action)=>{
        if(action.type === 'firstP'){
            return {...state, value: action.value, type: action.type }
        }else if(action.type === 'secondP'){
            return {...state, value: action.value, type: action.type}
        }else if(action.type === 'clear'){
            return initialState
        }
    }
    
    const initialState = {
        value: '',
            type: '',
            isValid: false
        }
        
        const [state, dispatch]  = useReducer(reducer, initialState)
   
        const messageHandler = (e)=>{
            e.preventDefault();
        dispatch({value: e.target.value, payload: 'right', type: 'secondP'})
    }

const carousel = useRef()
const chatBox = useRef()

const btnIsValid = state.value !== ''
const api = 'https://coloby.onrender.com/api/v1/chat/send/colobytest_mhz0/'




const message = {
    message: state.value
}

const httpBody = {
    method: 'POST',
    body: JSON.stringify(message),
    headers:{
    'Content-Type': 'application/json',
    Authorization: 'Bearer ' + token
    }
}
const [httpHandler] = useHttp(httpBody, api, 'sendMessage')


const sendMessage =  (e) => {
   

    e.preventDefault();

 
        

            chatData.push({
                type: state.type,
                message: state.value
            });

            dispatch({type: 'clear'})
            
            
            
            
        };
        

        useEffect(()=>{
            
            if(location.pathname === '/channels'){

                
                const getMsgs = async ()=>{
        
                try{
                    const response = await fetch(`https://coloby.onrender.com/api/v1/chat/get/colobytest_mhz0/`, {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'application/json',
                            Authorization: 'Bearer ' + token
                        }
                    })
                    const responseData = await response.json()
                    console.log(responseData);
                    setRoomMsgs(responseData.messages)
                    dispatch({type: 'clear'})
                    if(!response.ok){
                        throw new Error(responseData.message)
                    }
                }catch(err){
                    console.log(err)
                }
            }
            getMsgs()
        }
        
        
        
        
    }, [msgTrigger, location.pathname])
    
    
    useEffect(()=>{
            if(location.pathname === '/channels'){
            const carr = document.querySelector('.section-chat');
            carr.scrollTop += carr.scrollHeight;
        }
        }, [state.value])
    
        
  
return(
    <>

    <section ref={carousel} className=" rounded-md section-chat chat-con relative  mt-4 h-64 w-56 mx-auto bg-gray-600 overflow-x-hidden overflow-scroll scroll-smooth">
       <article className="flex h-10 items-center px-2 flex-row border-b sticky top-0 w-full bg-gray-600 text-white">
        <img className="w-8 h-8 rounded-full" src={avatar}/>
        <div className="ml-4  flex flex-col">
            <h2 className="text-xs ">Mayhoral</h2>
            <span className="field-text">Online</span>
        </div>
       </article>
    <div className=" mt-4 px-2  flex flex-col space-y-3 max-w-xs overflow-hidden  field-text">
       <ChatDataList/>
    </div>
    <div className="bg-gray-600 sticky top-0  bottom-0 pb-2 mt-2 left-0   w-full px-2 flex flex-row items-center justify-between gap-x-2">
        <div className="px-2 flex flex-row h-6 bg-gray-400 rounded-2xl w-11/12 items-center text-white justify-between">
            <div className="flex flex-row">

        <CiFaceSmile className="w-6 text-xs"/>
        <input value={state.value} onChange={messageHandler} placeholder="Message" className=" text-xs w-full focus:outline-none px-2  bg-inherit "/>
            </div>
        <div className="flex flex-row gap-x-2 text-sm">
        <ImAttachment/>
        <AiTwotoneCamera/>
        </div>
        </div>
        <div className="colour rounded-full w-5 h-5 flex items-center justify-center ">
        <button className="">
            <AiOutlineSend onClick={httpHandler} className="text-white text-xs "/>
            </button>
        </div>
    </div>
    </section>

    </>

)
}
export default Chat