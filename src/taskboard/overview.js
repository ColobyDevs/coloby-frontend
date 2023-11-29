import React from "react";
import { GoDotFill } from "react-icons/go";
import { BsThreeDotsVertical, BsEye } from "react-icons/bs";
import { TfiComment } from "react-icons/tfi";
import { GrAttachment } from "react-icons/gr";
import './overview.css'

export default function Overview(){

    const drag = (e)=>{
        e.preventDefault()
        e.dataTransfer.setData('text', e.target.id)
    }

    const allowDrop = (e)=>{
            e.preventDefault()
    }

    const drop = (e)=>{
            e.preventDefault()
            const data = e.dataTransfer.getData('text')
            e.target.appendChild(document.getElementById(data))
    }

    return(
        <section className="px-4 grid grid-cols-4  mt-4 gap-x-4 ">
            <article className="title-bg rounded-md h-fit flex flex-col space-y-6 px-4 py-4">
                <div className="flex flex-row justify-between items-center">
                    <div className="flex gap-x-2 flex-row items-center">
                        <GoDotFill className="text-xs text "/>
                        <h6 className="font-medium text-sm">To Do</h6>
                        <span className="count text-xs rounded-lg leading-4 h-4 w-6 text-center">2</span>
                        </div>
                    <BsThreeDotsVertical/>
                </div>
                
                    <button className="rounded-sm add_new w-full h-10 px-4 text-xs block mx-auto text-center ">
                        Add New Card
                    </button>
                   
                <section className=" overflow-auto carousel max-h-96 space-y-4 rounded-sm">
                <article className="rounded-md w-full px-2 h-48 bg-white shadow-lg">
                <div className="flex flex-row justify-between pt-4 items-center">
                <div className="task-title-bg h-10 w-20 rounded-md  flex items-center justify-center text-center ">
                    <span className="text-xs font-medium">UX/UI Stage</span>
                </div>
                <BsThreeDotsVertical/>

                </div>

                <div className="flex flex-col pt-3">
                <h1 className="text-sm">User Research</h1>
                <p className="task-desc leading-3 pt-1">Conduct a user reasearch for this
                project, and determine user pain points, motivations & expectations.
                </p>
                </div>
                <div className="border-t w-full mt-5 flex flex-row justify-between ">
                    <div>
                        <h1 className="text-xs">Asignee</h1>
                    </div>
                    <div className="grid grid-rows-2">
                        <span className="task-desc ml-auto">19/11/23</span>
                        <div className="text-xs mt-1 flex flex-row items-center gap-x-3">
                            <span className="flex flex-row items-center">
                        <BsEye/> 0
                            </span>
                            <span className="flex flex-row items-center">

                        <TfiComment/>0
                            </span>
                            <span className="flex flex-row items-center">
                        <GrAttachment/>0
                            </span>
                        </div>
                    </div>
                </div>
                </article>
                <article className="rounded-md w-full px-2 h-48 bg-white shadow-lg">
                <div className="flex flex-row justify-between pt-4 items-center">
                <div className="task-title-bg h-10 w-20 rounded-md  flex items-center justify-center text-center ">
                    <span className="text-xs font-medium">UX/UI Stage</span>
                </div>
                <BsThreeDotsVertical/>

                </div>

                <div className="flex flex-col pt-3">
                <h1 className="text-sm">User Research</h1>
                <p className="task-desc leading-3 pt-1">Conduct a user reasearch for this
                project, and determine user pain points, motivations & expectations.
                </p>
                </div>
                <div className="border-t w-full mt-5 flex flex-row justify-between ">
                    <div>
                        <h1 className="text-xs">Asignee</h1>
                    </div>
                    <div className="grid grid-rows-2">
                        <span className="task-desc ml-auto">19/11/23</span>
                        <div className="text-xs mt-1 flex flex-row items-center gap-x-3">
                            <span className="flex flex-row items-center">
                        <BsEye/> 0
                            </span>
                            <span className="flex flex-row items-center">

                        <TfiComment/>0
                            </span>
                            <span className="flex flex-row items-center">
                        <GrAttachment/>0
                            </span>
                        </div>
                    </div>
                </div>
                </article>
                <article className="rounded-md w-full px-2 h-48 bg-white shadow-lg">
                <div className="flex flex-row justify-between pt-4 items-center">
                <div className="task-title-bg h-10 w-20 rounded-md  flex items-center justify-center text-center ">
                    <span className="text-xs font-medium">UX/UI Stage</span>
                </div>
                <BsThreeDotsVertical/>

                </div>

                <div className="flex flex-col pt-3">
                <h1 className="text-sm">User Research</h1>
                <p className="task-desc leading-3 pt-1">Conduct a user reasearch for this
                project, and determine user pain points, motivations & expectations.
                </p>
                </div>
                <div className="border-t w-full mt-5 flex flex-row justify-between ">
                    <div>
                        <h1 className="text-xs">Asignee</h1>
                    </div>
                    <div className="grid grid-rows-2">
                        <span className="task-desc ml-auto">19/11/23</span>
                        <div className="text-xs mt-1 flex flex-row items-center gap-x-3">
                            <span className="flex flex-row items-center">
                        <BsEye/> 0
                            </span>
                            <span className="flex flex-row items-center">

                        <TfiComment/>0
                            </span>
                            <span className="flex flex-row items-center">
                        <GrAttachment/>0
                            </span>
                        </div>
                    </div>
                </div>
                </article>
                <article className="rounded-md w-full px-2 h-48 bg-white shadow-lg">
                <div className="flex flex-row justify-between pt-4 items-center">
                <div className="task-title-bg h-10 w-20 rounded-md  flex items-center justify-center text-center ">
                    <span className="text-xs font-medium">UX/UI Stage</span>
                </div>
                <BsThreeDotsVertical/>

                </div>

                <div className="flex flex-col pt-3">
                <h1 className="text-sm">User Research</h1>
                <p className="task-desc leading-3 pt-1">Conduct a user reasearch for this
                project, and determine user pain points, motivations & expectations.
                </p>
                </div>
                <div className="border-t w-full mt-5 flex flex-row justify-between ">
                    <div>
                        <h1 className="text-xs">Asignee</h1>
                    </div>
                    <div className="grid grid-rows-2">
                        <span className="task-desc ml-auto">19/11/23</span>
                        <div className="text-xs mt-1 flex flex-row items-center gap-x-3">
                            <span className="flex flex-row items-center">
                        <BsEye/> 0
                            </span>
                            <span className="flex flex-row items-center">

                        <TfiComment/>0
                            </span>
                            <span className="flex flex-row items-center">
                        <GrAttachment/>0
                            </span>
                        </div>
                    </div>
                </div>
                </article>

                </section>
            </article>
            <article className="title-bg  h-fit rounded-md flex flex-col space-y-6 px-4 py-4">
                <div className="flex flex-row justify-between items-center">
                    <div className="flex gap-x-2 flex-row items-center">
                        <GoDotFill className="text-orange-400 text-xs "/>
                        <h6 className="font-medium text-sm">In Progress</h6>
                        <span className="count text-xs rounded-lg leading-4 h-4 w-6 text-center">3</span>
                        </div>
                    <BsThreeDotsVertical/>
                </div>
                

                <section id="div1"  className=" overflow-auto carousel max-h-96 space-y-4 rounded-sm">
                <div className="rounded-md w-full px-2 h-44 bg-white"></div>
                <div className="rounded-md w-full px-2 h-44 bg-white"></div> 
                 <div className="rounded-md w-full px-2 h-44 bg-white"></div>
                <div className="rounded-md w-full px-2 h-44 bg-white"></div>

                </section>
            </article>

            <article draggable={true} className="title-bg  h-fit rounded-md flex flex-col space-y-6 px-4 py-4">
                <div className="flex flex-row justify-between items-center">
                    <div className="flex gap-x-2 flex-row items-center">
                        <GoDotFill className="text-green-400 text-xs "/>
                        <h6 className="font-medium text-sm">Completed</h6>
                        <span className="count text-xs rounded-lg leading-4 h-4 w-6 text-center">3</span>
                        </div>
                    <BsThreeDotsVertical/>
                </div>
                

                <section  className=" overflow-auto carousel max-h-96 space-y-4 rounded-sm">
                <article id="drag1"   className="rounded-md w-full px-2 h-48 bg-white shadow-lg">
                <div className="flex flex-row justify-between pt-4 items-center">
                <div className="task-title-bg h-10 w-20 rounded-md  flex items-center justify-center text-center ">
                    <span className="text-xs font-medium">UX/UI Stage</span>
                </div>
                <BsThreeDotsVertical/>

                </div>

                <div className="flex flex-col pt-3">
                <h1 className="text-sm">User Research</h1>
                <p className="task-desc leading-3 pt-1">Conduct a user reasearch for this
                project, and determine user pain points, motivations & expectations.
                </p>
                </div>
                <div className="border-t w-full mt-5 flex flex-row justify-between ">
                    <div>
                        <h1 className="text-xs">Asignee</h1>
                    </div>
                    <div className="grid grid-rows-2">
                        <span className="task-desc ml-auto">19/11/23</span>
                        <div className="text-xs mt-1 flex flex-row items-center gap-x-3">
                            <span className="flex flex-row gap-x-1 items-center">
                        <BsEye/> 0
                            </span>
                            <span className="flex flex-row gap-x-1 items-center">

                        <TfiComment/>0
                            </span>
                            <span className="flex flex-row gap-x-1 items-center">
                        <GrAttachment/>0
                            </span>
                        </div>
                    </div>
                </div>
                </article>
                </section>
            </article>
            <article></article>
            <article></article>
        </section>
    )
}