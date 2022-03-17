
import React, { useEffect, useState } from 'react'
import './Box.css'
import AddIcon from '@mui/icons-material/Add'
import { db } from './../../firebase'
import { addDoc, collection, onSnapshot, query, serverTimestamp } from 'firebase/firestore'
import ListTodo from '../ListTodo/ListTodo'

function Box () {
  const [todos, setTodos] = useState([])
  const [input, setInput] = useState('')

  useEffect(() => {
    const q = query(collection(db, 'todos'))
    const unsub = onSnapshot(q, (querySnapshot) => {
      const todosArray = []
      querySnapshot.forEach((doc) => {
        todosArray.push(doc.data().todo)
      })
      setTodos(todosArray)
    })
    return () => unsub()
  }, [input])

  const addTodo = (e) => {
    e.preventDefault()
    setTodos([...todos, input])
    addDoc(collection(db, 'todos'), {
      todo: input,
      timestamp: serverTimestamp()
    })
    setInput('')
  }

  return (
    <>
    <div className='box'>
      <h1>AÑADIR TO-DO</h1>
      <div className='addTodo'>
        <input className='box__input'value={input} onChange={e => setInput(e.target.value)} />
        <AddIcon className='box__button' onClick={addTodo} ></AddIcon>
      </div>
    </div>

    <ListTodo arr={todos}/>

    </>
  )
}

export default Box
