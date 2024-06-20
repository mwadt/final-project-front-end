import { redirect } from 'react-router-dom';
import './Navbar.css';



function Navbar() {
  return (
    <div className="navbar">
      {/* <ul>
        <li onClick={() => redirect('/')}>Home</li>
        <li onClick={() => redirect('/create')}>Create</li>
      </ul> */}
        <a href="/create">New Itenerary</a> 
        <a href="/list">All Iteneraries</a>
    </div>
  );
}

export default Navbar;