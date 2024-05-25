import {HiMiniUser} from 'react-icons/hi2'
import {HiMiniXMark} from 'react-icons/hi2'
import mock from '../img/mock.png'
import Chat from "./chats";
import ChatTimeline from "./chat-timeline";
import './channels.css';


export default function NoCodeChannel(){

    return(<>
      <section className="flex flex-row w-full space-x-8">

<section className="w-4/5 ">
<article className="ml-4 mt-4 border-2 rounded-md h-64 w-full flex flex-col">
<div className="h-8 px-2 border-b w-full flex flex-row items-center">
    <h1 className="text-sm">Focus Board</h1>
</div>
<div className="px-2 mt-4 flex flex-row items-center justify-between space-x-2">
    <div className="h-44 w-44 border">
    <img className="w-full h-full" src={mock}/>
    </div>
    
    <div className="w-3/5 text-center scroll-m-10">
        <h2>Description</h2>
        <p className="field-text text-start overflow-scroll h-40 overflow-y-auto">Lorem ipsum dolor sit amet consectetur Eget et quis 
    tellus urna lorem vestibulum scelerisque porttitor. 

    Dictum vitae amet bibendum vivamusrhoncus velit elementum. <br/>Erat ut mauris eget sagittis
    massa in vulputate egestas elit. In adipiscing at iaculis  <br/> vulputate congue lobortis pellentesque blandit facilisis.
    Lorem ipsum dolor sit amet consectetur. Eget et quis tellus 

    vulputate congue lobortis pellentesque blandit facilisis. <br/>  porttitor. Dictum vitae amet bibendum vivamus rhoncus velit
    elementum. Erat ut mauris eget sagittis massa in vulputate egestas elit. <br/>  In adipiscing at iaculis vulputate congue lobortis pellentesque
    elementum. Erat ut mauris eget sagittis massa in vulputate  
    
    elementum. Erat ut mauris eget sagittis massa in vulputate
    elementum. Erat ut mauris eget sagittis massa in vulputate  
    elementum. Erat ut mauris eget sagittis massa in vulputate egestas elit. <br/>  In adipiscing at iaculis vulputate congue lobortis pellentesque
    elementum. Erat ut mauris eget sagittis massa in vulputate  
    
    elementum. Erat ut mauris eget sagittis massa in vulputate
    elementum. Erat ut mauris eget sagittis massa in vulputate  
    
</p>
    </div>
    </div>
    
</article>
<div className="px-4 ">
<button className=" mt-4  h-8 w-28 text-xs rounded-md text-white flex flex-row  items-center gap-x-2  justify-center text border-2"><HiMiniUser/>Add people</button>
</div>
<div className="mt-4 text-sm px-4">
    <span>Comments</span>
</div>
<article className="px-4 flex flex-row mt-2">
    <span className="bg-pink-400 text-white rounded-full h-6 w-6 text-center">O</span>
    <div className="ml-2">
        <span className="text-xs font-medium">Obichi</span>
        <p className="field-text">I feel this is going great</p>
        </div>

</article>
<article className=" px-4 mt-5" >
    <div className="flex flex-row bg-indigo-800 text-white text-xs h-8  rounded-tr-xl rounded-tl-xl px-4   w-3/4 items-center justify-between">
        <p>Send a quick message to let your coworkers know how your thoughts.</p>
        <HiMiniXMark className="text-base"/>
        </div>
</article>
</section>

<div className="flex flex-col ml-auto justify-center pr-3">
    <Chat/>
    <ChatTimeline/>
</div>
</section>
    </>)
}