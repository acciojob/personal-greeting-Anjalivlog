
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {

  const [name, setName] = useState('');

  const handleChange = (event) => {
    setName(event.target.value);
  }
  
  return (
    <div className="App">
    <div className="Appp">
      <label>Enter your name:</label>
      <input type="text" onChange={handleChange}></input>
    </div>
    {name && <p>Hello, {name}</p>}
    </div>
  )
}

export default App
