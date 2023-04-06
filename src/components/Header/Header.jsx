import React from 'react';
import Main from '../Layout/Main';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <nav className='mx-auto p-4 bg-purple-400 flex flex-col justify-evenly md:flex-row md:justify-around text-3xl font-semibold'>
            <Link to='/'>Home</Link>
            <Link to='/restaurant'>Restaurant</Link>
            <Link to='/error'>Error</Link>
            </nav>
            <Outlet></Outlet>
        </div>
    );
};

export default Header;
