import './App.css'
import Navbar from './Components/Navbar'
import Content from './Components/Content'
import { useState } from 'react'

const App = () => {

  const [darkmode, setDarkMode] = useState(true)

  const handleDark = () => {
    return setDarkMode(!darkmode)
  }

  return (
    <>
      <Navbar onClick={handleDark} dark={darkmode}/>
      <Content dark={darkmode}/>
    </>
  )
}

export default App