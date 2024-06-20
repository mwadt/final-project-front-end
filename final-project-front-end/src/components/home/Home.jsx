import './Home.css';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';


function Home() {
  return (
    <div className='home'>
        <Container fluid>
        
        <Form>
            <Row>
                <Col md>
                <Form.Group controlId='formEmail'>
                    <Form.Label>Date:</Form.Label>
                    <Form.Control type='email' placeholder='Example@email.com' />
                    <Form.Text className='text-muted'>We'll never share your email with anyone else.</Form.Text>
                </Form.Group>
                </Col>
                <Col>
                <Form.Group controlId='formPassword'>
                    <Form.Label>Destination:</Form.Label>
                    <Form.Control type='password' placeholder='password' />
                </Form.Group>
                </Col>
                <Col md>
                <Form.Group controlId='formPassword'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type='password' placeholder='password' />
                </Form.Group>
                </Col>
            </Row>
        </Form>
        
        <Button variant='secondary' type='submit'>Login</Button>
        <h1>Welcome to the Travel App</h1>
        <p>Placeholder text blurb</p>
        <Card class>
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>Card Text</Card.Text>
                <Button variant='primary'>Read More</Button>
            </Card.Body>
        </Card>
        <Breadcrumb>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>Create</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            </Breadcrumb>
        <Alert variant='success'>This is a primary alert</Alert>
        <Button>Test Button</Button>
        </Container>
    </div>
  )
}

export default Home;