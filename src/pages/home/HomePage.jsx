import React from 'react';
import {Link} from "react-router-dom";

const HomePage = () => {
    return (
        <div>
            <Link to={'/register'}>register</Link>
            <Link to={'/login'}>Login</Link>
            <Link to={'/pincode'}>pinCode</Link>
            <Link to={'/imregister'}>importRegister</Link>
        </div>
    );
};

export default HomePage;