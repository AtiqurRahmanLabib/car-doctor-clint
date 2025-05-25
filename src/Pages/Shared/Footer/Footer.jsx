import React from 'react';
import logo from '../../../assets/logo.svg';
const Footer = () => {
    return (
        <div>
            <div className='bg-[#151515] w-full  h-[477px] justify-center items-center flex gap-50'>

                <div className='w-[283px] h-[216.71px] '>
                    <img className='w-[79px] h-[64.09px]' src={logo} alt="" />
                    <p className='font-inter text-[16px] text-[#E8E8E8]'>Edwin Diaz is a software and web <br /> technologies engineer, a life coach <br /> trainer who is also a serial .</p>

                </div>
                {/* <div className='flex gap-20'> */}
                    <div>
                        <h1 className='text-[20px] font-semibold text-[#FFFFFF]'>About</h1>
                        <ul className='text-[#F3F3F3] text-[16px] font-inter mt-5'>
                            <li className='mb-2'>Home</li>
                            <li className='mb-2'>Services</li>
                            <li>Contact</li>
                        </ul>
                    </div>


                    <div>
                        <h1 className='text-[20px] font-semibold text-[#FFFFFF]'>Company</h1>
                        <ul className='text-[#F3F3F3] text-[16px] font-inter mt-5'>
                            <li className='mb-2'>Why Car Doctor</li>
                            <li className='mb-2'>About</li>

                        </ul>
                    </div>

                    <div>
                        <h1 className='text-[20px] font-semibold text-[#FFFFFF]'>Support</h1>
                        <ul className='text-[#F3F3F3] text-[16px] font-inter mt-5'>
                            <li className='mb-2'>Support Center</li>
                            <li className='mb-2'>Feedback</li>
                            <li>Accesbility</li>
                        </ul>
                    </div>


                </div>


            </div>
        // </div>
    );
};

export default Footer;