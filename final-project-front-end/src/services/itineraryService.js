
export const getAllItineraries = async () => {
  try {
    const response = await fetch(`http://localhost:3000/itineraries`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
  const result = await response.json();
  console.log(result);
  return result;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }

  return response.json();
}

export const updateItinerary = async (id, itinerary) => {
    try {
        const response = await fetch(`http://localhost:3000/itineraries/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(itinerary),
    })
        const result = await response.json();
        return result;
} catch (error) {
    console.error('Error:', error);
    throw error;        
}
}

export const deleteItinerary = async (id) => {
    try {
        const response = await fetch(`http://localhost:3000/itineraries/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
    })
        const result = await response.json();
        return result;
} catch (error) {
    console.error('Error deleting Itinerary', error);
    throw error;        
}
}

export const createItinerary = async (itinerary) => {
    try {
        const response = await fetch(`http://localhost:3000/itineraries`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(itinerary),
    })
        const result = await response.json();
        return result;
} catch (error) {
    console.error('Error creating itinerary', error);
    throw error;        
}
}