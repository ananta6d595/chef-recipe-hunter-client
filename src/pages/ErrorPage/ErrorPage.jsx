import React from 'react';

const ErrorPage = () => {
    return (
        <div className='text-center'>
            <img
                src="http://www.veepixel.com/tf/html/sous/assets/images/404.jpg"
                alt=""
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