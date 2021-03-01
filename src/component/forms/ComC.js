import React, { useContext } from 'react'
import { BioData } from "../Usecontext/ComA";

const ComC = () => {
    const userName = useContext( BioData );
    return (
        <div>
            <h1>hello comC {userName}</h1>
        </div>
    )
}

export default ComC;
