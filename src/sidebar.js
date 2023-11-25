import React, { useState, useContext } from "react";
import { Context } from "./context/context";
import ColobyLogo from './assets/ColobyLogo.png'
import { Link } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { RiDiscussLine, RiArrowDownSLine, RiOrganizationChart } from "react-icons/ri";
import { IoIosSettings, IoIosHelpCircle, IoIosLogOut, IoIosNotificationsOutline, IoIosStats } from "react-icons/io"



const Sidebar = () => {
    const {setCreateChModal, logout, userId} = useContext(Context)
    const createChHandler = ()=>{
        setCreateChModal(true)
    }
    
    const [show, setShow] = useState(false)

    const showHandler = () => {
        setShow(!show)
    }

    return (<>

        <main className="fixed h-screen hidden space-y-10 py-4 lg:flex lg:flex-col border w-72 border-l">
            <div  className="ml-16">
                <img src={ColobyLogo} alt='coloby' className="w-20 h-10"/>
                
            </div>

            <div className="flex flex-row items-center text-xl ml-16 font-bold">
                <h1>
                    Swift Limited
                </h1> <span className="text-xl">+</span>
            </div>

            <section className={`flex flex-col space-y-5  h-64 justify-center w-full items-center mx-auto mt-4 `}>
                <article className="flex flex-row w-1/2 mx-auto space-x-4 h-4 items-center">
                    <MdDashboard className="" />
                    <Link to={`/dashboard/${userId}`}>
                    <h2>Dashboard</h2>
                    </Link>
                </article>

                <article className="flex flex-col space-y-5 w-1/2 mx-auto h-5/6">
                    <div className="flex flex-col row-span-1">
                        <div className="flex flex-row space-x-4 items-center">
                            <RiOrganizationChart />
                            <Link to='channels'>
                            <h2>Channels</h2>
                            </Link>
                            <RiArrowDownSLine className="ml-4 cursor-pointer" onClick={showHandler} />
                        </div>
                        <div className={`grid grid-rows-3  items-center ml-8 transition-all delay-400 ease-in-out ${show ? 'h-16' : 'h-0'}`}>
                            <h1 className={`${show ? 'visible' : 'hidden'} text-xs`}>#newJam</h1>
                            <h1 className={`${show ? 'visible' : 'hidden'} text-xs`}>#ncoloby</h1>
                            <h1 className={`${show ? 'visible' : 'hidden'} text-sm cursor-pointer`} onClick={createChHandler}>New channel +</h1>
                        </div>
                    </div>
                    <div className={`flex flex-row  items-center space-x-3`}>
                        <IoIosNotificationsOutline />
                        <h2>Notifications</h2>
                    </div>
                    <div className="flex flex-row items-center space-x-4 ">
                        <IoIosStats />
                        <Link to='/taskboard'>
                        <h2>Taskboard</h2>
                        </Link>
                    </div>
                    <div className="flex flex-row items-center space-x-4 ">
                        <RiDiscussLine />
                        <h2>Messages</h2>
                    </div>
                    
                        <div className=" flex flex-row items-center pt-1 space-x-4 border-t-2">
                            <IoIosSettings className="" />
                            <h2>Settings</h2>
                        </div>
                        <div className="flex flex-row items-center space-x-4 ">
                            <IoIosHelpCircle />
                            <h2>Help</h2>
                        </div>
                        <div className="flex flex-col  w-full  align-center text-center space-y-2">
                            <div className="flex flex-row items-center space-x-4 cursor-pointer" onClick={logout}>
                                <IoIosLogOut className="" />
                                <h2>Logout</h2>
                            </div>

                        </div>
                  
                </article>
            </section>


        </main>
    </>)

}
export default Sidebar