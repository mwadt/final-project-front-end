import "./Edit.css";
import Navibar from "../navbar/Navbar";
import { Form, Row, Col, Button, Container } from "react-bootstrap";
import { updateItinerary, getItinerary } from "../../services/itineraryService";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";



function Edit() {
  const { id } = useParams();

    const navigate = useNavigate();

  const [itinerary, setItinerary] = useState([]);

  useEffect(() => {
    const getDbItinerary = async () => {
      const dbItinerary = await getItinerary(id);
      console.log("get itineraries function: get itinerary", dbItinerary);
      setItinerary(dbItinerary);
    };
    getDbItinerary();
  }, [id]);

  const updateItineraryData = (key, value) => {
    setItinerary((prevItinerary) => ({
      ...prevItinerary,
      [key]: value,
    }));
  };

  const handleUpdate = async (event) => {
    event.preventDefault();
    await updateItinerary(id, itinerary);
    
    console.log('navigating')
    navigate("/itineraries");
  };

  return (
    <>
    <Container fluid>
      <Navibar />
      <div className="edit">
        <Form onSubmit={handleUpdate}>
          <Row>
            <Form.Group>
              <Form.Label>Trip Name:</Form.Label>
              <Form.Control
                type="text"
                onChange={(event) => {
                  updateItineraryData("tripName", event.target.value);
                }}
                value={itinerary.tripName}
                placeholder="enter trip name here"
              />
            </Form.Group>
          </Row>

          <Row>
            <Col md>
              <Form.Group controlId="location">
                <Form.Label>Location:</Form.Label>
                <Form.Control
                  type="text"
                  onChange={(event) => {
                    updateItineraryData("location", event.target.value);
                  }}
                  value={itinerary.location}
                  placeholder=""
                />
              </Form.Group>
            </Col>

            <Col md>
              <Form.Group controlId="formSelect">
                <Form.Label>Trip Type:</Form.Label>
                <Form.Select
                  value={itinerary.tripType}
                  aria-label="Select Trip type"
                  onChange={(event) => {
                    updateItineraryData("tripType", event.target.value);
                  }}
                >
                  <option>select trip type</option>
                  <option value="1">Business</option>
                  <option value="2">Vacation</option>
                  <option value="3">Family/friends visit</option>
                  <option value="4">Other</option>
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col>
              <Form.Group>
                <Form.Label>Start Date:</Form.Label>
                <Form.Control
                  type="date"
                  onChange={(event) => {
                    updateItineraryData("startDate", event.target.value);
                  }}
                  value={itinerary.startDate}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label>End Date:</Form.Label>
                <Form.Control
                  type="date"
                  onChange={(event) => {
                    updateItineraryData("endDate", event.target.value);
                  }}
                  value={itinerary.endDate}
                />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Form.Group>
              <Form.Label>Notes:</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                onChange={(event) => {
                  updateItineraryData("notes", event.target.value);
                }}
                value={itinerary.notes}
              />
            </Form.Group>
          </Row>
          <Row>
            <Button variant="secondary" type="submit">
              Submit
            </Button>
          </Row>
        </Form>
        
      </div>
      </Container>
    </>
  );
}
export default Edit;
