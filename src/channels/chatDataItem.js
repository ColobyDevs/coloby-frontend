
function ChatDataItem(props){

    const {type, message, time, sender} = props
  
    if(props){

        return(<>  
    <div className="flex flex-col">
        <div className="flex flex-row">
        <span className="rounded-full w-4 h-4 text-center bg-yellow-500">{sender[0].toUpperCase()}</span>
     <p className={`bg-gray-400 field-text mt-2 flex flex-row chatbox rounded-2xl py-3 px-2 max-w-max w-24 text-white h-auto ${type === 'firstP' ? 'ml-auto  colour  rounded-tr-none ': 'rounded-tl-none'}`}>{message}</p>
        </div>
     <span className="ml-5">{time}</span>
    </div>
        </>)
        }
}

export default ChatDataItem