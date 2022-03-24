import "./App.css";
import { useState, useEffect } from "react";
import axios from 'axios';

function App() {
  const [description, setDescription] = useState([]);
  const [amount, setAmount] = useState([]);
  const [item, setItem] = useState([]);

  useEffect(() => {
    axios.get(URL)
      .then((response) => {
        setDescription(response.data);
      }).catch(error => {
        alert(error); 
      });
  }, [])
  
  useEffect(() => {
    axios.get(URL)
      .then((response) => {
        setAmount(response.data);
      }).catch(error => {
        alert(error); 
      });
  }, [])

  return (
    <div>
      <form>
        <div>
          <h3>Shopping list </h3>
        </div>
        <div>
          <label>New item </label>
        </div>
          <input placeholder='Description'></input>
          <input placeholder='Amount'></input>
        <div>
          <button>Add</button>
        </div>
      </form>
      <ol>
        {item?.map(item =>(
          <li key={item.id}>{item.description} {item.amount}</li>
        ))}
      </ol>
    </div>
  );
}

export default App;
