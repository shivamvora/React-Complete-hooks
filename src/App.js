import React, { useState } from 'react';
import './App.css';
import UseStateArray from './component/UseStateArray';
import UseStateObject from './component/UseStateObject';
import ShortCircuit from './ShortCircuit';
import BasicForm from './component/forms/basicForm';


function App() {
  // const [myName, setMyName] = useState( 'shivam vora', );

  // const changeName = () => {

  //   let val = myName;

  //   if ( val === 'shivam vora' ) {
  //     setMyName( 'shivam vora web developer' );

  //   }
  //   else {
  //     setMyName( 'shivam vora' )
  //   }

  // }
  return (
    <div className="App">
      {/* <h1>{myName}</h1>
      <button onClick={changeName}>Click me</button> */}
      {/* <UseStateArray /> */}
      {/* <UseStateObject /> */}
      {/* <ShortCircuit /> */}
      <BasicForm />
    </div>
  );
}

export default App;
