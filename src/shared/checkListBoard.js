import React, {useState} from 'react'
import CheckListCard from './checklistCard'

const CheckListBoard = () => {
    const [list, setList] = useState([])
    
   
    const addChL = ()=>{
        const newArray = [...list]
        newArray.push(1)
       setList(newArray)
        console.log('p');
        console.log(list);
    }
  return (
    <>
    <button onClick={addChL} className='border border-solid bg-[#052CFD] text-white w-32 rounded'>Add Checklist</button>
    <section className='flex flex-col space-y-4 overflow-auto h-52 mt-2'>
   {list.map((list)=>{
     return <CheckListCard/>
    })}
    </section>
    </>
  )
}

export default CheckListBoard