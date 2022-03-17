import React from 'react'
import { doc, deleteDoc } from 'firebase/firestore'
import { db } from './../../firebase'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import CheckIcon from '@mui/icons-material/Check'
import './Todo.css'

const Todo = ({ text }) => {
  return (
    <div className='todo'>
      <p>{text}</p>
      <div className='container-icons'>
        <CheckIcon fontSize="medium" style={{ opacity: 0.7 }} />
        <DeleteIcon fontSize="medium" style={{ opacity: 0.7 }} onClick={() => { deleteDoc(doc(db, 'todos', text)) }} />
        <EditIcon fontSize="medium" style={{ opacity: 0.7 }} />
      </div>
      
    </div>
  )
}
export default Todo
