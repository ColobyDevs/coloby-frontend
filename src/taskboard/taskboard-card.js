import React, {useContext, useState, useEffect} from 'react'
import { Context } from '../context/context'
import { BsThreeDotsVertical, BsEye } from 'react-icons/bs'
import { TfiComment } from 'react-icons/tfi'
import { GrAttachment } from 'react-icons/gr'
import { MdDelete } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import './taskboard-card.css'
import FroalaEditorView from 'react-froala-wysiwyg/FroalaEditorView'

const TaskboardCard = (props) => {
  const {taskBoard, modal, auth, rooms} = useContext(Context)
  const {roomsList} = rooms
  const {setViewTaskModal} = modal
  const {setTaskInView, activeTasks, activeRoomId, taskInView} = taskBoard
  const [taskOptionsView, setTaskOptionsView] = useState(false)
  const {token} = auth



  const viewTaskHandler = ()=>{
      setTaskInView(activeTasks[props.id])
      console.log(taskInView);
      setViewTaskModal(true)
  }
 
  
  const taskOptionsViewHandler = ()=>{
    setTaskOptionsView(!taskOptionsView)
  }

  const deleteTask = async()=>{
    try{

      const response = await fetch(`https://coloby.onrender.com/api/v1/room/${roomsList[activeRoomId].slug}/tasks/${props.tasks.id}/`,{
        method: 'DELETE',
        body: JSON.stringify({
          room_slug: roomsList[activeRoomId].slug,
          id: props.tasks.id
        }),
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      })
      const responseData = await response.text()
      const responseJson = JSON.parse(responseData)
      console.log(responseJson);
    }catch(err){
      console.log(err);
    }
  }

  return (
    <article  id={`drag${props.tasks.id}`} draggable className="rounded-md grid grid-rows-3 w-full px-2 h-48 bg-white shadow-lg draggable">
            <div className="flex flex-row justify-between pt-4 items-center w-full">
              <div className="task-title-bg h-10 w-20 rounded-md  flex items-center justify-center text-center ">
                <span className="text-xs font-medium"></span>
              </div>
              <article className='flex flex-row items-center justify-end ml-auto'>
             
              <div>
                <div className='flex flex-row items-center'>
              <div  className={` ${taskOptionsView ? 'visible block' : 'hidden'} space-y-1 border border-solid  sticky  z-20 mr-[-10px] mt-20 justify-center pl-1 bg-white rounded-sm shadow-md h-16  w-20 text-center flex flex-col  text-[10px]`}>
                <div className='flex flex-row text-start  items-center space-x-1 justify-start '>
                <FaEye className='text-start'/>
                  <h2 className='cursor-pointer' onClick={viewTaskHandler}>View Task</h2>
                  </div>
                 <div className='flex flex-row text-start items-center space-x-1 justify-start'>
                  <MdDelete className='text-start'/>
                <h2 onClick={deleteTask}>Delete Task</h2>
                  </div> 
              </div>
              <BsThreeDotsVertical className='cursor-pointer' onClick={taskOptionsViewHandler}/>
              </div>
              </div>
              
            </article>
            </div>
            <div className="flex flex-col pt-3">
              <h1 className="text-sm">{props.tasks.title}</h1>
              <div className="task-desc leading-3 pt-1 desc overflow-hidden">
                <FroalaEditorView model={props.tasks.description}/>
              </div>
            </div>
            <div className="border-t w-full mt-5 flex flex-row justify-between ">
              <div>
                <h1 className="text-xs">Asignee</h1>
              </div>
              <div className="grid grid-rows-2">
                <span className="task-desc ml-auto">{props.tasks.due_date}</span>
                <div className="text-xs mt-1 flex flex-row items-center gap-x-3">
                  <span className="flex flex-row items-center">
                    <BsEye /> 0
                  </span>
                  <span className="flex flex-row items-center">
                    <TfiComment />0
                  </span>
                  <span className="flex flex-row items-center">
                    <GrAttachment />0
                  </span>
                </div>
              </div>
            </div>
          </article>
  )
}

export default TaskboardCard