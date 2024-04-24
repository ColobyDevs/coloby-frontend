import React, { useState, useContext, useEffect } from "react";
import { Context } from "../context/context";
import { HiMiniXMark } from "react-icons/hi2";
import "./create-channel.css";
import { useHttp } from "../hooks/httpHook";
import Aos from "aos";
import "aos/dist/aos.css";

const CreateChannel = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const [channelName, setChannelName] = useState("");
  const { modal, auth } = useContext(Context);
  const { setCreateChModal, createChModal } = modal;
  const { token } = auth;
  const [toggle, setToggle] = useState(false);
  const channelType = toggle ? "public" : "private";
  const channelInfo = toggle
    ? "Anyone in your workspace can view and join this channel"
    : "Only those you allow can see and join this channel";

  const channelNameHandler = (e) => {
    setChannelName(e.target.value);
    console.log(channelName);
  };

  const header = {
    "Content-Type": "application/json",
    Authorization: "Bearer " + token,
  };
  const api = "https://coloby.onrender.com/api/v1/room/";
  const httpBody = {
    action: "create",
    room_name: channelName,
    is_private: channelType === "public" ? false : true,
  };

  const body = {
    method: "POST",
    headers: header,
    body: JSON.stringify(httpBody),
  };
  const type = "createRoom";
  const [httpHandler] = useHttp(body, api, type);

  const toggleHandler = () => {
    setToggle(!toggle);
  };
  const createChHandler = () => {
    setCreateChModal(false);
  };

  if (createChModal) {
    return (
      <form
        onSubmit={httpHandler}
        className="fixed top-0 bottom-0 right-0 left-0 flex z-20 items-center justify-center modal"
      >
        <section
          data-aos="fade-down"
          data-aos-easing="ease-out"
          data-aos-duration="600"
          data-aos-once="true"
          className="bg-white w-1/2 h-5/6 rounded-md grid grid-rows-6 "
        >
          <article className="flex flex-row justify-between px-10 grow border border-b items-center">
            <div className="">
              <h1 className="font-medium">Create a Channel</h1>
              <p className="text-xs">
                Channels are where you share thoughts or files with your
                members.
              </p>
            </div>
            <HiMiniXMark
              className="text-3xl cursor-pointer"
              onClick={createChHandler}
            />
          </article>
          <article className="flex flex-row items-center span-col-1">
            <div className=" px-10">
              <label className="switch">
                <input type="checkbox" placeholder="" />
                <span
                  className={`slider round ${
                    toggle ? "text-end" : "text-start"
                  }  pt-1.5 text-white  text-xs px-3`}
                  onClick={toggleHandler}
                >
                  {channelType}
                </span>
              </label>
            </div>
            <p className="text-xs mr-3">{channelInfo}</p>
          </article>

          <article className="flex flex-col px-10">
            <div>
              <label className="label text-xs">Name</label>
              <div className="flex flex-col">
                <input
                  className="input text-xs border border-solid"
                  placeholder="# e.g Leads"
                  value={channelName}
                  onChange={channelNameHandler}
                />
                <span className="field-text text-gray-400">
                  {" "}
                  Name must be lowercase
                </span>
              </div>
            </div>
          </article>
          <article className="flex flex-col px-10">
            <div className="flex flex-col">
              <label className="label text-xs">Purpose (optional)</label>
              <div className="flex flex-col">
                <input
                  className="input text-xs border-solid"
                  placeholder="# e.g Leads"
                />
                <span className="field-text text-gray-400">
                  What's this channel about?
                </span>
              </div>
            </div>
          </article>
          <article className="flex flex-col px-10 space-y-2">
            <div className="flex flex-col justify-center">
              <label className="label text-xs">
                Send invites to : (optional)
              </label>
              <div className="flex flex-col">
                <input
                  className="input text-xs border-solid"
                  placeholder="# e.g Leads"
                />
                <span className="field-text text-gray-400">
                  Select up to 1000 people to add to this channel
                </span>
              </div>
            </div>
          </article>
          <article className="flex flex-row justify-end px-10 space-x-3 items-center">
            <div className="text-xs text-gray-300  w-24 h-8 grid justify-center  border">
              <button
                className="border border-solid w-28 rounded-md"
                onClick={createChHandler}
              >
                Cancel
              </button>
            </div>
            <div className="colour text-xs text-white  h-8 grid justify-center rounded-md">
              <button className="w-28" type="submit ">
                Create channel
              </button>
            </div>
          </article>

          <article></article>
        </section>
      </form>
    );
  } else {
    return null;
  }
};

export default CreateChannel;

// position: fixed;
// top: 0;
// bottom: 0;
// right: 0;
// left: 0;
// display: flex;
// z-index: 20;
// align-items: center;
// justify-content: center;
// background: rgba(0, 0, 0, 0.5);
