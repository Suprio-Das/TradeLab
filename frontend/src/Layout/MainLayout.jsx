import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const MainLayout = () => {
    return (
        <div className='w-[95%] mx-auto my-2'>
            <Navbar></Navbar>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;