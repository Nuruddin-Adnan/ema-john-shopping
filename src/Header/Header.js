import React from 'react';
import logo from '../Logo.png'

const Header = () => {
    return (
        <header className='header bg-slate-900 px-4 py-5'>
            <nav className="flex justify-between items-center container mx-auto">
                <a href="http://localhost:3000/">
                    <img src={logo} alt="logo" />
                </a>
                <ul className="flex text-white">
                    <li><a className="p-3 hover:text-yellow-600 transition font-medium" href="./Order ">Order</a></li>
                    <li><a className="p-3 hover:text-yellow-600 transition font-medium" href="./Order Review ">Order Review</a></li>
                    <li><a className="p-3 hover:text-yellow-600 transition font-medium" href="./Manage Inventory ">Manage Inventory</a></li>
                    <li><a className="p-3 hover:text-yellow-600 transition font-medium" href="./Login ">Login</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;