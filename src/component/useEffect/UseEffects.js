import React, { useEffect, useState } from 'react'

const UseEffects = () => {

    const [count, setCount] = useState( 0 );

    useEffect( () => {
        document.title = `Chats (${count})`
    } )

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => setCount( count + 1 )}>Click🔍💡</button>
        </div>
    )
}

export default UseEffects;
