import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom'

const SingleUser = () => {
    const {id} = useParams()
    const [user, setUser] = useState({})
    const ULR = 'jsonplaceholder.typicode.com'
    
    useEffect(() => {
        fetch(`https://${ULR}/users/${id}`)
            .then(res => res.json())
            .then(res => {
                setUser(res)
            })
    }, [])

    return (  
        <div>
            <h2>Personal profile</h2>
            ....
        </div>
    );
};

export default SingleUser;