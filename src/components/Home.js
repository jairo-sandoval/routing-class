import React from 'react';
import { useSearchParams  } from 'react-router-dom';

const Home = () => {
    const [params] = useSearchParams()
    console.log(params.get('token'))
    
    return (
        <div>
            <h1>Welcome</h1>
        </div>
    );
};

export default Home;