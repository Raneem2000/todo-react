import React from 'react'
import Todo from './Todo'

export default function TodoList({todos,removeTodo,toggleComplete}) {
  return (
    <div style={{padding:"36px" ,border: "1px solid  #444"}}>
        {todos.map(todo => {
            return <Todo todo={todo} removeTodo={removeTodo} toggleComplete={toggleComplete}/>
        })}
            
    </div>
  )
}


