import React, {useRef} from "react";
import { MdSearch, MdExplore } from "react-icons/md";
import { IoIosNotificationsOutline } from "react-icons/io";
import ChannelCards from "./channel-cards";
import './dashboard.css'
import avatar from '../img/avatar.jpg'
import mock from '../img/mock.png'
import {RiAddLine, RiBallPenLine, RiArrowLeftSLine, RiArrowRightSLine} from "react-icons/ri";
const Dashboard = ()=>{
    const carouselRef = useRef()
    console.log(carouselRef.element)
    const scroll = (type)=>{
        const carousel = document.querySelector(".carousel")
        const card = carousel.querySelector(".card").offsetWidth + 24
        console.log(card)
        carousel.scrollLeft += type === 'left' ? -card : card;
    }
return(
    <section className="h-screen ml-72">
        <article className="flex flex-row items-center  h-20 border w-full px-4">
            <div className="w-full flex flex-row h-1/2 items-center">
            <input placeholder={`Search...`} className="px-2 h-full w-1/2 border-2 rounded-lg"/>
            <MdSearch className="text-lg"/>
            </div>

            <div className="grid grid-cols-2 space-x-2">

            <div className="h-10 w-10 grid items-center justify-center border rounded-md">

                <IoIosNotificationsOutline className="text-3xl"/>
            </div>
            
            <div className="h-10 w-10 grid items-center justify-center border rounded-md">

                <img className=" w-6 h-6" src={avatar}/>
            </div>
            </div>
        </article>
            <article className="bg-gray-100 h-5/6">
                <div className="grid grid-cols-2 w-64 space-x-4 pl-4 pt-4">
                    <button className="justify-center border-blue-400 focus:outline-none space-x-2 border rounded-lg h-10 w-32 flex items-center flex-row">
                       <RiAddLine className=""/> New Channel
                    </button>
                    <button className="justify-center space-x-2 bg-blue-400 text-white border rounded-lg h-10 w-32 flex items-center flex-row">
                     <RiBallPenLine className="mr-1"/>   Workspace
                        </button>
                </div>
                    <div className="flex flex-row items-center">
                <h2 className="mt-4 px-4 text-xl font-semibold">Your Channels</h2>
                <div className="ml-auto grid grid-cols-2 mt-4 text-4xl px-2 cursor-pointer">
                <RiArrowLeftSLine onClick={()=> scroll('left')}/>
                <RiArrowRightSLine onClick={()=> scroll('right')}/>
                </div>

                    </div>
                <article ref={carouselRef} className=" carousel mt-2 px-4 h-48  w-full grid grid-flow-col overflow-auto space-x-6 scroll-ml-6 scroll-smooth">
                <ChannelCards/>
                <ChannelCards/>
                <ChannelCards/>
                <ChannelCards/>
                <ChannelCards/>
                <ChannelCards/>
                <ChannelCards/>
                <ChannelCards/>
                </article>
            </article>
    </section>
)
}

export default Dashboard