import React, { useState } from 'react';
import './App.css';


function App() {
  const [myName, setMyName] = useState( 'shivam vora', );

  const changeName = () => {
    setMyName( 'shivam vora web developer' );
  }
  return (
    <div className="App">
      <h1>{myName}</h1>
      <button onClick={changeName}>Click me</button>
    </div>
  );
}

export default App;
