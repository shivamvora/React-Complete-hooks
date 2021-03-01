import React, { createContext } from 'react'
import ComB from '../forms/ComB'


const BioData = createContext();

function ComA() {
    return (
        <div>
            <BioData.Provider value={"Shivam vora"}>
                <ComB />
            </BioData.Provider>

        </div>
    )
}

export default ComA;
export { BioData };