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
import Navibar from '../navbar/Navbar';
import { Nav } from 'react-bootstrap';


function Home() {
  return (
    <div className='home'>
        <Container fluid>
        
       <Navibar />
        
        
        <h1>Welcome to the Travel App</h1>
        <p>Placeholder text blurb</p>
        {/* <Card class>
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
        <Button>Test Button</Button> */}
        </Container>
    </div>
  )
}

export default Home;