import React, { useState } from 'react'

const UseStateArray = () => {
    const bioData = [
        {
            id: 0,
            myName: "shivam",
            age: 20
        },
        {
            id: 1,
            myName: "jemin patel",
            age: 28

        }
    ]
    console.log( bioData );

    const [myArray, setMyArray] = useState( bioData );

    const clearArray = () => {
        setMyArray( [] );
    }

    return (
        <>
            {
                myArray.map( ( curElm ) => <h1 key={curElm.id}> id: {curElm.id}    Name: {curElm.myName} & Age: {curElm.age} </h1> )

            }
            <button onClick={clearArray}>clear</button>
        </>
    )
}

export default UseStateArray;
