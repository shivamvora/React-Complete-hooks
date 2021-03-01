import React, { useEffect, useState } from 'react'
import Loading from './Loading';

const UseEffectAPI = () => {

    const [users, setUsers] = useState( [] );
    const [loading, setLoading] = useState( true );

    const getUsers = async () => {
        try {
            setLoading( false );
            const response = await fetch( 'https://jsonplaceholder.typicode.com/albums/1/photos' );

            setUsers( await response.json() );

        } catch ( error ) {
            console.log( error );
        }
    }

    useEffect( () => {
        getUsers();
    }, [] );

    if ( loading ) {
        return <Loading />
    }

    return (
        <>
            <h2>List of Gitub Users</h2>
            <div className="container-fluid mt-5">
                <div className="row text-center">

                    {
                        users.map( ( curElem ) => {
                            return (
                                <div>
                                    <div className="com-10 col-md-4 mt-5">
                                        <div className="card p-2">
                                            <div className="d-flex align-items-center">
                                                <div className="image"><img src={curElem.thumbnailUrl} className="rounded" width="155" alt="" /></div>
                                                <div className="ml-3 w-100">
                                                    <h4 className="mb-0 mt-0 textLeft">{curElem.login}</h4><span className="textLeft">{curElem.title}</span>
                                                    <div className="p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats">
                                                        <div className="d-flex flex-column"> <span className="articles">Aritcles</span> <span className="number1">38</span> </div>
                                                        <div className="d-flex flex-column"> <span className="followers">Followers</span> <span className="number2">980</span> </div>
                                                        <div className="d-flex flex-column"> <span className="rating">Rating</span> <span className="number3">8.9</span> </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        } )
                    }


                </div>
            </div>
        </>
    )
}

export default UseEffectAPI;
