import './App.css'
import { Title } from './components/Title/Title'
import Box from './components/Box/Box'

import * as React from 'react'

function App () {
  return (
    <div className="App">
      <header className="App-header">
        <Title />
      </header>
      <main className="App-content">
        <Box />
      </main>
    </div>
  )
}

export default App
