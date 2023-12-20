import './App.css';
import { useState, useEffect } from "react"; 
import Axios fro "axios";

function App() {
  const [ListOfTrips, setListOfTrips] = useState([]);

  useEffect(() =>{
    Axios.get("url")
  }, [])
    // test object - mock data. inside useState([
    //{ id: 1, name: "Greyling", email: "greyling@gmail.com", image: "image-link"}//
 // ]);


  

  return (
    <div className="App">
      <div className="eventsDsplay">
        {ListOfTrips.map((trip) => {
          return <div>
            <h1>Name: {trip.name}</h1>
            <h1>Name: {trip.email}</h1>
            <h1>Name: {trip.image}</h1>
          </div>
        })}
      </div>
    </div>
  );
}

export default App;
