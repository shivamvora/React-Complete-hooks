import React, { useState } from 'react'

const UseStateObject = () => {
    const [myObject, setmyObject] = useState( {
        myName: "shivam vora", myAge: 20, degree: "BCA"
    } );

    const changeObject = () => {
        setmyObject( { ...myObject, myName: "shiva" } );
    }
    return (
        <div>
            <h1>Name: {myObject.myName} & Age:{myObject.myAge} & Degree: {myObject.degree}</h1>
            <button onClick={changeObject}>Update</button>
        </div>
    )
}

export default UseStateObject;
