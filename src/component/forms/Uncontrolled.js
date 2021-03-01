import React, { useRef, useState } from 'react'

const Uncontrolled = () => {

    const name = useRef( null );
    const [show, setShow] = useState( false );


    const submitForm = ( e ) => {
        e.preventDefault();

        const name = name.current.value;

        name == "" ? alert( "Please Fill the data" ) : setShow( true );
    }

    return (
        <div>
            <form action="" onSubmit={submitForm}>
                <div>
                    <label htmlFor="name">Enter Your Name</label>
                    <input type="text" id="name" ref={name} />

                </div>
                <br />
                <button>Submit</button>
            </form>
            <p>{show ? `your Name is ${name}` : ""}</p>
        </div>
    )
}

export default Uncontrolled;
