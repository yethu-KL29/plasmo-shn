import React from 'react'

const Todolist = ({todos,settodos}) => {
  return (
    <div>
        {todos.map((todo)=>(
            <li className='list' key={todo.id}>
                <input type="text" 
                value={todo.text}
                onChange={(event)=>event.preventDefault()}
                name="" id=""/>
            </li>
        ))}
    </div>
  )
}

export default Todolist