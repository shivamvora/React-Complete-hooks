import React, { useReducer } from 'react'

const initialState = 0;

const reducer = ( state, action ) => {
    if ( action.type === "INCREMENT" ) {
        return state + 1;
    }
    if ( action.type === "DECREMENT" ) {

        return state - 1;
    }

    return state;


}
const UserReducer = () => {

    const [state, dispatch] = useReducer( reducer, initialState );

    return (
        <div>
            <p>{state}</p>
            <div>
                <button onClick={() => dispatch( { type: "INCREMENT" } )}>Inc</button>
                <button onClick={() => dispatch( { type: "DECREMENT" } )}>Dec</button>
            </div>
        </div>
    )
}

export default UserReducer;
