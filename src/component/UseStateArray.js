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

    const removeElem = ( id ) => {
        const myNewArray = myArray.filter( ( curElem ) => {
            return (

                curElem.id !== id



            );

        } )
        setMyArray( myNewArray );
    }

    return ( <>

        {
            myArray.map( ( curElm ) => {
                return (
                    <div>
                        <h1 key={curElm.id}>Name:{curElm.myName} & Age:{curElm.age}
                            <button onClick={() => removeElem( curElm.id )}>delete</button>
                        </h1>

                    </div>
                );
            } )
        }
        <button onClick={clearArray}>Clear</button>
    </>
    )
}


export default UseStateArray;
