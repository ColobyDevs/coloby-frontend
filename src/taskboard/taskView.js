import React, { useContext, useState, useReducer, useEffect } from "react";
import { HiMiniXMark } from "react-icons/hi2";
import { RiBallPenLine } from "react-icons/ri";
import { Context } from "../context/context";
import { toast } from "sonner";
import CheckListBoard from "../shared/checkListBoard";

const TaskView = () => {
  const { modal, taskBoard, rooms, auth, textEditorContent, loader } =
    useContext(Context);
  const { token } = auth;
  const { setIsLoading } = loader;
  const { roomsList } = rooms;
  const { viewTaskModal, setViewTaskModal } = modal;
  const {
    taskInView,
    activeRoomId,
    setActiveTasks,
    setTaskInView,
  } = taskBoard;
  const [editMode, setEditMode] = useState(false);

  const [updateForm, setUpdateForm] = useState({
    title: "",
    due_date: "",
    description: "",
  });

  useEffect(() => {
    setUpdateForm({
      title: taskInView.title,
      due_date: taskInView.due_date,
      description: taskInView.description,
    });
  }, [taskInView]);

  const handleUpdate = (e) => {
    setUpdateForm((prevForm) => {
      return { ...prevForm, [e.target.name]: e.target.value };
    });
  };
  const viewTaskHandler = () => {
    setViewTaskModal(false);
    setEditMode(false);
    setUpdateForm({
      title: taskInView.title,
      due_date: taskInView.due_date,
      description: taskInView.description,
    });
    setDurEditMode(false);
  };

  const updateTask = () => {
    const updateFunc = async () => {
      console.log('d');
      try {
        setIsLoading(true);

        const response = await fetch(
          `https://coloby.onrender.com/api/v1/room/${roomsList[activeRoomId].slug}/tasks/${taskInView.id}/`,
          {
            method: "PATCH",
            // taskUpdate from textEditor.js
            body: JSON.stringify(updateForm),
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + token,
            },
          }
        );
        const responseData = await response.json();
        console.log(responseData);

        setTaskInView(responseData);

        setActiveTasks((prevTasks) =>
          prevTasks.map((task) =>
            task.id === responseData.id
              ? {
                  ...task,
                  due_date: responseData.due_date,
                  title: responseData.title,
                  description: responseData.description,
                }
              : task
          )
        );

        setIsLoading(false);
        toast.success("Task updated!");
      } catch (err) {
        setIsLoading(false);
        console.log(err.message);
      }
    };

      if(updateForm.description !== taskInView.description ||
        updateForm.title !== taskInView.title ||
        updateForm.due_date !== taskInView.due_date){
          return updateFunc()
        }
  };

  const formatDate = (date) => {
    const rawDate = new Date(date);
    const formattedDate = new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "long",
      day: "2-digit",
    }).format(rawDate);
    return formattedDate;
  };

  const [titleShow, setTitleShow] = useState(false);
  const [descShow, setDescShow] = useState(false);
  const handleTitleShow = () => {
    setTitleShow(!titleShow);
  };

  const [showDur, setShowDur] = useState(false);
  const handleShowDur = () => {
    setShowDur(!showDur);
  };

  const handleDescShow = () => {
    setDescShow(!descShow);
  };
  const [durEditMode, setDurEditMode] = useState(false);
  const handleDurEditMode = () => {
    setDurEditMode(!durEditMode);
  };

  if (viewTaskModal) {
    return (
      <main className="  fixed top-0 bottom-0 text-sm right-0 left-0 flex z-40 items-center justify-center modal">
        <section className="w-[60%] h-[90%]  bg-white overflow-auto">
          <div className="flex flex-row justify-between px-4 items-center shadow-sm  bg-[#e7e7e7] h-[8%]">
            <div className="w-3/12  flex flex-row items-center space-x-2">
              {!titleShow ? (
                <h2 onClick={handleTitleShow}>{taskInView.title}</h2>
              ) : (
                <input
                  name="title"
                  className="bg-[#e7e7e7]"
                  value={updateForm.title}
                  onChange={handleUpdate}
                />
              )}
            </div>
            <HiMiniXMark
              className="text-lg cursor-pointer"
              onClick={viewTaskHandler}
            />
          </div>
          <section className="flex flex-row w-full h-full">
            <article className="w-[70%] pt-2 px-4 flex flex-col space-y-1">
              <div
                onMouseEnter={handleShowDur}
                onMouseLeave={handleShowDur}
                className="flex flex-row items-center space-x-2"
              >
                <h2>Project Period:</h2>
                <span className=" text-xs">
                  {formatDate(taskInView.created_at)} to
                </span>
                {!durEditMode ? (
                  <span className="text-xs">
                    {formatDate(taskInView.due_date)}
                  </span>
                ) : (
                  <input
                    className=" px-2 rounded-sm text-xs border border-solid"
                    name="due_date"
                    type="date"
                    onChange={handleUpdate}
                    value={updateForm.due_date}
                  />
                )}
                {showDur && <RiBallPenLine onClick={handleDurEditMode} />}
              </div>
              <div></div>
              <div>
                <div className="flex flex-row items-center space-x-2 ">
                  <h2>Description</h2>
                </div>
                <div className="">
                  {!descShow ? (
                    <div onClick={handleDescShow} className="text-xs pt-2">
                      {taskInView.description}
                    </div>
                  ) : (
                    <input
                      name="description"
                      className="text-xs pt-2"
                      value={updateForm.description}
                      onChange={handleUpdate}
                    />
                  )}
                </div>
                <div className="mt-4 ">
                  <CheckListBoard />
                </div>
                <button
                  onClick={ updateTask}
                  disabled={
                    !(
                      updateForm.description !== taskInView.description ||
                      updateForm.title !== taskInView.title ||
                      updateForm.due_date !== taskInView.due_date
                    )
                  }
                  className={` block ml-auto ${
                    updateForm.description !== taskInView.description ||
                    updateForm.title !== taskInView.title ||
                    updateForm.due_date !== taskInView.due_date
                      ? "bg-[#052CFD]"
                      : "bg-slate-300"
                  } text-white h-8 w-28 mt-2 rounded-md`}
                >
                  Update
                </button>
              </div>
              <div>
                <h2>Comments</h2>
                <div>
                  <input
                    className="border border-solid w-full px-2 rounded-sm"
                    placeholder="write a comment"
                  />
                </div>
              </div>
            </article>
            <article className="w-[30%] h-[92%] bg-[#e7e7e7] flex flex-col space-y-5 pt-10 pl-4 ">
              <div>
                <h1>Created By:</h1>
                <span className="pl-2">Ademola</span>
              </div>
              <div>
                <h1>Assigned to:</h1>
                <div className="pl-2 flex flex-col">
                  <span>obilo</span>
                  <span>Noah</span>
                </div>
              </div>
              <div>
                <h2>Requests to join</h2>
              </div>
            </article>
          </section>
        </section>
      </main>
    );
  }
};

export default TaskView;
