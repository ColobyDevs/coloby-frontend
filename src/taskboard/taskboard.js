import React, { useEffect, useContext } from "react";
import { Context } from "../context/context";
import { MdSearch } from "react-icons/md";
import { IoIosNotificationsOutline } from "react-icons/io";
import avatar from "../img/avatar.jpg";
import { RiAddLine, RiBallPenLine } from "react-icons/ri";
import { Link, Outlet } from "react-router-dom";
import "./taskboard.css";
import CreateTask from "./createTask";
function TaskBoard() {
  const { taskBoard, modal, rooms, setActiveRoomId } = useContext(Context);
  const {roomsList} = rooms
  const { state, taskboardReducerDispatch } = taskBoard;
  const { setCreateTbModal } = modal;
  

  const handletTaskboardModal = () => {
    setCreateTbModal(true);
  };
  function taskBoardTabHandler(tab) {
    taskboardReducerDispatch({ type: tab });
  }

  useEffect(() => {
    localStorage.setItem("lastVisitedPage", window.location.pathname);
  }, []);
  
 

const getSelectRm = async(e)=>{
  setActiveRoomId(Number(e.target.value))
  }

  return (
    <React.Fragment>
      <CreateTask />
      <main className="h-screen ml-72 lg:py-4">
        <section className="flex flex-row items-center justify-between  h-16 border  w-full px-4">
          <div className="w-1/2 flex flex-row h-1/2 items-center border border-solid px-2 rounded-md">
            <MdSearch className="text-lg border-r-0  h-full rounded-l-md" />
            <input
              placeholder={`Search...`}
              className="px-2 h-full w-10/12 rounded-r-md focus:outline-none"
            />
          </div>

          <div className="grid grid-cols-2 space-x-2">
            <div className="h-10 w-10 grid items-center justify-center border rounded-md">
              <IoIosNotificationsOutline className="text-3xl" />
            </div>

            <div className="h-10 w-10 grid items-center justify-center border rounded-md">
              <img className=" w-6 h-6" alt="user" src={avatar} />
            </div>
          </div>
        </section>
        <section className="w-full flex flex-row justify-between px-4">
          <div className="grid grid-cols-2 w-64 space-x-4  pt-4">
            <button
              onClick={handletTaskboardModal}
              className="justify-center space-x-2 colour text-white border rounded-lg h-8 w-28 text-sm flex items-center flex-row"
            >
              <RiBallPenLine className="mr-1" /> Create Task
            </button>
            <button className="justify-center  border-black border-solid  focus:outline-none space-x-2 border rounded-lg h-8 text-sm w-28 flex items-center flex-row">
              <RiAddLine className="" /> View Task
            </button>
          </div>
          <div className="pt-4 grid grid-cols-2 space-x-4">
          <select onChange={getSelectRm} className="justify-center border-solid border-blue-400 focus:outline-none space-x-2 border rounded-lg h-8 text-sm w-28 flex items-center flex-row">

            {roomsList.map((room, i)=>{
             return <option value={i}>{room.name}</option>
            })}
            </select>
            <button className="justify-center border-solid border-blue-400 focus:outline-none space-x-2 border rounded-lg h-8 text-sm w-28 flex items-center flex-row">
              <RiAddLine className="" /> Invite
            </button>
          </div>
        </section>

        <section className="">
          <h1 className="px-4 mt-4  font-medium ">Task Board</h1>
          <article className="title-bg px-4 mt-2 w-full border">
            <nav className=" h-12 z-30 relative items-end pb-1 justify-between text-xs text-start flex flex-row w-full">
              <Link
                title="Overview"
                to="/app/taskboard/overview"
                className=""
                onClick={() => taskBoardTabHandler("OVERVIEW")}
              >
                <span
                  className={`${
                    state.overview.isActive ? "active" : "inactive"
                  } font-medium transition-all delay-100 duration-100`}
                >
                  Overview
                </span>
              </Link>
              <Link
                to="/app/taskboard/assigned_to_me"
                onClick={() => taskBoardTabHandler("ASSIGNED")}
              >
                <span
                  className={`${
                    state.assigned.isActive ? "active" : "inactive"
                  } font-medium transition-all delay-100 duration-100`}
                >
                  Assigned to me
                </span>
              </Link>
              <Link
                to="/app/taskboard/requests"
                onClick={() => taskBoardTabHandler("REQUESTS")}
              >
                <span
                  className={`${
                    state.requests.isActive ? "active" : "inactive"
                  } font-medium transition-all delay-100 duration-100`}
                >
                  Requests
                </span>
              </Link>
              <Link
                to="/app/taskboard/analysis"
                onClick={() => taskBoardTabHandler("ANALYSIS")}
              >
                <span
                  className={`${
                    state.analysis.isActive ? "active" : "inactive"
                  } font-medium transition-all delay-100 duration-100`}
                >
                  Analysis
                </span>
              </Link>
            </nav>
          </article>
        </section>

        <Outlet />
      </main>
    </React.Fragment>
  );
}

export default TaskBoard;
