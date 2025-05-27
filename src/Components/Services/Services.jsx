import React from 'react';

const Services = ({ service }) => {  // Changed from services to service
    const { img, title, price } = service;  // Changed from services to service
    return (
        <div className='w-[364px] h-[348px] rounded-md border p-4 border-[#E8E8E8]'>
            <div className='rounded-2xl w-[314px] h-[208.01px] mx-auto'>
                <img className='w-[314px] h-[208.01px]  rounded-[10px]'
                    src={img} 
                    alt={title} 
                />
            </div>
            <div className='p-4'>
                <h1 className='text-[25px] font-inter text-[#444444] font-bold '>{title}</h1>
                <p className='text-[#FF3811] font-semibold text-[20px] font-inter'>${price}</p>
            </div>
        </div>
    );
};

export default Services;