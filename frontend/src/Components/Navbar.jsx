import React from 'react';

const Navbar = () => {
    return (
        <div>
            <div className="navbar px-0">
                <div className="flex-1">
                    <a className='text-2xl font-bold flex items-center gap-2'>
                        <img src="../../public/favicon.svg" alt="Favicon" className='w-10' /> TradeLab
                    </a>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        <li>
                            <a className="cursor-pointer hover:bg-transparent focus:bg-transparent active:bg-transparent">
                                Login
                            </a>
                        </li>
                        <li>
                            <a href='/signup' className='bg-blue-500 text-white font-bold'>Signup</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;