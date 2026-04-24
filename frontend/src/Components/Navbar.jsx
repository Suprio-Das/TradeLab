import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../Context/AuthContext';

const Navbar = () => {
    const { user, loading, handleLogout } = useContext(AuthContext);

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <p className="text-xl font-semibold">
                    Moneys are printing...
                </p>
            </div>
        );
    }
    return (
        <div>
            <div className="navbar px-0">
                <div className="flex-1">
                    <a className='text-2xl font-bold flex items-center gap-2'>
                        <img src="/favicon.svg" alt="Favicon" className="w-10" />
                        TradeLab
                    </a>
                </div>

                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        {
                            user ? (
                                <li>
                                    <button
                                        onClick={handleLogout}
                                        className='bg-red-500 text-white font-bold px-3 py-1 rounded'
                                    >
                                        Logout
                                    </button>
                                </li>
                            ) : (
                                <>
                                    <li>
                                        <Link
                                            to='/login'
                                            className="cursor-pointer hover:bg-transparent focus:bg-transparent active:bg-transparent"
                                        >
                                            Login
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to='/signup'
                                            className='bg-blue-500 text-white font-bold'
                                        >
                                            Signup
                                        </Link>
                                    </li>
                                </>
                            )
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;