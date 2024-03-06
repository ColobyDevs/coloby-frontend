import React, { useState, useContext, useReducer, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { Context } from "./context/context";
import { useLocation } from "react-router-dom";
import ColobyLogo from "./assets/ColobyLogo.png";
import { Link } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import {
  RiDiscussLine,
  RiArrowDownSLine,
  RiOrganizationChart,
} from "react-icons/ri";
import {
  IoIosSettings,
  IoIosHelpCircle,
  IoIosLogOut,
  IoIosNotificationsOutline,
  IoIosStats,
} from "react-icons/io";
import "./sidebar.css";

const Sidebar = () => {
  const { auth, taskboardReducer, modal } = useContext(Context);
  const { setCreateChModal, showActionModal, setShowActionModal } = modal;
  const { logout } = auth;
  const { taskboardReducerDispatch } = taskboardReducer;
  const createChHandler = () => {
    setCreateChModal(true);
  };
  const location = useLocation()

  const [show, setShow] = useState(false);

  const showHandler = () => {
    setShow(!show);
  };

  function taskBoardTabHandler() {
    taskboardReducerDispatch({ type: "OVERVIEW" });
  }

  const initialState = {
    dashboardIsActive: true,
    roomsIsActive: false,
    notificationIsActive: false,
    taskboardIsActive: false,
    messagesIsActive: false,
    settingsIsActive: false,
    helpIsActive: false,
  };

  const reducerFunc = (state, action) => {
    switch (action.type) {
      case "DASHBOARD_TAB": {
        return {
          ...state,
          dashboardIsActive: true,
          roomsIsActive: false,
          notificationIsActive: false,
          taskboardIsActive: false,
          messagesIsActive: false,
          settingsIsActive: false,
          helpIsActive: false,
        };
      }
      case "ROOMS_TAB": {
        return {
          ...state,
          roomsIsActive: true,
          dashboardIsActive: false,
          notificationIsActive: false,
          taskboardIsActive: false,
          messagesIsActive: false,
          settingsIsActive: false,
          helpIsActive: false,
        };
      }
      case "NOTIFICATIONS_TAB": {
        return {
          ...state,
          notificationIsActive: true,
          roomsIsActive: false,
          dashboardIsActive: false,
          taskboardIsActive: false,
          messagesIsActive: false,
          settingsIsActive: false,
          helpIsActive: false,
        };
      }
      case "TASKBOARD_TAB": {
        return {
          ...state,
          taskboardIsActive: true,
          roomsIsActive: false,
          notificationIsActive: false,
          dashboardIsActive: false,
          messagesIsActive: false,
          settingsIsActive: false,
          helpIsActive: false,
        };
      }
      case "MESSAGE_TAB": {
        return {
          ...state,
          messagesIsActive: true,
          roomsIsActive: false,
          notificationIsActive: false,
          taskboardIsActive: false,
          dashboardIsActive: false,
          settingsIsActive: false,
          helpIsActive: false,
        };
      }
      case "SETTINGS_TAB": {
        return {
          ...state,
          settingsIsActive: true,
          roomsIsActive: false,
          notificationIsActive: false,
          taskboardIsActive: false,
          messagesIsActive: false,
          dashboardIsActive: false,
          helpIsActive: false,
        };
      }
      case "HELP_TAB": {
        return {
          ...state,
          helpIsActive: true,
          roomsIsActive: false,
          notificationIsActive: false,
          taskboardIsActive: false,
          messagesIsActive: false,
          settingsIsActive: false,
          dashboardIsActive: false,
        };
      }
    }
  };

  useEffect(()=>{
    if(location.pathname === '/dashboard'){
        return dispatch({type: 'DASHBOARD_TAB'})
    }else if(location.pathname === '/rooms'){
         return dispatch({type: 'ROOMS_TAB'})
    }else if(location.pathname === '/notifications'){
        return dispatch({type: 'NOTIFICATIONS_TAB'})
    }else if(location.pathname.includes('/taskboard')){
        return dispatch({type: 'TASKBOARD_TAB'})
    }else if(location.pathname=== '/messages'){
        return dispatch({type: 'MESSAGE_TAB'})
    }else if(location.pathname=== '/settings'){
        return dispatch({type: 'SETTINGS_TAB'})
    }else if(location.pathname=== '/help'){
        return dispatch({type: 'HELP_TAB'})
    }
    }, [location.pathname])
  const [state, dispatch] = useReducer(reducerFunc, initialState);

  const handleTabChange = (type) => {
    dispatch({ type });
  };

  const handleModal = ()=>{
    setShowActionModal(true)
  }

    
  return (
    <>
      <main className="fixed h-screen hidden space-y-10 py-4 lg:flex lg:flex-col border w-72 border-l">
        <div className="ml-16">
          <img src={ColobyLogo} alt="coloby" className="w-20 h-10" />
        </div>

        <div className="flex flex-row items-center text-xl ml-16 font-bold">
          <h1>Swift Limited</h1> <span className="text-xl">+</span>
        </div>

        <section
          className={`flex flex-col space-y-5  h-full carousel justify-center w-full items-center mx-auto mt-4 overflow-x-hidden overflow-scroll scroll-smooth`}
        >
          <article
            className={`  ${
              state.dashboardIsActive && "active_tab"
            } flex  flex-row w-1/2 mx-auto space-x-4 h-4 items-center`}
          >
            <MdDashboard className="" />
            <Link
              to={`/dashboard`}
              onClick={() => handleTabChange("DASHBOARD_TAB")}
            >
              <h2>Dashboard</h2>
            </Link>
          </article>

          <article className="flex flex-col space-y-5 w-1/2 mx-auto h-5/6">
            <div
              className={` ${
                state.roomsIsActive && "active_tab"
              } flex flex-col row-span-1`}
              onClick={() => handleTabChange("ROOMS_TAB")}
            >
              <div
                className={` flex  flex-row space-x-4 items-center cursor-pointer`}
                onClick={showHandler}
              >
                <RiOrganizationChart />

                <h2>Rooms</h2>
                <RiArrowDownSLine className="ml-4 cursor-pointer" />
              </div>
              <div
                className={`grid grid-flow-row  overflow-x-hidden overflow-y-auto  items-center ml-8 transition-all delay-400 ease-in-out ${
                  show ? "h-16" : "h-0"
                }`}
              >
                <Link to="rooms">
                  <h1 className={`${show ? "visible" : "hidden"} text-xs`}>
                    coloby
                  </h1>
                </Link>
                <h1 className={`${show ? "visible" : "hidden"} text-xs`}>
                  newJam
                </h1>
                <h1 className={`${show ? "visible" : "hidden"} text-xs`}>
                  newJam
                </h1>
                <h1 className={`${show ? "visible" : "hidden"} text-xs`}>
                  newJam
                </h1>
                <h1 className={`${show ? "visible" : "hidden"} text-xs`}>
                  newJam
                </h1>
                <h1 className={`${show ? "visible" : "hidden"} text-xs`}>
                  newJam
                </h1>
                <h1 className={`${show ? "visible" : "hidden"} text-xs`}>
                  newJam
                </h1>
                <h1 className={`${show ? "visible" : "hidden"} text-xs`}>
                  newJam
                </h1>
              </div>
              <span
                className={`${
                  show ? "visible" : "hidden"
                } text-center  text-sm cursor-pointer`}
                onClick={createChHandler}
              >
                New channel +
              </span>
            </div>
            <div className={`flex flex-row  items-center space-x-3`}>
              <IoIosNotificationsOutline />
              <h2>Notifications</h2>
            </div>
            <div
              className={` ${
                state.taskboardIsActive && "active_tab"
              } flex flex-row items-center space-x-4`}
              onClick={() => handleTabChange("TASKBOARD_TAB")}
            >
              <IoIosStats />
              <Link to="/taskboard/overview" onClick={taskBoardTabHandler}>
                <h2>Taskboard</h2>
              </Link>
            </div>
            <div
              className={` ${
                state.messagesIsActive && "active_tab"
              } flex flex-row items-center space-x-4`}
              onClick={() => handleTabChange("MESSAGE_TAB")}
            >
              <RiDiscussLine />
              <h2>Messages</h2>
            </div>

            <div
              className={` ${
                state.settingsIsActive && "active_tab"
              } flex flex-row items-center pt-1 space-x-4 border-t-2`}
              onClick={() => handleTabChange("SETTINGS_TAB")}
            >
              <IoIosSettings className="" />
              <h2 className="">Settings</h2>
            </div>
            <div
              className={`${
                state.help && "active_tab"
              } flex flex-row items-center space-x-4`}
              onClick={() => handleTabChange("HELP_TAB")}
            >
              <IoIosHelpCircle />
              <h2>Help</h2>
            </div>
            <div className="flex flex-col w-full align-center text-center space-y-2">
              <div
                className="flex flex-row items-center space-x-4 cursor-pointer"
                onClick={handleModal}
              >
                <IoIosLogOut className="" />
                <h2>Logout</h2>
              </div>
            </div>
          </article>
        </section>
      </main>
      <Outlet/>
    </>
  );
};
export default Sidebar;
