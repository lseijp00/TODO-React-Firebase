import React from 'react'
import Todo from '../Todo/Todo'
import './ListTodo.css'

function ListTodo ({ arr, ids }) {
  return (
    <div className='list-todo'>
      {arr.map((item, index) => <Todo ids={ids} arr={arr} key={index} index={index} text={item} />)}
    </div>

  )
}

export default ListTodo
