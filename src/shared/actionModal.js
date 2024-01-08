import React, {useContext} from "react";
import { Context } from "../context/context";


export default function ActionModal(){
    const {modal, auth} = useContext(Context)
    const { showActionModal, setShowActionModal} = modal
     const {logout} = auth
    const handleModal = ()=>{
        setShowActionModal(false)
    }
    if(showActionModal){
        return(<>
    <section className="backdrop  fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center z-40">
        <div className="flex flex-col justify-evenly px-6 rounded-md h-48 w-96 bg-white">
        <h1 className="font-bold">Sign Out?</h1>
        <span className="text-sm">Are you sure you want to sign out?</span>
        <div className="flex flex-row ml-auto justify-between gap-x-4 w-1/2">
            <button className="border-red-400 border-2 text-red-400 w-1/2 rounded-md" onClick={handleModal}>No</button>
            <button className="border w-1/2 rounded-md" onClick={logout}>Yes</button>
        </div>
        </div>
    </section>
    
    </>)
        }
}