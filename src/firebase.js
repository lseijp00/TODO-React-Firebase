import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseApp = initializeApp({
  apiKey: 'AIzaSyDiggI_lLxEsKL1-RYVyI05gP0iEfxxG6U',
  authDomain: 'todo-react-app-4a257.firebaseapp.com',
  projectId: 'todo-react-app-4a257',
  storageBucket: 'todo-react-app-4a257.appspot.com',
  messagingSenderId: '157671784103',
  appId: '1:157671784103:web:8f25761fdd661f24fba582',
  measurementId: 'G-G4B4EEG52E'
})

const db = getFirestore(firebaseApp)

export { db }
