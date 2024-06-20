import './Edit.css';
import Navibar from '../navbar/Navbar';
import { Form, Row, Col, Button } from 'react-bootstrap';
function Edit() {
  return (
    <>
    <Navibar />
    <div className='edit'>4
    <Form>
            <Row>
                <Form.Group>
                    <Form.Label>Trip Name:</Form.Label>
                    <Form.Control type='text' placeholder='enter trip name here' />
                </Form.Group>
            </Row>

            <Row>
                <Col md>
                <Form.Group controlId='formEmail'>
                    <Form.Label>Location:</Form.Label>
                    <Form.Control type='text' placeholder='s' />
                </Form.Group>
                </Col>
                
                <Col md>
                <Form.Group controlId='formSelect'>
                    <Form.Label>Trip Type:</Form.Label>
                    <Form.Select aria-label="Select Trip type">
                        <option selected>select trip type</option>
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
                <Form.Group>
                    <Form.Label>Start Date:</Form.Label>
                    <Form.Control type='date' />
                </Form.Group>
                </Col>
                <Col>
                <Form.Group>
                    <Form.Label>End Date:</Form.Label>
                    <Form.Control type='date' />
                </Form.Group>
                </Col>
            </Row>

            <Row>
                <Form.Group>
                    <Form.Label>Notes:</Form.Label>
                    <Form.Control as='textarea' rows={3} />
                </Form.Group>
            </Row>
        </Form>
        <Row>
        <Button variant='secondary' type='submit'>Submit</Button>\
        </Row>
    </div>
    </>
  )
}
export default Edit;