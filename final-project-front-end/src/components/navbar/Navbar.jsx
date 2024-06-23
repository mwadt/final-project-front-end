import { redirect } from 'react-router-dom';
import './Navbar.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown  from 'react-bootstrap/NavDropdown';


function Navibar() {
  return (
    // <Navbar bg="light" expand="lg">
    //   <Navbar.Brand href="/">Travel Itenerary</Navbar.Brand>
    //   <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //   <Navbar.Collapse id="basic-navbar-nav">
    //     <Nav className="mr-auto"> 
    //       <Nav.Link href="/">Home</Nav.Link>
    //       <Nav.Link href="/create">New Itenerary</Nav.Link>
    //       <Nav.Link href="/itineraries">All Iteneraries</Nav.Link>
    //       <NavDropdown>
    //         <NavDropdown.Item href="/">Home</NavDropdown.Item>
    //         <NavDropdown.Item href="/itineraries">List</NavDropdown.Item>
    //         <NavDropdown.Item href="/create">Create</NavDropdown.Item>
    //         <NavDropdown.Item href="/edit">Edit</NavDropdown.Item>

    //       </NavDropdown>
    //     </Nav>
    //   </Navbar.Collapse>
    // </Navbar>
    <div className="navbar">
      {/* <ul>
        <li onClick={() => redirect('/')}>Home</li>
        <li onClick={() => redirect('/create')}>Create</li>
        <li onClick={() => redirect('/')}>List</li>
      </ul> */}
        <a href="/">Home</a>
        <a href="/create">New Itenerary</a> 
        <a href="/itineraries">All Iteneraries</a>
    </div>
  );
}

export default Navibar;