import { redirect } from 'react-router-dom';
import './Navbar.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown  from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';


function Navibar() {
  return (
    <div className="navbar">
    {/* // <Navbar bg="light" expand="lg">
      <Container>
    //   <Navbar.Brand href="/">Travel Itenerary</Navbar.Brand>
    //   <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //   <Navbar.Collapse id="basic-navbar-nav">
    //     <Nav className="me-auto"> 
    //       <Nav.Link href="/">Home</Nav.Link>
    //       <Nav.Link href="/create">New Itenerary</Nav.Link>
    //       <Nav.Link href="/itineraries">All Iteneraries</Nav.Link>
    //       <NavDropdown>
    //         <NavDropdown.Item href="/">Home</NavDropdown.Item>
    //         <NavDropdown.Item href="/itineraries">List</NavDropdown.Item>
    //         <NavDropdown.Item href="/create">Create</NavDropdown.Item>
    //         

    //       </NavDropdown>
    //     </Nav>
    //   </Navbar.Collapse>
    </Container>
    // </Navbar> */}


    
      {/* <ul>
        <li onClick={() => redirect('/')}>Home</li>
        <li onClick={() => redirect('/create')}>Create</li>
        <li onClick={() => redirect('/')}>List</li>
      </ul> */}

        <Link to="/">Home</Link>
        <Link to="/create">New Itenerary</Link> 
        <Link to="/itineraries">All Iteneraries</Link>
    </div>
  );
}

export default Navibar;