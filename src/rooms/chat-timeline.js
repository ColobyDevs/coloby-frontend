import React from "react";
import {HiMiniXMark} from 'react-icons/hi2'
import avatar from '../img/avatar.jpg'



const ChatTimeline = ()=>{
    
       
 
  
return(
    <>
    <section className="rounded-md  chat-con relative mt-2 h-64 w-56 mx-auto bg-gray-600 overflow-x-hidden overflow-scroll scroll-smooth">
    <div className="flex flex-row text-white text-sm justify-between px-4 items-center mt-2">
     <h1>Chats</h1>
     <HiMiniXMark/>
    </div>
    <div className="flex justify-center">
    <input placeholder="search" className="rounded-xl w-48 mt-2 h-6 bg-gray-400"/>
    </div>
    <article className="grid grid-rows gap-y-1">

    <div className="flex flex-row px-4 mt-2">
    <div className="relative flex flex-row">
        <img src={avatar} alt="profile" className="w-8 h-8 rounded-full"/>
        <span className="absolute rounded-full w-1.5 h-1.5 ml-6 mt-6 bg-green-300 text-sm"></span>
        </div>
        <div className="ml-2 text-white flex flex-col">
            <h2 className="text-xs font-thin">Mayhoral</h2>
            <div className="flex gap-x-2">
            <span className="field-text">Online</span>
            <span className="field-text">7:15 am</span>
            </div>
        </div>
        
    </div>
    <div className="flex flex-row px-4 mt-2">
        <div className="relative flex flex-row">
        <img src={avatar}  alt="profile" className="w-8 h-8 rounded-full"/>
        <span className="absolute rounded-full w-1.5 h-1.5 ml-6 mt-6 bg-green-300 text-sm"></span>
        </div>
        <div className="ml-2 text-white flex flex-col">
            <h2 className="text-xs font-thin">Noah</h2>
            <div className="flex gap-x-2">
            <span className="field-text">Online</span>
            <span className="field-text">7:15 am</span>
            </div>
        </div>
        
    </div>
    <div className="flex flex-row px-4 mt-2">
    <div className="relative flex flex-row">
        <img src={avatar}  alt="profile" className="w-8 h-8 rounded-full"/>
        <span className="absolute rounded-full w-1.5 h-1.5 ml-6 mt-6 bg-green-300 text-sm"></span>
        </div>
        <div className="ml-2 text-white flex flex-col">
            <h2 className="text-xs font-thin">Leno</h2>
            <div className="flex gap-x-2">
            <span className="field-text">Online</span>
            <span className="field-text">7:15 am</span>
            </div>
        </div>
        
    </div>
    <div className="flex flex-row px-4 mt-2">
    <div className="relative flex flex-row">
        <img src={avatar}  alt="profile" className="w-8 h-8 rounded-full"/>
        <span className="absolute rounded-full w-1.5 h-1.5 ml-6 mt-6 bg-green-300 text-sm"></span>
        </div>
        <div className="ml-2 text-white flex flex-col">
            <h2 className="text-xs font-thin">Ademola</h2>
            <div className="flex gap-x-2">
            <span className="field-text">Online</span>
            <span className="field-text">7:15 am</span>
            </div>
        </div>
        
    </div>
    </article>
    </section>
    </>

)
}
export default ChatTimeline