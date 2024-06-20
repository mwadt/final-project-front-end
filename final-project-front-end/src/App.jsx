import { useState, useEffect } from 'react'

import './App.css'
import Navibar from './components/navbar/Navbar'
import Home from './components/home/Home'
import Create from './components/create/Create'
import List from './components/list/List'
import Edit from './components/edit/Edit'

import { getAllItineraries, updateItinerary, deleteItinerary, createItinerary } from './services/itineraryService'
import { get } from 'mongoose'




function App() {

  const [itineraryList, setItineraryList] = useState([])
  const [editId, setEditId] = useState(0)

  const [pageDisplay, setPageDisplay] = useState('home')

  const getItineraries = async () => {
    const allItineraries = await getAllItineraries()
    setItineraryList(allItineraries);
  }

  useEffect(() => {
    getItineraries()
  }, [])

  const handleDelete = async (id) => {
    await deleteItinerary(id)
    console.log('delete', id)
    getItineraries()
  }

  const handleUpdate = async (id, updatedItinerary) => {
    await updateItinerary(id, updatedItinerary);
    getItineraries();
  }

  const selectedItinerary = itineraryList.find((itinerary) => itinerary._id === editId)

  return (
  <>
  

  <div className='home'>
    <Home />
  </div>

  <div className='create'>
    <Create
    getItineraries={getAllItineraries}
    setPageDisplay={setPageDisplay} />
  </div>
  
  
  </>
  )
}
export default App
