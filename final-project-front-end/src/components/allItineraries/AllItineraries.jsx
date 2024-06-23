import { all } from "axios";
import Navibar from "../navbar/Navbar";
import React from "react";
import Card from "react-bootstrap/Card";
import { useState, useEffect } from 'react'
import { getAllItineraries, updateItinerary, deleteItinerary, createItinerary } from '../../services/itineraryService'
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import './AllItineraries.css'


function AllItineraries() {
  console.log('List component rendering...'); // Log when component renders
   
  
  const [itineraryList, setItineraryList] = useState([])
  const [editId, setEditId] = useState(0)

  const getItineraries = async () => {
    const allItineraries = await getAllItineraries()
    console.log('get itineraries function: allItineraries', allItineraries)
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
   <Navibar />
 
    
      
       <Container>
        <div className="all-itineraries">
         {itineraryList.map((itinerary) => (
         <Card key={itinerary._id}>
        
              <h3>{itinerary.tripName}</h3>
              <p>{itinerary.location}</p>
              <p>{itinerary.startDate}</p>
              <p>{itinerary.endDate}</p>
              <p>{itinerary.notes}</p>
              <Link to={`/itineraries/edit/${itinerary._id}`} >
              <button className='edit-button' >Edit</button>
              </Link>
              <button className='delete-button' onClick={() => handleDelete(itinerary._id)}>Delete</button>
        </Card>
        
        ))
        }
        </div>
      </Container>
  </>
  );
}

export default AllItineraries;