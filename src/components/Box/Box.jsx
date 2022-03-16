
import React, { useEffect, useState } from 'react'
import './Box.css'
import { TextField, Button } from '@mui/material'
import Todo from '../Todo/Todo'

import { db } from './../../firebase'
import { addDoc, collection, getDocs } from 'firebase/firestore'

function Box () {
  const [todos, setTodos] = useState([])
  const [input, setInput] = useState('')

  useEffect(() => {
    async function querySnapshot () {
      const data = await getDocs(collection(db, 'todos'))
      const arrTodos = []
      data.forEach((doc) => {
        arrTodos.push(doc.data().todo)
      })
      setTodos(arrTodos)
    }
    querySnapshot()
  }, [input])

  const addTodo = (e) => {
    e.preventDefault()
    setTodos([...todos, input])
    addDoc(collection(db, 'todos'), {
      todo: input
    })
    setInput('')
  }

  return (
    <div className='Box'>
      <h1>Hola buenas</h1>
      <form>
        <TextField label="Make Todo" value={input} onChange={e => setInput(e.target.value)} />
        <Button variant="contained" color="primary" onClick={addTodo} >Add Todo</Button>
      </form>
      <ul>
        {todos.map((item, index) => <Todo key={index} text={item} />)}
      </ul>
    </div>
  )
}

export default Box
