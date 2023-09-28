import React, { useState } from "react";
import { MdDashboard, MdOpenWith } from "react-icons/md";
import { RiDiscussLine, RiArrowDownSLine } from "react-icons/ri";
import { IoIosSettings, IoIosHelpCircle, IoIosLogOut, IoIosNotificationsOutline, IoIosStats } from "react-icons/io"



const Sidebar = () => {
    const [show, setShow] = useState(false)

    const showHandler = () => {
        setShow(!show)
    }

    return (<>

        <main className="fixed h-screen hidden items-center space-y-10 py-4 lg:flex lg:flex-col border w-72 border-l">
            <div>
                COLOBY
            </div>

            <div className="flex flex-row items-center text-xl font-bold">
                <h1>
                    Swift Limited
                </h1> <span className="text-xl">+</span>
            </div>

            <section className={`flex flex-col space-y-5  h-64 justify-center w-full items-center mx-auto mt-4 `}>
                <article className="flex flex-row w-1/2 mx-auto space-x-4 h-4 items-center">
                    <MdDashboard className="" />
                    <h2>Dashboard</h2>
                </article>

                <article className="flex flex-col space-y-5 w-1/2 mx-auto h-5/6">
                    <div className="flex flex-col row-span-1">
                        <div className="flex flex-row space-x-4 items-center">
                            <MdOpenWith />
                            <h2>Channels</h2>
                            <RiArrowDownSLine className="ml-4 cursor-pointer" onClick={showHandler} />
                        </div>
                        <div className={`grid grid-rows-3  items-center ml-8 transition-all delay-400 ease-in-out ${show ? 'h-16' : 'h-0'}`}>
                            <h1 className={`${show ? 'visible' : 'hidden'} text-xs`}>#newJam</h1>
                            <h1 className={`${show ? 'visible' : 'hidden'} text-xs`}>#ncoloby</h1>
                            <h1 className={`${show ? 'visible' : 'hidden'} text-sm`}>New channel +</h1>
                        </div>
                    </div>
                    <div className={`flex flex-row  items-center space-x-3`}>
                        <IoIosNotificationsOutline />
                        <h2>Notifications</h2>
                    </div>
                    <div className="flex flex-row items-center space-x-4 ">
                        <IoIosStats />
                        <h2>Analytics</h2>
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
                            <div className="flex flex-row items-center space-x-4">
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