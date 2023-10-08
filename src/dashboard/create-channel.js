import React, {useState, useContext} from "react";
import { Context } from "../context/context";
import {HiMiniXMark} from 'react-icons/hi2'
import './create-channel.css'

const CreateChannel = ()=>{
    const {setCreateChModal, createChModal} = useContext(Context)
    const [toggle, setToggle] = useState(false)
    const channelType = toggle ? 'Public' : 'Private'
    const channelInfo = toggle ? 'Anyone in your workspace can view and join this channel' : 'Only those you allow can see and join this channel'

    const toggleHandler = ()=>{
        setToggle(!toggle)
    }
    const createChHandler = ()=>{
        setCreateChModal(false)
    }
    if(createChModal) {

    return(
        <main className="fixed top-0 bottom-0 right-0 left-0 flex z-20 items-center justify-center modal">
                <section className="bg-white w-1/2 h-5/6 rounded-md grid grid-rows-6 ">
                <article className="flex flex-row justify-between px-10 grow border border-b items-center">
                <div className="">
                <h1 className="font-medium">Create a Channel</h1>
                <p className="text-xs">Channels are where your members communicate, sharing thoughts and files together</p>
                </div>
                    <HiMiniXMark className="text-3xl cursor-pointer" onClick={createChHandler}/>

                </article>
                <article className="flex flex-row items-center span-col-1">
                    <div className=" px-10">
                <label className="switch">
                <input type="checkbox"  placeholder=""/>
                <span className={`slider round ${toggle ? 'text-end' : 'text-start'} pt-1.5 text-white  text-xs px-3`} onClick={toggleHandler}>{channelType}</span>
                </label>
                    </div>
                    <p className="text-xs mr-3">{channelInfo}</p>
                 </article>
       

                    <article className="flex flex-col px-10">
                    <div>
                        <label className="label text-xs">Name</label>
                        <div className="flex flex-col">
                        <input className="input text-xs" placeholder="# e.g Leads"/>
                        <span className="field-text text-gray-400"> Name must be lowercase</span>
                        </div>
                    </div>
                    </article>
                    <article className="flex flex-col px-10">
                    <div className="flex flex-col">
                        <label className="label text-xs">Purpose (optional)</label>
                        <div className="flex flex-col">
                        <input className="input text-xs" placeholder="# e.g Leads"/>
                        <span className="field-text text-gray-400">What's this channel about?</span>
                        </div>
                    </div>
                    </article>
                    <article className="flex flex-col px-10 space-y-2">
                    <div className="flex flex-col justify-center">
                        <label className="label text-xs">Send invites to : (optional)</label>
                        <div className="flex flex-col">
                        <input className="input text-xs" placeholder="# e.g Leads"/>
                        <span className="field-text text-gray-400">Select up to 1000 people to add to this channel</span>
                        </div>
                    </div>
                    </article>
                    <article className="flex flex-row justify-end px-10 space-x-3 items-center">
                        <div className="text-xs text-gray-300  w-24 h-8 grid justify-center rounded-md border">
                            <button>Cancel</button>
                        </div>
                        <div className="colour text-xs text-white  w-24 h-8 grid justify-center rounded-md">
                            <button>Create channel</button>
                        </div>
                    </article>
                 
                    <article>
                    
                    </article>
                   
                </section>
        </main>
    )
} else {
    return null
}

}

export default CreateChannel

// position: fixed;
// top: 0;
// bottom: 0;
// right: 0;
// left: 0;
// display: flex;
// z-index: 20;
// align-items: center;
// justify-content: center;
// background: rgba(0, 0, 0, 0.5);