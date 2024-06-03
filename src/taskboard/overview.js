import React, { useEffect, useContext, useState, useRef } from "react";
import { Context } from "../context/context";
import { GoDotFill } from "react-icons/go";
import TaskboardCard from "./taskboard-card";
import { RiAddLine } from "react-icons/ri";
import { BsThreeDotsVertical, BsEye } from "react-icons/bs";
import Skeleton from "react-loading-skeleton";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import "react-loading-skeleton/dist/skeleton.css";
import "./overview.css";

export default function Overview(props) {
  const navigate = useNavigate();
  const { taskBoard, rooms, loader } = useContext(Context);
  const { setIsLoading, skeletalLoading } = loader;
  const { roomsList } = rooms;
  const { activeTasks, activeRoomId, setActiveTasks } = taskBoard;
  const [currEl, setCurrEl] = useState("");

  const [undoneTasks, setUndoneTasks] = useState(0);
  const [pendingTasks, setPendingTasks] = useState(0);
  const [completedTasks, setCompletedTasks] = useState(0);

  useEffect(() => {
    localStorage.setItem("lastVisitedPage", window.location.pathname);
  }, []);



  const handleDrop = (e, type) => {
    e.preventDefault();
    const sourceZone = e.target.closest(".dropzone");

    if (!sourceZone.classList.contains("source-zone")) {
      const taskId = e.dataTransfer.getData("text/plain");
      updateFunc(currEl, type);
    }
    document.querySelectorAll(".source-zone").forEach((zone) => {
      zone.classList.remove("source-zone");
    });
    handleHideHover(".undoneZoneHover");

    handleHideHover(".pendingZoneHover");

    handleHideHover(".completedZoneHover");
  };

  const handleHideHover = (zoneType) => {
    const zoneHover = document.querySelector(zoneType);
    zoneHover?.classList.remove("visible");
    zoneHover?.classList.add("hide");
  };

  const handleDragEnter = (e) => {
    e.preventDefault();
    const zone = e.target.closest(".dropzone");
    if (!zone.classList.contains("source-zone")) {
      const hoverZone = document.querySelector(
        zone.id === "undoneZone"
          ? ".undoneZoneHover"
          : zone.id === "pendingZone"
          ? ".pendingZoneHover"
          : ".completedZoneHover"
      );
      hoverZone.classList?.remove("animate-pulse");
      hoverZone.style.fontSize = "22px";
      hoverZone.textContent = "Drop It";
    }
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    const zone = e.target.closest(".dropzone");

    if (!e.currentTarget?.contains(e.relatedTarget)) {
      const hoverZone = document.querySelector(
        zone.id === "undoneZone"
          ? ".undoneZoneHover"
          : zone.id === "pendingZone"
          ? ".pendingZoneHover"
          : ".completedZoneHover"
      );
      hoverZone.classList?.add("animate-pulse");
      hoverZone.style.fontSize = "18px";
      hoverZone.textContent = "Drag Task Here";
    }
  };
  const updateFunc = async (taskId, type) => {
    setIsLoading(true)
    const storedData = JSON.parse(localStorage.getItem("userData"));

    const token = storedData.accessToken;
    console.log(roomsList, activeRoomId);
    try{

      const response = await fetch(
        `https://coloby.onrender.com/api/v1/room/${
          roomsList[activeRoomId].slug
        }/tasks/${taskId}/`,
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
      
      setActiveTasks((prevTasks) =>
      prevTasks.map((task) =>
      task.id === responseData.id
      ? { ...task, status: responseData.status }
      : task
      )
      );
      setIsLoading(false)
      toast.success("Task Updated");
    }catch(err){
      setIsLoading(false)
    }
  };

  useEffect(() => {
    setUndoneTasks(
      activeTasks.filter((task) => task.status === "undone").length
    );
    setPendingTasks(
      activeTasks.filter((task) => task.status === "pending").length
    );
    setCompletedTasks(
      activeTasks.filter((task) => task.status === "done").length
    );
  }, [activeTasks]);

  return (
    <section className="px-4 grid grid-cols-4  mt-20 gap-x-4 lg:pb-4">
      <article
        id="undoneZoneDrag"
        className="title-bg rounded-md h-fit flex flex-col space-y-6 px-4 py-4 "
      >
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

        <section
          id="undoneZone"
          onDrop={(e) => handleDrop(e, "undone")}
          onDragEnter={(e) => handleDragEnter(e)}
          onDragLeave={(e) => handleDragLeave(e)}
          onDragOver={(e) => e.preventDefault()}
          className="  overflow-auto carousel h-96 space-y-4 rounded-sm dropzone"
        >
          <div
            className={`hide absolute z-30 text-lg h-96 bg-[#84c0e3] w-48 flex border-2  border-dashed  items-center justify-center undoneZoneHover font-bold text-white animate-pulse`}
          >
            Drag Task Here
          </div>
          {skeletalLoading == false ? (
            activeTasks.map((task, i) => {
              if (task.status === "undone") {
                return (
                  <TaskboardCard
                    key={task.id}
                    id={i}
                    task={task}
                    setCurrEl={setCurrEl}
                  />
                );
              }
              return null;
            })
          ) : (
            <Skeleton height={"12rem"} />
          )}
        </section>
      </article>
      <article className="title-bg  h-fit rounded-md flex flex-col space-y-6 px-4 py-4 ">
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

        <section
          id="pendingZone"
          onDrop={(e) => handleDrop(e, "pending")}
          onDragEnter={(e) => handleDragEnter(e)}
          onDragLeave={(e) => handleDragLeave(e)}
          onDragOver={(e) => e.preventDefault()}
          className=" overflow-auto carousel h-96 space-y-4 rounded-sm  dropzone"
        >
          <div
            className={` hide absolute z-30 text-lg h-96 bg-[#ffa240] w-48 border-2  border-dashed flex items-center justify-center pendingZoneHover font-bold text-white animate-pulse`}
          >
            Drag Task Here
          </div>

          {skeletalLoading == false ? (
            activeTasks.length >= 1 &&
            activeTasks.map((task, i) => {
              if (task.status === "pending") {
                return (
                  <TaskboardCard
                    key={task.id}
                    id={i}
                    task={task}
                    setCurrEl={setCurrEl}
                  />
                );
              }
              return null;
            })
          ) : (
            <Skeleton height={"12rem"} />
          )}
        </section>
      </article>

      <article className="title-bg  h-fit rounded-md flex flex-col space-y-6 px-4 py-4">
        <div className="flex flex-row justify-between items-center">
          <div className="flex gap-x-2 flex-row items-center">
            <GoDotFill className="text-green-400 text-xs " />
            <h6 className="font-medium text-sm">Completed</h6>
            <span className="count text-xs rounded-lg leading-4 h-4 w-6 text-center">
              {completedTasks}
            </span>
          </div>
          <BsThreeDotsVertical />
        </div>

        <section
          id="doneZone"
          onDrop={(e) => handleDrop(e, "done")}
          onDragEnter={(e) => handleDragEnter(e)}
          onDragLeave={(e) => handleDragLeave(e)}
          onDragOver={(e) => e.preventDefault()}
          className=" overflow-auto carousel h-96 space-y-4 rounded-sm dropzone"
        >
          <div
            className={` hide absolute z-30 text-lg h-96 bg-green-400 w-48 border-2  border-dashed flex items-center justify-center completedZoneHover font-bold text-white animate-pulse`}
          >
            Drag Task Here
          </div>
          {skeletalLoading == false ? (
            activeTasks.map((task, i) => {
              if (task.status === "done") {
                return (
                  <TaskboardCard
                    key={task.id}
                    id={i}
                    task={task}
                    setCurrEl={setCurrEl}
                  />
                );
              }
              return null;
            })
          ) : (
            <Skeleton height={"12rem"} />
          )}
        </section>
      </article>

      <div className=" add_new text-xs gap-x-1 border rounded-md h-10 w-44 justify-center flex flex-row items-center">
        <RiAddLine />
        <button className="">Add New List</button>
      </div>
    </section>
  );
}
