import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>
            <nav >
                <div className="mt-3 mb-3 text-center ">
                    <Link className='text-decoration-none menu' to="/home">Home</Link>
                    <Link className='text-decoration-none menu'to="/reviews">Reviews</Link>
                    <Link className='text-decoration-none menu' to="/dashboard">Dashboard</Link>
                    <Link className='text-decoration-none menu' to="/about">About</Link>
                    <Link className='text-decoration-none menu' to="/blogs">Blogs</Link>
                </div>
            </nav>
        </div>
    );
};

export default Header;