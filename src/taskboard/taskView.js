import React, { useContext, useState } from "react";
import { HiMiniXMark } from "react-icons/hi2";
import { RiBallPenLine } from "react-icons/ri";
import { Context } from "../context/context";
import TextEditor from "../shared/textEditor";
import FroalaEditorView from "react-froala-wysiwyg/FroalaEditorView";

const TaskView = () => {
  const { modal, taskBoard, rooms, auth, textEditorContent } = useContext(Context);
  const { token } = auth;
  const { roomsList } = rooms;
  const { viewTaskModal, setViewTaskModal } = modal;
  const {editorText} = textEditorContent
  const {
    taskInView,
    activeRoomId,
    taskUpdate,
    setTaskInView,
    activeTasks,
  } = taskBoard;
  const [editMode, setEditMode] = useState(false);
  

  const viewTaskHandler = () => {
    setViewTaskModal(false);
    setEditMode(false);
  };

  const handleEditMode = (type) => {
    type === "edit" && setEditMode(true);
    type === "update" && setEditMode(false);

    const updateFunc = async () => {
      const response = await fetch(
        `https://coloby.onrender.com/api/v1/room/${roomsList[activeRoomId].slug}/tasks/${taskInView.id}/`,
        {
          method: "PATCH",
          // taskUpdate from textEditor.js
          body: JSON.stringify(taskUpdate), 
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
          },
        }
      );
      const responseData = await response.json();
      console.log(responseData);
     
      setTaskInView(responseData);
      activeTasks.map((task, i) => {
        if (task.id === responseData.id) {
           return task.description = responseData.description
        }
      });
    };
    type === "update" && editorText !== taskInView.description && editorText !== '' && updateFunc();
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

  if (viewTaskModal) {
    return (
      <main className="  fixed top-0 bottom-0 text-sm right-0 left-0 flex z-40 items-center justify-center modal">
        <section className="w-[60%] h-[90%]  bg-white ">
          <div className="flex flex-row justify-between px-4 items-center shadow-sm  bg-[#e7e7e7] h-[8%]">
            <h2>{taskInView.title}</h2>
            <HiMiniXMark
              className="text-lg cursor-pointer"
              onClick={viewTaskHandler}
            />
          </div>
          <section className="flex flex-row w-full h-full">
            <article className="w-[70%] pt-10 px-4 flex flex-col space-y-5">
              <div className="flex flex-row space-x-2">
                <h2>Project Period:</h2>
                <span>{`${formatDate(taskInView.created_at)} to ${formatDate(
                  taskInView.due_date
                )}`}</span>
                <RiBallPenLine className="cursor-pointer" />
              </div>
              <div>
                <div className="flex flex-row justify-between">
                  <h2>Description</h2>
                  <RiBallPenLine
                    className="cursor-pointer"
                    onClick={() => handleEditMode("edit")}
                  />
                </div>
                <div className="">
                  {!editMode ? (
                    <div className="text-xs pt-2 h-32 rounded-none desc">
                      <FroalaEditorView model={taskInView.description} />
                    </div>
                  ) : 
                  (
                    <TextEditor />
                  )
                  // <div contentEditable>{taskInView.description}</div>
                  }
                </div>
                <button
                  onClick={() => handleEditMode("update")}
                  disabled = {editorText === taskInView.description || editorText === '' }
                  className={` ${
                    !editMode && "invisible"
                  }  block ml-auto ${editorText === taskInView.description || editorText === '' ? 'bg-slate-300' : 'bg-[#052CFD]'} text-white h-8 w-28 mt-2 rounded-md`}
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
