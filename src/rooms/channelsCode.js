import { useRef, useState, useContext } from 'react';
import { Context } from '../context/context';
import './channels.css';
import { IoIosCode } from "react-icons/io";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useHttp } from '../hooks/httpHook';

export default function ChannelsCode(){
    const {token} = useContext(Context).auth
    const [showAddFile, setShowAddFile] = useState(true)
    const [file, setFile] = useState('')
    const inputRef = useRef()

    const showAddFileHandler = ()=>{
        setShowAddFile(!showAddFile)
    }
    const uploadFileHandler = ()=>{
        inputRef.current.click()
    }

    //     formData.append('description', 'description')
    //     formData.appendd
    // console.log(formData);
    const pickFileHandler = (e) => {
        if (e.target.files && e.target.files.length === 1) {
            const pickedFile = e.target.files[0]
            setFile(pickedFile)
            return;
        }
    }

    console.log(file);
    const formData = new FormData();
    const description = 'test file'
    formData.append('file', file)
    formData.append('description', description)
    
    console.log(formData.get('file'));
    const header = {
        'Content-Type': 'multipart/form-data; boundary=some-random-string',
         Authorization: "Bearer " + token,
      };

    const body = {
        method: "POST",
        body: formData,
        headers: header,
      };


    const api = 'https://coloby.onrender.com/api/v1/room/upload/file/test-room_srpg/'


    const [httpHandler] = useHttp(body, api, 'uploadFile')

    return(<section className="border mt-6 bg-white">
        <div className=" h-10 px-4 border-b w-full flex flex-row items-center">
        <h1 className="text-xs">Focus Board</h1>
        </div>
        <div className=" text-xs h-12 px-4 border-b w-full flex flex-row items-center">
        <button className="text-xs border bg-blue-200 text-white rounded-sm">Codebase</button>
        </div>
        <article className=" h-8 text-xs px-4 border-b w-full flex flex-row justify-between items-center">
            <div className="flex flex-row space-x-4">
        <img src="" alt="" className="rounded-full border border-gray-800 h-4 w-4"/>
        <h1 className="text-xs">Kedina Hover method</h1>
            </div>
            <div className="space-x-4 text-xxs flex flex-row">
                <button onClick={httpHandler} className="border w-16 h-6 colour text-white rounded-md flex flex-row justify-center items-center px-2 gap-x-2"><IoIosCode/>Code</button>
                <button onClick={showAddFileHandler} className="border w-20 h-6 flex flex-row justify-center text-xs items-center px-1 gap-x-1">Add File<MdKeyboardArrowDown/></button>
            </div>
            <div className={ `${showAddFile ? 'hidden': 'visible'} items-center justify-center border flex flex-col bg-white mr-4 right-0  mt-24 space-y-2 rounded-md h-16 w-20 absolute`} onClick={uploadFileHandler}><button className='border-b-2 w-full text-center'>Import File</button><button>Write code</button></div>
            <input type='file' accept=".xlsx,.xls, .js, .css, .html, .tsx, .py .doc, .docx,.ppt, .pptx,.txt" ref={inputRef} className='hidden' onChange={pickFileHandler}/>
        </article>
        <div className='h-8'></div>
    </section>)
}