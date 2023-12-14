import React, { useReducer, useContext } from "react";
import { Context } from "../context/context";
import { MdSearch } from "react-icons/md";
import { IoIosNotificationsOutline } from "react-icons/io";
import avatar from "../img/avatar.jpg";
import { RiAddLine, RiBallPenLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import Overview from "./overview";
import Requests from "./requests";
import Assigned from "./assignedToMe";
import Analysis from "./analysis/analysis";
import "./taskboard.css";
import CreateTask from "./createTask";
function TaskBoard() {
  const { taskboardReducer, modal } = useContext(Context);
  const { state, taskboardReducerDispatch } = taskboardReducer;
  const { setCreateTbModal } = modal;

  const handletTaskboardModal = () => {
    setCreateTbModal(true);
  };

  function taskBoardTabHandler(tab) {
    taskboardReducerDispatch({ type: tab });
  }

  return (
    <React.Fragment>
      <CreateTask />
      <main className="h-screen ml-72">
        <section className="flex flex-row items-center justify-between  h-16 border w-full px-4">
          <div className="w-1/2 flex flex-row h-1/2 items-center border px-2 rounded-md">
            <MdSearch className="text-lg border-r-0  h-full rounded-l-md" />
            <input
              placeholder={`Search...`}
              className="px-2 h-full w-10/12  rounded-r-md focus:outline-none"
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
            <button className="justify-center border-blue-400 focus:outline-none space-x-2 border rounded-lg h-8 text-sm w-28 flex items-center flex-row">
              <RiAddLine className="" /> View Task
            </button>
          </div>
          <div className="pt-4 ">
            <button className="justify-center border-blue-400 focus:outline-none space-x-2 border rounded-lg h-8 text-sm w-28 flex items-center flex-row">
              <RiAddLine className="" /> Invite
            </button>
          </div>
        </section>

        <section className="">
          <h1 className="px-4 mt-4  font-medium ">Task Board</h1>
          <article className="title-bg px-4 mt-2 w-full border">
            <nav className=" h-12 z-30 relative items-end pb-1 justify-between text-xs text-start flex flex-row w-1/2">
              <Link
                title="Overview"
                to="/taskboard/overview"
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
                to="/taskboard/assigned_to_me"
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
                to="/taskboard/requests"
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
                to="/taskboard/analysis"
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
        {state.overview.isActive && <Overview />}
        {state.assigned.isActive && <Assigned />}
        {state.requests.isActive && <Requests />}
        {state.analysis.isActive && <Analysis />}
      </main>
    </React.Fragment>
  );
}

export default TaskBoard;
