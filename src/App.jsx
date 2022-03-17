import './App.css'
import { Title } from './components/Title/Title'
import Box from './components/Box/Box'

import * as React from 'react'

function App () {
  return (
    <div className="App">
      <iframe className='videoBaute' width="560" height="315" src="https://www.youtube.com/embed/9xEKOO90x54" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
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
