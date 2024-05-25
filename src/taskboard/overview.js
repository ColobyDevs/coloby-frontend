import React, {useEffect, useContext, useState} from "react";
import { Context } from "../context/context";
import { GoDotFill } from "react-icons/go";
import TaskboardCard from "./taskboard-card";
import { RiAddLine } from "react-icons/ri";
import { BsThreeDotsVertical, BsEye } from 'react-icons/bs'
import { TfiComment } from 'react-icons/tfi'
import { GrAttachment } from 'react-icons/gr'
import Skeleton from 'react-loading-skeleton'
import { useHttp } from "../hooks/httpHook";
import { useOutletContext } from "react-router-dom";
import 'react-loading-skeleton/dist/skeleton.css'
import "./overview.css";

export default function Overview() {
  const { taskBoard, rooms, auth, loader, updateX } = useContext(Context);
  const {token} = auth
  const {setIsLoading} = loader
  const {roomsList, setRoomsList} = rooms
  const { activeTasks, activeRoomId} = taskBoard;
  const [undoneTasks, setUndoneTasks] = useState(0)
  const [pendingTasks, setPendingTasks] = useState(0)


  useEffect(()=>{
    localStorage.setItem("lastVisitedPage", window.location.pathname);
  }, [])

  // const draggable = document.querySelectorAll('drag1');

  useEffect(() => {

    setIsLoading(true);

    const draggables = document.querySelectorAll('.draggable');
    const pendingZone = document.getElementById('pendingZone');
    const undoneZone = document.getElementById('undoneZone');
    const completedZone = document.getElementById('doneZone')

    setPendingTasks(pendingZone.children.length)
    setUndoneTasks(undoneZone.children.length)
    const handleDragStart = (e) => {
      
      e.dataTransfer.setData('text/plain', e.target.id);
    };

    const handleDragOver = (e) => {
      e.preventDefault();
    };

    const handleDrop = async (e, zone, type, roomsList, activeRoomId) => {
      
      e.preventDefault();
      
      const data = e.dataTransfer.getData('text/plain');
      const draggedElement = document.getElementById(data);
      const taskId = data.slice(4);
     
      
      if (zone && draggedElement && !zone.contains(draggedElement)) {
       
        const fromZone = draggedElement.parentNode;
        fromZone.removeChild(draggedElement);
        zone.appendChild(draggedElement);
       
        updateFunc(taskId, type, roomsList, activeRoomId, zone);
       
      }
    };

    draggables?.forEach(draggable => {
      draggable?.addEventListener('dragstart', handleDragStart);
    });
   
    if (pendingZone) {
     
      pendingZone.addEventListener('dragover', handleDragOver);
      pendingZone.addEventListener('drop', (e) => handleDrop(e, pendingZone, 'pending', activeRoomId));
    }

    if (undoneZone) {
      
      undoneZone.addEventListener('dragover', handleDragOver);
      undoneZone.addEventListener('drop', (e) => handleDrop(e, undoneZone, 'undone', activeRoomId));
    }

    if (completedZone){
      completedZone.addEventListener('dragover', handleDragOver);
      completedZone.addEventListener('drop', (e) => handleDrop(e, completedZone, 'done', activeRoomId));
    }

    setIsLoading(false);

    return () => {
      draggables.forEach(draggable => {
        draggable.removeEventListener('dragstart', handleDragStart);
      });
      if (pendingZone) {
        pendingZone.removeEventListener('dragover', handleDragOver);
        pendingZone.removeEventListener('drop', handleDrop);
      }
      if (undoneZone) {
        undoneZone.removeEventListener('dragover', handleDragOver);
        undoneZone.removeEventListener('drop', handleDrop);
      }
    };
  }, [activeTasks, roomsList]);

 
  const updateFunc = async (taskId, type, activeRoomId, zone) => {
    const storedData = JSON.parse(localStorage.getItem("userData"));
    const roomSlugs = JSON.parse(localStorage.getItem("roomSlugs"));
  
   
    
    const token = storedData.accessToken
   
    const response = await fetch(
      `https://coloby.onrender.com/api/v1/room/${roomSlugs[activeRoomId]}/tasks/${taskId}/`,
      {
        method: "PATCH",
        body: JSON.stringify({ status: type }),
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      }
    );
    const responseData = await response.json();
    console.log(responseData);
    activeTasks.map((task) => {
      if (task.id === responseData.id) {
        task.description = responseData.description;
        task.status = responseData.status;
      }
      return task;
    });
    if(zone === 'undone'){
      setUndoneTasks(zone.children.length)
      setPendingTasks(activeTasks.length - zone.children.length)
    }else if(zone === 'pending'){
     setPendingTasks(zone.children.length)
     setUndoneTasks(activeTasks.length - zone.children.length)
    }
  };
  return (
    <section className="px-4 grid grid-cols-4  mt-20 gap-x-4 lg:pb-4">
      <article className="title-bg rounded-md h-fit flex flex-col space-y-6 px-4 py-4">
        <div className="flex flex-row justify-between items-center">
          <div className="flex gap-x-2 flex-row items-center">
            <GoDotFill className="text-xs text " />
            <h6 className="font-medium text-sm">To Do</h6>
            <span className="count text-xs rounded-lg leading-4 h-4 w-6 text-center">
              {undoneTasks}
            </span>
          </div>
          <BsThreeDotsVertical />
        </div>


        <button className="rounded-sm add_new w-full h-10 px-4 text-xs block mx-auto text-center ">
          Add New Card
        </button>

        <section id='undoneZone' className=" overflow-auto carousel min-h-[12rem] max-h-96 space-y-4 rounded-sm">
         
          {
            activeTasks.length >= 1 ?
          activeTasks.map((task, i)=>{ 
            if(task.status === 'undone'){

           return(
            <TaskboardCard key={task.id} id={i} tasks={task} />
          )
        }

          }): <Skeleton height={'12rem'}/>
        }
       
        </section>
      </article>
      <article  className="title-bg  h-fit rounded-md flex flex-col space-y-6 px-4 py-4 ">
        <div className="flex flex-row justify-between items-center">
          <div className="flex gap-x-2 flex-row items-center">
            <GoDotFill className="text-orange-400 text-xs " />
            <h6 className="font-medium text-sm">In Progress</h6>
            <span className="count text-xs rounded-lg leading-4 h-4 w-6 text-center">
             {pendingTasks}
            </span>
          </div>
          <BsThreeDotsVertical />
        </div>

        <section id="pendingZone" className=" overflow-auto carousel min-h-[12rem] max-h-96 space-y-4 rounded-sm ">

                  {
            activeTasks.length >= 1 ?
          activeTasks.map((task, i)=>{ 
            if(task.status === 'pending'){

           return(
            <TaskboardCard key={task.id} id={i} tasks={task} />
          )
        }

          }): <Skeleton height={'12rem'}/>
        }
        </section>
      </article>

      <article
        id="dropzone2"
        className="title-bg  h-fit rounded-md flex flex-col space-y-6 px-4 py-4"
      >
        <div className="flex flex-row justify-between items-center">
          <div className="flex gap-x-2 flex-row items-center">
            <GoDotFill className="text-green-400 text-xs " />
            <h6 className="font-medium text-sm">Completed</h6>
            <span className="count text-xs rounded-lg leading-4 h-4 w-6 text-center">
              3
            </span>
          </div>
          <BsThreeDotsVertical />
        </div>

        <section id="doneZone" className=" overflow-auto carousel min-h-[12rem] max-h-96 space-y-4 rounded-sm">
        {
            activeTasks.length >= 1 ?
          activeTasks.map((task, i)=>{ 
            if(task.status === 'done'){

           return(
            <TaskboardCard key={task.id} id={i} tasks={task} />
          )
        }

          }): <Skeleton height={'12rem'}/>
        }
        </section>
      </article>

      <div className=" add_new text-xs gap-x-1 border rounded-md h-10 w-44 justify-center flex flex-row items-center">
        <RiAddLine />
        <button className="">Add New List</button>
      </div>
    </section>
  );
}
