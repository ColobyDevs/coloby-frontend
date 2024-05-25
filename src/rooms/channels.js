import React, { useEffect, useContext, useState } from "react";
import { IoIosNotificationsOutline } from "react-icons/io";
import { MdSearch } from "react-icons/md";
import avatar from "../img/avatar.jpg";
import { RiBallPenLine } from "react-icons/ri";
import { HiMiniUser } from "react-icons/hi2";
import { HiMiniXMark } from "react-icons/hi2";
import mock from "../img/mock.png";
import "./channels.css";
import Chat from "./chats";
import ChatTimeline from "./chat-timeline";
import NoCodeChannel from "./channelsNoCode";
import ChannelsCode from "./channelsCode";
import { Context } from "../context/context";
import TextEditor from "../shared/textEditor";

const Channels = () => {
  const { rooms } = useContext(Context);
  const {activeRoom, setActiveRoom, roomsList} = rooms

  useEffect(() => {
    localStorage.setItem("lastVisitedPage", window.location.pathname);
    const roomName = window.location.pathname.split("/")[3];

    if (roomsList.length >= 1) {
      setActiveRoom(() => {
        const roomRaw = roomsList.filter((room) => {
          return room.name === roomName;
        });
        return roomRaw[0];
      });
    }
  }, [window.location.pathname]);

  return (
    <main className="h-screen ml-72">
      <article className="flex flex-row items-center  h-16 border w-full px-4">
        <div className="w-full flex flex-row h-1/2 items-center">
          <MdSearch className="text-lg border-r-0 border h-full rounded-l-md" />
          <input
            placeholder={`Search...`}
            className="px-2 h-full w-1/2  border border-l-0 rounded-r-md focus:outline-none"
          />
        </div>

        <div className="grid grid-cols-2 space-x-2">
          <div className="h-10 w-10 grid items-center justify-center border rounded-md">
            <IoIosNotificationsOutline className="text-3xl" />
          </div>

          <div className="h-10 w-10 grid items-center justify-center border rounded-md">
            <img className=" w-6 h-6" src={avatar} />
          </div>
        </div>
      </article>

      <article className="bg-gray-100 ">
        <div className="px-4 pt-4 text-sm font-medium flex flex-row justify-between items-center">
          <div>
            <h1>Welcome to #{activeRoom?.name} channel</h1>
            <span className="field-text font-normal">
              This channel is for everything Front end. Hold meetings, share
              docs, and make decisions together with your team.
            </span>
          </div>
          <button className="colour h-8 w-36 text-xs rounded-md text-white flex flex-row justify-center items-center gap-x-2">
            <RiBallPenLine />
            Manage Members
          </button>
        </div>
        <section className="flex flex-row w-full space-x-8 ">
          <section className="w-4/5 ">
            <article className="ml-4 mt-4 border-2 rounded-md h-64 w-full flex flex-col">
              <div className="h-8 px-2 border-b w-full flex flex-row items-center">
                <h1 className="text-sm">Focus Board</h1>
              </div>
              <div className="px-2 mt-4 flex flex-row items-center justify-between space-x-2">
                <div className="h-44 w-44 border">
                  <img className="w-full h-full" src={mock} />
                </div>

                <div className="w-3/5 text-center scroll-m-10">
                  <h2>Description</h2>
                  <p className="field-text text-start overflow-scroll h-40 overflow-y-auto">
                    {activeRoom?.description}
                  </p>
                </div>
              </div>
            </article>
            <div className="px-4 ">
              <button  className=" mt-4  h-8 w-28 text-xs rounded-md text-white flex flex-row  items-center gap-x-2  justify-center text border-2">
                <HiMiniUser />
                Add people
              </button>
            </div>
            <div className="mt-4 text-sm px-4">
              <span>Comments</span>
            </div>
            <article className="px-4 flex flex-row mt-2">
              <span className="bg-pink-400 text-white rounded-full h-6 w-6 text-center">
                O
              </span>
              <div className="ml-2">
                <span className="text-xs font-medium">Obichi</span>
                <p className="field-text">I feel this is going great</p>
              </div>
            </article>
            <article className=" px-4 mt-5">
              <div className="flex flex-row bg-indigo-800 text-white text-xs h-8  rounded-tr-xl rounded-tl-xl px-4   w-3/4 items-center justify-between">
                <p>
                  Send a quick message to let your coworkers know how your
                  thoughts.
                </p>
                <HiMiniXMark className="text-base" />
              </div>
            </article>
          </section>

          <div className="flex flex-col ml-auto justify-center pr-3">
            <Chat />
            <ChatTimeline />
          </div>
        </section>
        {/* <ChannelsCode/> */}
      </article>
    </main>
  );
};

export default Channels;
