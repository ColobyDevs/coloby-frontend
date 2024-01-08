import React from "react";
import mock from '../img/mock.png'
import { MdExplore } from "react-icons/md";

const ChannelCards = (props)=>{
return(
    <>
    <div className="card">
                    <div ref={props.class} className={` flex flex-row justify-center space-x-4 pt-2`}>
                        <MdExplore/> <p className="text-xs">Explore this channel story</p>
                    </div>
                    <div className="row-span-3 border-b mx-auto  w-full">
                        <img src={mock} className="h-24 mx-auto border"/>
                        </div>
                        <div className="border">
                        <p className="text-xs px-4">
                            Quick start- Getting around informa <br/>
                            ... 
                            </p>
                        </div>
                    </div>
    </>
)
}
export default ChannelCards