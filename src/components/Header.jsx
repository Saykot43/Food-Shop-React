import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div>
            <nav className='nav'>
                {/* <img src="" alt="" /> */}
                <h1 className='color'>Food Shop</h1>
                <div className='header'>
                    <a href="http:/order">Home</a>
                    <a href="http:/review">Order</a>
                    <a href="http:/about">About</a>
                </div>
            </nav>
        </div>
    );
};

export default Header;