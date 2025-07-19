import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {

    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => console.log(data))
    }, [])
    return (
        <div>
            <h1>Home</h1>

        </div>
    );
};

export default Home;