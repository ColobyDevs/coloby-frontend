import React, {useEffect, useContext} from 'react'
import { Context } from '../context/context'
import { IoIosNotificationsOutline } from 'react-icons/io'
import { MdSearch } from 'react-icons/md'
import avatar from '../img/avatar.jpg'
import { GoDotFill } from "react-icons/go";
import NotifCard from './notif-card'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const Notifications = () => {
    const {notifications} = useContext(Context)
    const {notifs} = notifications

    

    useEffect(() => {
        localStorage.setItem("lastVisitedPage", window.location.pathname);
      }, []);
  
  
     
      
  return (
    <main className='ml-72 h-screen bg-gray-100'>

    <section className="bg-white flex flex-row items-center justify-between  h-16 border w-full px-4">
    <div className="w-1/2 flex flex-row h-1/2 items-center border border-solid px-2 rounded-md">
      <MdSearch className="text-lg border-r-0  h-full rounded-l-md" />
      <input
        placeholder={`Search...`}
        className="px-2 h-full w-10/12 rounded-r-md focus:outline-none"
      />
    </div>

    <div className="grid grid-cols-2 space-x-2">
      <div className="h-10 w-10 grid items-center justify-center bg-gray-100 border rounded-md">
        <IoIosNotificationsOutline className="text-3xl" />
        <GoDotFill className='absolute ml-6 mb-4 text-red-400 animate-pulse'/>
      </div>

      <div className="h-10 w-10 grid items-center justify-center border rounded-md">
        <img className=" w-6 h-6" alt="user" src={avatar} />
      </div>
    </div>
  </section>
  <h2 className="mt-2 px-4 text-lg font-semibold">Notifications</h2>
  <article className='mt-2 bg-[#EBEBEB] w-full h-10 text-xs flex items-end space-x-4 px-4 pb-1' >
        <div className='flex flex-row space-x-1'>
            <span>All</span>
            <span className='bg-red-400 rounded-sm w-3 text-center text-white'>{notifs.length}</span>
        </div>
        <div className='flex flex-row space-x-1'>
            <span>Team</span>
            <span className='bg-red-400 rounded-sm w-3 text-center text-white'>4</span>
        </div>
    </article>
    <section className='flex flex-col mt-2 space-y-1'>
       {
        notifs.length >= 1 ?
         notifs.map((notif, id)=>{
           
           return  <NotifCard key={notif.id} id={notif.id} notif={notif}/>
          })
           :
          <Skeleton count={11}  height={'2.5rem'}/>
        }
        
    </section>  
  </main>

  )
}

export default Notifications