import './Create.css';
import Navibar from '../navbar/Navbar';
import { Form, Row, Col, Button, Container, Modal } from 'react-bootstrap';
import { useState, useEffect } from 'react'
import { getAllItineraries, updateItinerary, deleteItinerary, createItinerary } from '../../services/itineraryService'
import { Router, useNavigate } from 'react-router-dom';



// import {get, set} from 'mongoose'


function Create() {
  console.log('Create component rendering...'); // Log when component renders
  
  
  const [itinerary, setItinerary] = useState({
    tripName: "",
    location: "",
    tripType: '',
    startDate: '',
    endDate: '',
    notes: ''
  })

  // const handleChange = (e) => {
  //   setItinerary({...itinerary, [e.target.name]: e.target.value});
  // }

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setItinerary((prevState) => ({
  //     ...prevState,
  //     [name]: value,
  //   }));
  // };
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(`Changing ${name} to ${value}`); // Log input changes
    setItinerary((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Submitting form...'); // Log when form submission starts
    console.log('Itinerary data:', itinerary); // Log the current state data
    try {
      const result = await createItinerary(itinerary);
      console.log('Itinerary created:', result); // Log the response from the API
      navigate('/itineraries') 
    } catch (error) {
      console.error('Error creating itinerary:', error); // Log any errors
    }
  };

  return (
    <>
    <Container fluid>
    <Navibar />

    <div className='create'>
    <Form onSubmit={ handleSubmit }>
            <Row>
                <Form.Group controlId='tripName'>
                    <Form.Label>Trip Name:</Form.Label>
                    <Form.Control type='text' placeholder='enter trip name here' value={itinerary.tripName} name='tripName' onChange={handleChange}/>
                </Form.Group>
            </Row>

            <Row>
                <Col md>
                <Form.Group controlId='location'>
                    <Form.Label>Location:</Form.Label>
                    <Form.Control type='text' placeholder='enter location' value={itinerary.location} name='location' onChange={handleChange}/>
                </Form.Group>
                </Col>
                
            
            <Col md>
                <Form.Group controlId='tripType'>
                    <Form.Label>Trip Type:</Form.Label>
                    <Form.Select aria-label="Select Trip type" value={itinerary.tripType} name='tripType' onChange={handleChange}>
                        {/* <option selected>select trip type</option> */}
                        <option value='1'>Business</option>
                        <option value='2'>Vacation</option>
                        <option value='3'>Family/friends visit</option>
                        <option value='4'>Other</option>
                    </Form.Select>
                </Form.Group>
                </Col>
            </Row>
               
            <Row>
            <Col>
                <Form.Group controlId='startDate'>
                    <Form.Label>Start Date:</Form.Label>
                    <Form.Control type='date' value={itinerary.startDate} name='startDate' onChange={handleChange} />
                </Form.Group>
                </Col>
                <Col>
                <Form.Group controlId='endDate'>
                    <Form.Label>End Date:</Form.Label>
                    <Form.Control type='date' name='endDate' value={itinerary.endDate} onChange={handleChange}/>
                </Form.Group>
                </Col>
            </Row>


            <Row>
                <Form.Group controlId='notes'>
                    <Form.Label>Notes:</Form.Label>
                    <Form.Control as='textarea' value={itinerary.notes} name='notes' rows={3} onChange={handleChange}/>
                </Form.Group>
            </Row>
            <Row>
             
            <Button variant='secondary'  type='submit'>Submit</Button>
            </Row>

        </Form>
        
    </div>
    </Container>
    </>
  )
}
export default Create;

// function Activity() {
//   const [smShow, setSmShow] = useState(false);
//   const [lgShow, setLgShow] = useState(false);

//   return (
//     <>
//       <Button onClick={() => setSmShow(true)} className="me-2">
//         Add a new activity
//       </Button>
//       <Button onClick={() => setLgShow(true)}>Large modal</Button>
//       <Modal
//         size="sm"
//         show={smShow}
//         onHide={() => setSmShow(false)}
//         aria-labelledby="example-modal-sizes-title-sm"
//       >
//         <Modal.Header closeButton>
//           <Modal.Title id="example-modal-sizes-title-sm">
//             Small Modal
//           </Modal.Title>
//         </Modal.Header>
//         <Modal.Body>...</Modal.Body>
//       </Modal>
      
//     </>
//   );
// }

// export Activity;