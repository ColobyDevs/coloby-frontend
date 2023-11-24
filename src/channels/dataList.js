import React, {useContext, useState} from 'react';
import { chatData } from './chatData'
import ChatDataItem from './chatDataItem'
import { Context } from '../context/context';




export default function ChatDataList(){

const {roomMsgs} = useContext(Context)
return(<>
{roomMsgs.map((obj)=>{

  
  let msgTime = ''
  if(obj.created_at){
    const date = new Date(obj.created_at);
    
    // Convert to local tim
    const localTime = new Intl.DateTimeFormat('en-US', {
      // year: 'numeric',
      // month: 'numeric',
      // day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      // second: 'numeric',
      timeZone: 'UTC' 
    }).format(date);

  msgTime = localTime
  }
  
  {if (obj) return <ChatDataItem type ={obj.type} time= {msgTime} sender = {obj.user} key={obj.created_at} message= {obj.message} />}
})}

</>)
}


