
import './App.css'
import { useState, useEffect } from 'react'


import Navibar from './components/navbar/Navbar'
import Home from './components/home/Home'
import Create from './components/create/Create'
import Edit from './components/edit/Edit'

import { getAllItineraries, updateItinerary, deleteItinerary, createItinerary } from './services/itineraryService'
import { all } from 'axios'

// import { get } from 'mongoose' removed because it is not necessary




function App() {
   
  
  
  return (

    
  
  <div className='home'>
        <Home />
  </div>

  )
}
export default App
