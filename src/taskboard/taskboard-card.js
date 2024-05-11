import React from 'react'
import { BsThreeDotsVertical, BsEye } from 'react-icons/bs'
import { TfiComment } from 'react-icons/tfi'
import { GrAttachment } from 'react-icons/gr'

const TaskboardCard = (props) => {
  return (
    <article className="rounded-md w-full px-2 h-48 bg-white shadow-lg">
            <div className="flex flex-row justify-between pt-4 items-center">
              <div className="task-title-bg h-10 w-20 rounded-md  flex items-center justify-center text-center ">
                <span className="text-xs font-medium">{props.title}</span>
              </div>
              <BsThreeDotsVertical />
            </div>

            <div className="flex flex-col pt-3">
              <h1 className="text-sm">User Research</h1>
              <p className="task-desc leading-3 pt-1">
                {props.description}
              </p>
            </div>
            <div className="border-t w-full mt-5 flex flex-row justify-between ">
              <div>
                <h1 className="text-xs">Asignee</h1>
              </div>
              <div className="grid grid-rows-2">
                <span className="task-desc ml-auto">{props.due_date}</span>
                <div className="text-xs mt-1 flex flex-row items-center gap-x-3">
                  <span className="flex flex-row items-center">
                    <BsEye /> 0
                  </span>
                  <span className="flex flex-row items-center">
                    <TfiComment />0
                  </span>
                  <span className="flex flex-row items-center">
                    <GrAttachment />0
                  </span>
                </div>
              </div>
            </div>
          </article>
  )
}

export default TaskboardCard