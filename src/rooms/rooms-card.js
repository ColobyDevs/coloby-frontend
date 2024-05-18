
const RoomsTasks = (props)=>{
    return(

        <option value={props.room.i}>{props.room.name}</option>
    )
}

const RoomsSidebar = (props)=>{
    return(
        <h1>
        {props.room.name}
      </h1>
    )
}

export {RoomsSidebar, RoomsTasks}