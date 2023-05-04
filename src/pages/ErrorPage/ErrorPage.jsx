import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='text-center'>
            <img
                src="http://www.veepixel.com/tf/html/sous/assets/images/404.jpg"
                alt=""
                className='mx-auto mt-40'
            />
            <h1 className='text-5xl text-center'> 404 </h1>
            <p>page not found</p>

            <Link to="/">
                <button className='btn'> Home Page</button>
            </Link>
        </div>
    );
};

export default ErrorPage;