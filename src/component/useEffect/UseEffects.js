import React, { useEffect, useState } from 'react'

const UseEffects = () => {

    const [count, setCount] = useState( 0 );


    useEffect( () => {
        if ( count >= 1 ) {
            document.title = `Chats (${count})`
        }
        else {
            document.title = `Chats Empty`
        }
    } )

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => setCount( count + 1 )}>Click🔍💡</button>
        </div>
    )
}

export default UseEffects;
