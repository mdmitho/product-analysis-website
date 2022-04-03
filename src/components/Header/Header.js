import React from 'react';
import CustomLink from '../CustomLInk/CustomLink'
import './Header.css'


const Header = () => {
    return (
  
 
                <nav className="mt-4 mb-3 text-center d-flex justify-content-center">
                    <CustomLink className='text-decoration-none menu' to="/home">Home</CustomLink>
                    <CustomLink className='text-decoration-none menu'to="/reviews">Reviews</CustomLink>
                    <CustomLink className='text-decoration-none menu' to="/dashboard">Dashboard</CustomLink>
                    <CustomLink className='text-decoration-none menu' to="/about">About</CustomLink>
                    <CustomLink className='text-decoration-none menu' to="/blogs">Blogs</CustomLink>
                </nav>
     
       
    );
};

export default Header;