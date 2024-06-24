

const backendBaseUrl = import.meta.env.VITE_APP_BACKEND_URL;

export const getAllItineraries = async () => {
  try {
    const response = await fetch(`${backendBaseUrl}/itineraries`, {
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

export const getItinerary = async (id) => {
    try {
      const response = await fetch(`${backendBaseUrl}/itineraries/${id}`, {
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
        const response = await fetch(`${backendBaseUrl}/itineraries/${id}`, {
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
        const response = await fetch(`${backendBaseUrl}/itineraries/${id}`, {
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
        const response = await fetch(`${backendBaseUrl}/itineraries`, {
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

// ${backendBaseUrl}