import './Create.css';
import Navbar from '../navbar/Navbar';
function Create() {
  return (
    <>
    <Navbar />
    <div>
      <form action="post">
        <label for="location">Location:</label>
        <input 
            type="text" 
            id="location" 
            name="location"
        />

        <label for="date">Date:</label>
        <input 
            type="date"    
            id="date" 
            name="date"
        />
        <label for="time">Time:</label>
        <input 
            type="time" 
            id="time" 
            name="time"
        />

        <label for="description">Description:</label>
        <input 
        type="text" 
        id="description" 
        name="description"
        />

        <button type="submit">Submit</button>

      </form>
    </div>
    </>
  )
}
export default Create;