import './App.css';
import { useState, useEffect } from "react"; 
import Axios from "axios";

function App() {
  const [ListOfMementos, setListOfMementos] = useState([]);

  useEffect(() =>{
    Axios.get("http://localhost:3000/getMementos").then((response) => {
      setListOfMementos(response.data);
    })
  }, [])
    // test object - mock data. inside useState([
    //{ id: 1, name: "Greyling", email: "greyling@gmail.com", image: "image-link"}//
 // ]);
  return (
    <div className="App">
      <div className="mementosDsplay">
        {ListOfMementos.map((memento) => {
          return <div>
            <h1>Name: {memento.name}</h1>
            <h1>Name: {memento.email}</h1>
            <h1>Name: {memento.image}</h1>
          </div>
        })}
      </div>
    </div>
  );
}

export default App;
