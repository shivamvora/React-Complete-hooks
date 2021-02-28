import React, { useState } from 'react'

const ShortCircuit = () => {
    const [demo, setDemo] = useState( "" );
    return (
        <div>
            <h1>
                {
                    demo || "vora"
                }
            </h1>
            <h1>{demo && "shivam"} </h1>
        </div>
    )
}

export default ShortCircuit;
