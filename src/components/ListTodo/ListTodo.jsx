import React from 'react'
import Todo from '../Todo/Todo'
import './ListTodo.css'

function ListTodo ({ arr }) {
  return (
    <div className='list-todo'>
      {arr.map((item, index) => <Todo key={index} text={item} />)}
    </div>

  )
}

export default ListTodo
