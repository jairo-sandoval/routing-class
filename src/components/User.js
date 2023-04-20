import React from 'react';
import { Link } from 'react-router-dom';

const User = ({user}) => {
    return (
        <div className='card-user'>
            <h2>name: {user.name}</h2>
            <h3>website: {user.website}</h3>
            <p>company: {user.company?.name}</p>
            <button><Link to={`/about-us/${user.id}`}>Ir al perfil</Link> </button>
        </div>
    );
};

export default User;