import React from 'react'

const RoomSelect = (props) => {
  return (
    <option value={props.id}>{props.room.name}</option>
  )
}

export default RoomSelect