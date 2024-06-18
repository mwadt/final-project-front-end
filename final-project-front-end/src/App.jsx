import { useState } from 'react'

import './App.css'
import Navbar from './components/navbar/Navbar'
import Home from './components/home/Home'
import Create from './components/create/Create'

function App() {
  return (
  <>
  <section>
    <Navbar />   
  </section>

  <div className='home'>
    <Home />
  </div>
  
  
  </>
  )
}
export default App
