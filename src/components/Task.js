import {FaTimes} from 'react-icons/fa'
import React, { useRef } from 'react';

import Draggable from 'react-draggable'

const Task = ({  task, onDelete, onToggle }) => {
    const ChipStyles = useRef({
        position: 'absolute',
        top: Math.random()*620,
        left: Math.random()*900,
        right: Math.random()*130,
        transform: `translate(706px, 219px)`
    });
    return(
        <Draggable > 
        <div style={ChipStyles.current} className='noteBox' onDoubleClick={() => onToggle(task.id)} >
        <h3> {task.text} {' '}
        <FaTimes 
         style={{color:'red', cursor:'pointer'}}
         onClick={() => onDelete(task.id)}
         />
        </h3>
        <p>{task.day}</p>
        </div>
        </Draggable>
    )
}
export default Task