import React from 'react'
import { doc, deleteDoc } from 'firebase/firestore'
import { db } from './../../firebase'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import CheckIcon from '@mui/icons-material/Check'
import './Todo.css'

const Todo = ({ text, arr, ids, index }) => {
  const handleDelete = () => {
    deleteDoc(doc(db, 'todos', ids[index]))
  }

  return (
    <div className='todo'>
      <p>{text}</p>
      <div className='container-icons'>
        <CheckIcon fontSize="medium" style={{ opacity: 0.7 }} />
        <DeleteIcon fontSize="medium" style={{ opacity: 0.7 }} onClick={handleDelete} />
        <EditIcon fontSize="medium" style={{ opacity: 0.7 }} />
      </div>

    </div>
  )
}
export default Todo
