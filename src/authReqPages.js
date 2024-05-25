import React, {useContext} from 'react'
import {Routes, Route} from 'react-router-dom'
import { Context } from './context/context';
import Sidebar from './sidebar'
import Dashboard from './dashboard/dashboard';
import Channels from './rooms/channels';
import Chat from './rooms/chats';
import Profile from './profile/profile';
import TaskBoard from './taskboard/taskboard';


export default function authReqPages (){

    return(<>
    <Sidebar/>
    <Routes>
    <Route path='/dashboard' element = {<Dashboard/>}/>
    <Route path='/profile' element = {<Profile/>}/>
    <Route path='/rooms' element = {<Channels/>}/>
    <Route path='/chat' element = {<Chat/>}/>
    <Route path='/taskboard/:section' element = {<TaskBoard/>}/>
    </Routes>
    </>)
}