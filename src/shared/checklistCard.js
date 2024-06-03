import { type } from '@testing-library/user-event/dist/type'
import React, {useRef, useState, useEffect} from 'react'
import { FaCaretDown, FaCaretUp } from "react-icons/fa6";

const CheckListCard = () => {
    const [label, setLabel] = useState('')
    const [showTask, setShowTask] = useState(true)
    const checkListRef = useRef()
    const checkListTitle = useRef()


    const handleShowTasks = ()=>{
        setShowTask(!showTask)
    }


    const addCheckList = ()=>{
        // const checkListTitle = document.querySelector('.chl')
        if(label){
        const checkListCon = document.createElement('div')
        const checkListItem = document.createElement('input')
        const checkListLabel = document.createElement('label')
        checkListLabel.innerHTML = label
        checkListLabel.addEventListener('click', edit)
        checkListItem.setAttribute('type', 'checkbox')
        checkListItem.addEventListener('click', (e)=>{
                if(e.target.checked && !checkListLabel.classList.contains('strk')){
                    checkListLabel.classList.add('strk')
                }else if(!e.target.checked && checkListLabel.classList.contains('strk')){
                    checkListLabel.classList.remove('strk')
                }
        })
        checkListCon.append(checkListItem)
        checkListCon.append(checkListLabel)
        checkListCon.classList.add('display')
        checkListRef.current.append(checkListCon)
        setLabel('')
    }
}
    const handleValueChange = (e)=>{
        setLabel(e.target.value)
       
    }

    const edit =(e)=>{
        e.target.setAttribute('contenteditable', 'true')
        console.log('works');
    }
    useEffect(()=>{
        
        checkListTitle.current?.addEventListener('click', edit)
    })


    

  return (
    <div className='py-2 flex flex-col h-fit space-y-2 justify-evenly rounded-md px-2 w-2/5 bg-[#EBEBEB]'>
        <div className='flex flex-row space-x-5 justify-between'><h2 ref={checkListTitle} className='chl' >Checklist</h2> { showTask ? <FaCaretUp onClick={handleShowTasks}/> : <FaCaretDown onClick={handleShowTasks}/> }</div> 
        <div className={`${showTask ? '':'h-0 hidden'}  bg-[#e7e7e7] transition-all delay-400 duration-300 `}>
        <div ref={checkListRef}  className='space-y-1'>
            
        </div>
        <input placeholder='add item' className='pl-2' onChange={(e)=> handleValueChange(e)} value={label}/>
        <button onClick={addCheckList} className='w-14 text-white rounded-sm bg-[#052CFD]'>Done</button>
        </div>
        
    </div>
  )
}

export default CheckListCard
