import React, {useContext} from "react";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { MdErrorOutline } from "react-icons/md";
import { Context } from "../context/context";
import './modal.css'

export default function Modal(){
    const {modal} = useContext(Context)
    const {errMsg, showModal, setShowModal} = modal
    const handleModal = ()=>{
        setShowModal(false)
    }
    if(showModal){

        return (<section className="backdrop  fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center z-50">
            <div className="h-56 w-64 shadow-lg rounded-md border-red-500 border-2 bg-white grid grid-flow-row justify-center items-center ">
                <MdErrorOutline className="text-red-500 mx-auto text-3xl "/>
                <p className="px-2 text-center text-sm font-medium">{errMsg}</p>
                <button onClick={handleModal} className="close-btn mx-auto border text h-8 w-20 rounded-md">Close</button>
            </div>
    </section>)
}
}
