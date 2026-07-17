import { useState } from 'react'
import styles from './App.module.css'
import Home from "./pages/home"
import About from './pages/about'

function App() {
  return (
    <div className={styles.app}>
      <Home></Home>
      <About></About>
    </div>
  )
}

export default App
