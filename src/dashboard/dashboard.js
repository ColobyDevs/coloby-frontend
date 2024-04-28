import React, { useRef, useState, useEffect, useContext } from "react";
import { Context } from "../context/context";
import { useLocation, useNavigate, Navigate } from "react-router-dom";
import { MdSearch, MdExplore } from "react-icons/md";
import { IoIosNotificationsOutline } from "react-icons/io";
import ChannelCards from "./channel-cards";
import CreateChannel from "./create-channel";
import "./dashboard.css";
import avatar from "../img/avatar.jpg";
import mock from "../img/mock.png";
import {
  RiAddLine,
  RiBallPenLine,
  RiArrowLeftSLine,
  RiArrowRightSLine,
  RiHistoryLine,
  RiStarLine,
  RiSearchLine,
  RiFilter3Line,
  RiFile2Line,
} from "react-icons/ri";
import { HiMiniUser } from "react-icons/hi2";
import Aos from "aos";
import "aos/dist/aos.css";

const Dashboard = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
 
  const { auth, modal, loader, chat, rooms } = useContext(Context);
  const { setCreateChModal } = modal;
  const { token } = auth;
  const { setIsLoading } = loader;
  const { setRoomMsgs, msgTrigger } = chat;

 
console.log(rooms);
  const [navState, setNavState] = useState(true);

  const [carousel, setCarousel] = useState();
  const leftValue = 0;

  const carouselRef = useRef();
  const cardRef = useRef();
  const scroll = (type) => {
    const carousel = carouselRef.current;
    const scrollWidth = carousel.scrollWidth - carousel.clientWidth;
    setCarousel(carouselRef.current);
    const card = cardRef.current.offsetWidth + 24;

    carousel.scrollLeft += type === "left" ? -card : card;

    setTimeout(
      () =>
        setNavState(() => {
          if (carousel.scrollLeft === 0) {
            return true;
          } else if (carousel.scrollLeft === scrollWidth) {
            return;
          }
        }),
      60
    );
  };
  const createChHandler = () => {
    setCreateChModal(true);
  };
  const checkUserData = async ()=>{
    const response = await fetch('https://coloby.onrender.com/api/v1/userdata', {
      headers:{
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      }
    })
    const responseData = await response.json()
    console.log(responseData);
  }

  useEffect(() => {   
      localStorage.setItem("lastVisitedPage", window.location.pathname); 
 
    setNavState(() => {
      if (leftValue === 0) {
        return true;
      }
    });
  }, []);

  if (token) {
    return (
      <>
        <CreateChannel />
        <section className="h-screen ml-72">
          <section className="bg-gray-100  flex flex-row items-center justify-between  h-16 border w-full px-4">
            <div className="w-1/2 flex flex-row h-1/2 items-center border px-2 rounded-md">
              <MdSearch className="text-lg border-r-0  h-full rounded-l-md" />
              <input
                placeholder={`Search...`}
                className="px-2 h-full w-10/12  rounded-r-md focus:outline-none"
              />
            </div>

            <div className="grid grid-cols-2 space-x-2">
              <div className="h-10 w-10 grid items-center justify-center border rounded-md ">
                <IoIosNotificationsOutline className="text-3xl" />
              </div>

              <div className="h-10 w-10 grid items-center justify-center border rounded-md">
                <img className=" w-6 h-6" alt="user" src={avatar} />
              </div>
            </div>
          </section>
          <article className="bg-gray-100 section">
            <div className="grid grid-cols-2 w-64 space-x-4 pl-4 pt-4">
              <button
                onClick={createChHandler}
                className="justify-center border border-black border-solid space-x-2 rounded-md h-8 text-sm w-28 flex items-center flex-row"
              >
                <RiAddLine className="" /> New Channel
              </button>
              <button onClick={checkUserData} className="justify-center space-x-2  primary-bg-color text-white border rounded-md h-8 w-28 text-sm flex items-center flex-row">
                <RiBallPenLine className="mr-1" /> Workspace
              </button>
            </div>
            <div className="flex flex-row items-center">
              <h2 className="mt-2 px-4 text-xl font-semibold">Your Channels</h2>
              <div className="ml-auto grid grid-cols-2 mt-2 text-4xl px-2 cursor-pointer">
                <button disabled={navState}>
                  <RiArrowLeftSLine
                    className={`${
                      navState === true ? "text-gray-200" : "text-gray-900"
                    }`}
                    onClick={() => scroll("left")}
                  />
                </button>
                <RiArrowRightSLine onClick={() => scroll("right")} />
              </div>
            </div>
            <article
              ref={carouselRef}
              className="mt-2  carousel px-4 h-48  flex flex-row overflow-auto space-x-6 scroll-ml-6 scroll-smooth"
            >
              {rooms.length >= 1 ? rooms.map((room, id)=>{ return <ChannelCards key={id} description={room.description} name={room.name} />}) : <div className=" flex lg:flex-col lg:space-y-2 text-center justify-center items-center"><p>You are not in any room yet</p><button onClick={createChHandler} className="justify-center space-x-2  primary-bg-color text-white border rounded-md h-8 w-36 text-sm flex items-center flex-row">
                <RiAddLine className="mr-1" /> Create a room
              </button></div>}
            </article>

            <article className="px-4 flex flex-row justify-between mt-4">
              <div className="grid grid-cols-2 space-x-2">
                <button className="w-28 h-8 text-sm bg-gray-400 rounded-md mt-4 flex flex-row items-center justify-center space-x-4 font-thin">
                  {" "}
                  <RiHistoryLine className="mr-2" /> Recent
                </button>
                <button className="w-28 h-8  text-sm rounded-md mt-4 flex flex-row items-center justify-center space-x-3 font-thin border-2">
                  <RiStarLine className="mr-2" />
                  Favorite
                </button>
              </div>
              <div className="flex flex-row mt-4  space-x-4 justify-between">
                <div className="flex flex-row">
                  <div className="w-5 ml-auto bg-white rounded-l-md">
                    <RiSearchLine className="h-8  ml-auto text-gray-300" />
                  </div>
                  <input
                    placeholder="Filter by keyword"
                    className="h-8 rounded-r-md px-2 font-thin focus:outline-none"
                  />
                </div>
                <div className="flex flex-row ml-auto">
                  <div className="w-5 ml-auto bg-white rounded-l-md">
                    <RiFilter3Line className="h-8  ml-auto" />
                  </div>
                  <select className="w-20 h-8 border-0 border-r-0 rounded-r-md font-thin">
                    <option className=" grid grid-cols-2 focus:outline-none ">
                      Filter
                    </option>
                    <option value="group1">Group1</option>
                  </select>
                </div>
              </div>
            </article>
            <article className="grid grid-rows-3 w-full px-4 mt-4">
              <div className="h-8 grid grid-cols-7 items-center text-xs">
                <span>
                  <RiFile2Line />
                </span>
                <span className="font-medium">Name</span>
                <span className="font-medium">Type</span>
                <span className="font-medium">Opened</span>
                <span className="font-medium">Location</span>
                <span className="font-medium">Endorsement</span>
                <span className="font-medium">Sensitivity</span>
              </div>
              <div className="border-t border-b border-gray-300 grid grid-cols-7 items-center text-xs">
                <HiMiniUser />
                <span>Coloby frontend</span>
                <span>channel</span>
                <span>3 days ago</span>
                <span>Coloby</span>
                <span>------</span>
                <span>------</span>
              </div>
              <div className="border-t border-b border-gray-300 grid grid-cols-7 items-center text-xs">
                <HiMiniUser className="text-base" />
                <span>Coloby frontend</span>
                <span>channel</span>
                <span>3 days ago</span>
                <span>Coloby</span>
                <span>------</span>
                <span>------</span>
              </div>
            </article>
          </article>
        </section>
      </>
    );
  } 
};

export default Dashboard;

// {
//   "user": {
//       "id": "c21e416b-b852-4141-9166-0041a586a024",
//       "username": "Mayhoral",
//       "email": "test@gmail.com",
//       "rooms": [],
//       "created_rooms": [
//           {
//               "id": 3,
//               "users": [],
//               "created_by": "Mayhoral",
//               "total_users": 0,
//               "name": "test1",
//               "slug": "test1_bijc",
//               "is_private": true,
//               "description": null,
//               "likes": []
//           }
//       ]
//   },
//   "joined_rooms": [],
//   "created_rooms": [
//       {
//           "id": 3,
//           "users": [],
//           "created_by": "Mayhoral",
//           "total_users": 0,
//           "name": "test1",
//           "slug": "test1_bijc",
//           "is_private": true,
//           "description": null,
//           "likes": []
//       }
//   ],
//   "assigned_tasks": []
// }