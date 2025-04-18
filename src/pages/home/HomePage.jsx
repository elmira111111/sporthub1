import React from 'react';
import {Link} from "react-router-dom";

const HomePage = () => {
    return (
        <div style={{display: 'flex', gap: '20px'}}>
            <Link to={'/register'}>register</Link>
            <Link to={'/login'}>Login</Link>
            <Link to={'/pincode'}>pinCode</Link>
            <Link to={'/imregister'}>importRegister</Link>
            <Link to={'/reklama'}>reklama</Link>
            <Link to={'/basketbol'}>Basketbol</Link>
        </div>
    );
};

export default HomePage;