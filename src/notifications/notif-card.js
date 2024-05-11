import React from 'react'
import { BsThreeDotsVertical } from 'react-icons/bs'

const NotifCard = (props) => {
  return (
    <article className={`flex  ${props.notif.is_read === false && 'border-l-2 border-red-400 border-solid'} flex-row justify-between bg-white px-4 text-xs h-10 items-center `}>
            <div className='flex flex-row items-center space-x-2'>
            <h2>{props.notif.message}</h2>
            </div>
            <div className='flex flex-row items-center space-x-2'>
                <span>{props.notif.timestamp}</span>
                <BsThreeDotsVertical/>
            </div>
        </article>
  )
}

export default NotifCard