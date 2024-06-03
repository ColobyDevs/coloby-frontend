import React, { useContext, useState, useRef } from "react";
import { Context } from "../context/context";
import { BsThreeDotsVertical, BsEye } from "react-icons/bs";
import { TfiComment } from "react-icons/tfi";
import { GrAttachment } from "react-icons/gr";
import { MdDelete } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import "./taskboard-card.css";
import { toast } from "sonner";

const TaskboardCard = (props) => {
  const { taskBoard, modal, auth, rooms, loader } = useContext(Context);
  const { roomsList } = rooms;
  const {setIsLoading} = loader
  const { setViewTaskModal } = modal;
  const { setTaskInView, activeTasks, activeRoomId, setActiveTasks } =
    taskBoard;
  const [taskOptionsView, setTaskOptionsView] = useState(false);
  const { token } = auth;

  const dragRef = useRef();

  const viewTaskHandler = () => {
    setTaskInView(activeTasks[props.id]);

    setViewTaskModal(true);
  };


  const taskOptionsViewHandler = () => {
    setTaskOptionsView(!taskOptionsView);
  };


  const deleteTask = async () => {
      setIsLoading(true)
    try {
      const response = await fetch(
        `https://coloby.onrender.com/api/v1/room/${roomsList[activeRoomId].slug}/tasks/${props.task.id}/`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
          },
        }
      );
      const responseData = await response.json();
      
      if(responseData.message === 'task deleted'){
          setActiveTasks((prevTasks) =>
          prevTasks.filter((task) => task.id !== props.task.id)
          );
          setIsLoading(false)
          toast.success("Task Succesfully Deleted!");
      }
    } catch(err) {
      setIsLoading(false)
      console.log(err);
    }
  };

  const handleDragStart = (e, taskId) => {
    props.setCurrEl(taskId);
         const pendingZone = document.getElementById("pendingZone");
     const undoneZone = document.getElementById("undoneZone");
    const  completedZone = document.getElementById("doneZone");
    const sourceZone = e.target.closest(".dropzone");
    sourceZone?.classList.add("source-zone");
    if (!pendingZone.classList.contains("source-zone")) {
              handleShowHover(".pendingZoneHover");
            }
            if (!undoneZone.classList.contains("source-zone")) {
              handleShowHover(".undoneZoneHover");
            }
            if (!completedZone?.classList.contains("source-zone")) {
              handleShowHover(".completedZoneHover");
            }
  };
     const handleShowHover = (zoneType) => {
      const zoneHover = document.querySelector(zoneType);
      zoneHover?.classList.remove("hide");
      zoneHover?.classList.add("visible");
    };


  return (
    <article
      id={`drag${props.task.id}`}
      ref={dragRef}
      onDrag={(e) => handleDragStart(e, props.task.id)}
      draggable
      className={`rounded-md grid grid-rows-3 w-full px-2 h-48 bg-white shadow-lg`}
    >
      <div className="flex flex-row justify-between pt-4 items-center w-full">
        <div className="task-title-bg h-10 w-20 rounded-md  flex items-center justify-center text-center ">
          <span className="text-xs font-medium"></span>
        </div>
        <article className="flex flex-row items-center justify-end ml-auto">
          <div>
            <div className="flex flex-row items-center">
              <div
                className={` ${
                  taskOptionsView ? "visible block" : "hidden"
                } space-y-1 border border-solid  sticky  z-20 mr-[-10px] mt-20 justify-center pl-1 bg-white rounded-sm shadow-md h-16  w-20 text-center flex flex-col  text-[10px]`}
              >
                <div className="flex flex-row text-start  items-center border-b border-solid space-x-1 justify-start ">
                  <FaEye className="text-start" />
                  <h2 className="cursor-pointer" onClick={viewTaskHandler}>
                    View Task
                  </h2>
                </div>
                <div className="flex flex-row text-start items-center space-x-1 justify-start">
                  <MdDelete className="text-start" />
                  <h2 className="cursor-pointer" onClick={deleteTask}>
                    Delete Task
                  </h2>
                </div>
              </div>
              <BsThreeDotsVertical
                className="cursor-pointer"
                onClick={taskOptionsViewHandler}
              />
            </div>
          </div>
        </article>
      </div>
      <div className="flex flex-col pt-3">
        <h1 className="text-sm">{props.task.title}</h1>
        <div className="task-desc leading-3 pt-1 desc overflow-hidden">
          {props.task.description}
        </div>
      </div>
      <div className="border-t w-full mt-5 flex flex-row justify-between ">
        <div>
          <h1 className="text-xs">Asignee</h1>
        </div>
        <div className="grid grid-rows-2">
          <span className="task-desc ml-auto">{props.task.due_date}</span>
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
  );
};

export default TaskboardCard;
