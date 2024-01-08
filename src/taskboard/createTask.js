import React, {useState, useContext} from "react";
import { HiMiniXMark } from "react-icons/hi2";
import { Context } from "../context/context";
import "./createTask.css";
import { useHttp } from "../hooks/httpHook";

export default function CreateTask() {
    const {modal, auth} = useContext(Context)
    const {userId, token} = auth
    const {createTbModal, setCreateTbModal} = modal
    const handleTaskboardModal = ()=>{
        setCreateTbModal(false)
    }
    const [form, setForm] = useState({
        title: '',
        assigned_to: userId,
        priority: '',
        description: '',
        taskStatus: '',
        hifi: '',
        lofi: '',
        startDate: '',
        due_date: '',
        completed: true,
        room: 'colobytest_mhz0'
    })
// const httpBody = JSON.stringify(form)
const httpBody = {
    method: 'POST',
    body: JSON.stringify(form),
    headers:{
    'Content-Type': 'application/json',
    Authorization: 'Bearer ' + token
    }
}



const api = `https://coloby.onrender.com/api/v1/room/{colobytest_mhz0}/tasks/`

    const [httpHandler] = useHttp(httpBody, api, 'creatTask')
    const handleChange = (e)=>{
        setForm((prev)=>{
        
          if(e.target.name === 'startDate' || e.target.name === 'due_date'){
              const date = new Date(e.target.value)
              const year = date.getFullYear()
              const month = date.getMonth()
              const day = date.getDate()
              const dateObject = new Date(year, month, day).toISOString()
              const finalDate = dateObject
              console.log(finalDate);
              return { ...prev,
              [e.target.name]: finalDate
          }
          }else{
            return { ...prev,
              [e.target.name]: e.target.value
          }
          }
          
        })
    }

    if(createTbModal){
  return (
    <React.Fragment>
      <form onSubmit={httpHandler} className="fixed top-0 bottom-0 right-0 left-0 flex z-40 items-center justify-center modal">
        <section className="main-bg-color w-1/2 h-4/5 rounded-lg px-6 ">
          <article className="flex flex-row justify-between items-center text-sm mt-6">
            <span>Create Task</span>
            <span onClick={handleTaskboardModal} className="cursor-pointer">
              <HiMiniXMark className="text-lg" />
            </span>
          </article>
          <main className=" flex flex-row h-4/5  gap-x-10">
            <section className="w-3/5 py-4  flex flex-col justify-between h-full ">
              <div className=" text-xs">
                <div className=" flex flex-col space-y-1">
                  <label className="label">
                    Title <span className="text-red-600">*</span>
                  </label>
                  <input
                    className=" px-2 h-8 rounded-sm border focus:outline-none"
                    name='title'
                    placeholder="Title"
                    type="text"
                    value= {form.title}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 space-x-1 text-xs">
                <div className="flex flex-col space-y-1">
                  <label className="label">
                    Assign To <span className="text-red-600">*</span>
                  </label>
                  <select onChange={handleChange} name="assigned_to" className="px-2 w-full rounded-sm border h-8">
                    <option>In Progress</option>
                    <option>Completed</option>
                    <option></option>
                  </select>
                </div>
                <div className=" flex flex-col space-y-1">
                  <label className="label">
                    Priority <span className="text-red-600">*</span>
                  </label>
                  <select   onChange={handleChange} name="priority" className="px-2 w-full rounded-sm border h-8">
                    <option>In Progress</option>
                    <option>Completed</option>
                    <option></option>
                  </select>
                </div>
              </div>

              <article className="w-full h-2/6 mt-2">
                <label className="text-xs">
                  Description <span className="text-red-600">*</span>
                </label>
                <textarea value={form.description}  onChange={handleChange} name="description" className="w-full h-3/4 border" />
              </article>
            </section>

            <section className="flex flex-col justify-between  h-full py-4 w-2/5">
              <div className=" text-xs ">
                <div className=" flex flex-col space-y-1">
                  <label className="label">
                    Task Status <span className="text-red-600">*</span>
                  </label>
                  <input
                    className=" px-2 h-8 rounded-sm border"
                    name="taskStatus"
                    placeholder="Title"
                    type="text"
                    onChange={handleChange}
                    value={form.taskStatus}
                  />
                </div>
              </div>
              <div className=" text-xs row-span-2">
                <div className=" flex flex-col space-y-1 ">
                  <label className="label">Task Levels </label>
                  <div className=" space-y-2">
                    <div className="flex flex-row items-center gap-x-2">
                    <input
                      className=" px-2 h-8 w-6 rounded-sm border"
                      name="hifi"
                      placeholder="Title"
                      type="checkbox"
                      id="hifi"
                      onChange={handleChange}
                      />
                      <label htmlFor="hifi"> Hifi</label><br></br>
                      </div>
                      <div className="flex flex-row items-center gap-x-2">
                    <input
                      className=" px-2 h-8 w-6 rounded-sm border"
                      name="lofi"
                      placeholder="Title"
                      type="checkbox"
                      id="lofi"
                      onChange={handleChange}
                      />
                      <label htmlFor="lofi"> Lofi</label><br></br>
                      </div>
                  </div>
                </div>
              </div>

              <article className="text-xs space-y-2">
                <div className=" flex flex-col space-y-1">
                  <label className="label">
                    Start Date <span className="text-red-600">*</span>
                  </label>
                  <input
                    className=" px-2 h-10 rounded-sm border"
                    name="startDate"
                    placeholder="Title"
                    type="date"
                    onChange={handleChange}
                    value={form.startDate}
                  />
                </div>

                <div className=" flex flex-col space-y-1">
                  <label className="label">
                    End Date <span className="text-red-600">*</span>
                  </label>
                  <input
                    className=" px-2 rounded-sm border h-10"
                    name="due_date"
                    placeholder="Title"
                    type="date"
                    onChange={handleChange}
                    value={form.due_date}
                  />
                </div>
              </article>
            </section>
          </main>

          <article className="text-xs flex flex-row gap-x-4 h-5 w-1/4">
            <button type='submit' className="border w-1/2 rounded-md primary-bg-color text-white">
              Save
            </button>
            <button  onClick={handleTaskboardModal} className="border w-1/2 rounded-md main-color-text">
              Cancel
            </button>
          </article>
        </section>
      </form>
    </React.Fragment>
  );
}

}
