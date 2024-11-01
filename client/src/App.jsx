import { useState } from 'react'
import './App.css'
import Canvas from './canvas'
import Customizer from './pages/Customizer'
import Home from './pages/Home.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className='app transition-all ease-in'>
      <Home/>
      <Canvas/>
      <Customizer/>

    </main>
  )
}

export default App
