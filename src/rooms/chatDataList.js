import React, {useContext} from 'react';
import ChatDataItem from './chatDataItem'
import { Context } from '../context/context';




export default function ChatDataList(){

const {chat} = useContext(Context)
const {roomMsgs} =chat
return(<>
{roomMsgs.map((obj, i)=>{
 
  let msgTime = ''
  if(obj.created_at){
    const date = new Date(obj.created_at);
    
    // Convert to local time
    const localTime = new Intl.DateTimeFormat('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      timeZone: 'UTC' 
    }).format(date);
    msgTime = localTime
    
  
  }
  let previous = i - 1
  let current = i

  let previousFormatDate = ''
  let currentFormatDate = ''

  if(previous > 0){
    const previousDate = new Date (roomMsgs[previous].created_at)
    const previousLocalTime = new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      timeZone: 'UTC' 
    }).format(previousDate);

    previousFormatDate = previousLocalTime
    const currentDate = new Date (roomMsgs[current].created_at)

    const currentLocalTime = new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      timeZone: 'UTC' 
    }).format(currentDate);
    currentFormatDate = currentLocalTime
  }


if(previousFormatDate !== currentFormatDate){
roomMsgs[i].date = currentFormatDate
}

  
   return <ChatDataItem time= {msgTime} date = {roomMsgs[i].date}  sender = {obj.user} key={obj.created_at} message= {obj.message} />
})}

</>)
}


