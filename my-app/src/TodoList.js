import React from 'react'

export default function TodoList(props) {
    return (
        <div className='todo-style'>
            <i className="fa-solid fa-x" onClick={() => {
                props.onselet(props.id)
            }}></i>
            <li className='list-item'>{props.text}</li>
        </div>
    )
}
