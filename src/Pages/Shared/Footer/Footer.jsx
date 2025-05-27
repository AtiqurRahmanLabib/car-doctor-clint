import React from 'react';
import logo from '../../../assets/logo.svg';
import { FaGoogle, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FaInstagram } from 'react-icons/fa6';
const Footer = () => {
    return (
        <div>
            <div className='bg-[#151515] w-full  h-[477px] justify-center items-center flex gap-50'>

                <div className='w-[283px] h-[216.71px] '>
                    <img className='w-[79px] h-[64.09px]' src={logo} alt="" />
                    <p className='font-inter text-[16px] text-[#E8E8E8]'>Edwin Diaz is a software and web <br /> technologies engineer, a life coach <br /> trainer who is also a serial .</p>
                    <div className='flex gap-5 mt-5'>
                        <FaGoogle className='w-[36.36px] h-[34.63px] text-white'></FaGoogle>
                        <FaTwitter className='w-[36.36px] h-[34.63px] text-white'></FaTwitter>
                        <FaInstagram className='w-[36.36px] h-[34.63px] text-white'></FaInstagram>
                        <FaLinkedin className='w-[36.36px] h-[34.63px] text-white'></FaLinkedin>
                    </div>

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