import React, { useEffect, useState } from 'react';
import User from './User';

const AboutUs = () => {
    const [ users, setUsers ] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(res => setUsers(res))
    }, [ ])

    return (
        <div>
            <h1>About us </h1>
            <p>chuma is a world wide company</p>

            <div className='wrapper-users'>
                {
                    users.map(user => <User key={user.id} user={user}/>)
                }

            </div>
        </div>
    );
};

export default AboutUs;