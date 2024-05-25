import React, {useContext} from "react";
import { IoIosStarOutline } from "react-icons/io";
import { GoDotFill } from "react-icons/go";
import { Context } from "../context/context";

export default function Assigned(){
    const { taskboardReducer } = useContext(Context);
    // const { state } = taskboardReducer;
    // const stateKeys = Object.keys(state)
  
    // Object.values(state).map((val, i)=>{
    //      if(val.isActive == true){
    //         console.log(stateKeys[i]);
    //         localStorage.setItem('lastTaskState', JSON.stringify(stateKeys[i].toUpperCase()))
    //      }
    // })
    return(<section>
        <div className="flex flex-row items-center border-t border-b h-10 justify-between px-4 text-sm">
            <div className="flex flex-row gap-x-2 items-center">
        <input type="checkbox" className="rounded-none"/>
        <IoIosStarOutline className="text-lg"/>
            </div>
        <h1>Noah</h1>
        <div className="flex flex-row items-center gap-x-3">
            <h2 className="font-medium">User Research</h2>
            <div className="flex flex-row items-center gap-x-1">

            <GoDotFill className="text-xs"/>
            <span>Conduct a user reasearch for this
                project, and determine user pain points with...</span>
            </div>
        </div>
        <span>10:03 AM</span>
        </div>
        <div className="flex flex-row items-center border-t border-b h-10 justify-between px-4 text-sm">
            <div className="flex flex-row gap-x-2 items-center">
        <input type="checkbox" className="rounded-none"/>
        <IoIosStarOutline className="text-lg"/>
            </div>
        <h1>Noah</h1>
        <div className="flex flex-row items-center gap-x-3">
            <h2 className="font-medium">User Research</h2>
            <div className="flex flex-row items-center gap-x-1">

            <GoDotFill className="text-xs"/>
            <span>Conduct a user reasearch for this
                project, and determine user pain points with...</span>
            </div>
        </div>
        <span>10:03 AM</span>
        </div>
        <div className="flex flex-row items-center border-t border-b h-10 justify-between px-4 text-sm">
            <div className="flex flex-row gap-x-2 items-center">
        <input type="checkbox" className="rounded-none"/>
        <IoIosStarOutline className="text-lg"/>
            </div>
        <h1>Noah</h1>
        <div className="flex flex-row items-center gap-x-3">
            <h2 className="font-medium">User Research</h2>
            <div className="flex flex-row items-center gap-x-1">

            <GoDotFill className="text-xs"/>
            <span>Conduct a user reasearch for this
                project, and determine user pain points with...</span>
            </div>
        </div>
        <span>10:03 AM</span>
        </div>
        <div className="flex flex-row items-center border-t border-b h-10 justify-between px-4 text-sm">
            <div className="flex flex-row gap-x-2 items-center">
        <input type="checkbox" className="rounded-none"/>
        <IoIosStarOutline className="text-lg"/>
            </div>
        <h1>Noah</h1>
        <div className="flex flex-row items-center gap-x-3">
            <h2 className="font-medium">User Research</h2>
            <div className="flex flex-row items-center gap-x-1">

            <GoDotFill className="text-xs"/>
            <span>Conduct a user reasearch for this
                project, and determine user pain points with...</span>
            </div>
        </div>
        <span>10:03 AM</span>
        </div>
        <div className="flex flex-row items-center border-t border-b h-10 justify-between px-4 text-sm">
            <div className="flex flex-row gap-x-2 items-center">
        <input type="checkbox" className="rounded-none"/>
        <IoIosStarOutline className="text-lg"/>
            </div>
        <h1>Noah</h1>
        <div className="flex flex-row items-center gap-x-3">
            <h2 className="font-medium">User Research</h2>
            <div className="flex flex-row items-center gap-x-1">

            <GoDotFill className="text-xs"/>
            <span>Conduct a user reasearch for this
                project, and determine user pain points with...</span>
            </div>
        </div>
        <span>10:03 AM</span>
        </div>
        <div className="flex flex-row items-center border-t border-b h-10 justify-between px-4 text-sm">
            <div className="flex flex-row gap-x-2 items-center">
        <input type="checkbox" className="rounded-none"/>
        <IoIosStarOutline className="text-lg"/>
            </div>
        <h1>Noah</h1>
        <div className="flex flex-row items-center gap-x-3">
            <h2 className="font-medium">User Research</h2>
            <div className="flex flex-row items-center gap-x-1">

            <GoDotFill className="text-xs"/>
            <span>Conduct a user reasearch for this
                project, and determine user pain points with...</span>
            </div>
        </div>
        <span>10:03 AM</span>
        </div>
    </section>)
}