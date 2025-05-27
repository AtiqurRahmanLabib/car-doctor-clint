import React from 'react';
import error4044 from '../../assets/images/Frame.png'; 
import Navbar from '../Shared/Navbar/Navbar';

const Error = () => {
    return (
        <div>

            <Navbar></Navbar>
            
            <div className='flex justify-center items-center h-screen'>

                <img src={error4044} alt="" />
            </div>
        </div>
    );
};

export default Error;