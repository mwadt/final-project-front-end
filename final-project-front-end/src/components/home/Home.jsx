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
    
        <Container fluid>
        
       <Navibar />
       <div className='home'>
        
        <h1>Welcome to the Travel App</h1>
        <h2>Discover the ultimate simplicity in travel planning with our Travel Itinerary App! Effortlessly create, edit, view, and delete your travel plans all in one place. Whether you're organizing a weekend getaway or a month-long adventure,
           our user-friendly interface makes it easy to manage your itinerary on the go. Simplify your travel experience and focus on enjoying your journey with our intuitive app.</h2>
         {/* <Card class>
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>Card Text</Card.Text>
                <Button variant='primary'>Read More</Button>
            </Card.Body>
        </Card>  */}
        
        
        </div>
        </Container>
    
  )
}

export default Home;