import React from 'react';
import logo from '../../../assets/logo.svg';
import { FaGoogle, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FaInstagram } from 'react-icons/fa6';

const Footer = () => {
    return (
        <footer className="bg-[#151515] w-full mt-5">
            {/* Main Footer Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                {/* Logo and Social Media */}
                <div className='max-w-[283px]'>
                    <img className='w-[79px] h-[64px]' src={logo} alt="Company Logo" />
                    <p className='font-inter text-base text-[#E8E8E8] mt-4'>
                        Edwin Diaz is a software and web technologies engineer, a life coach trainer who is also a serial.
                    </p>
                    <div className='flex gap-4 mt-5'>
                        <FaGoogle className='w-9 h-8 text-white hover:text-[#FF3811] transition-colors cursor-pointer' />
                        <FaTwitter className='w-9 h-8 text-white hover:text-[#FF3811] transition-colors cursor-pointer' />
                        <FaInstagram className='w-9 h-8 text-white hover:text-[#FF3811] transition-colors cursor-pointer' />
                        <FaLinkedin className='w-9 h-8 text-white hover:text-[#FF3811] transition-colors cursor-pointer' />
                    </div>
                </div>

                {/* About Links */}
                <div>
                    <h1 className='text-xl font-semibold text-white'>About</h1>
                    <ul className='text-[#F3F3F3] text-base font-inter mt-5 space-y-2'>
                        <li className='hover:text-[#FF3811] transition-colors cursor-pointer'>Home</li>
                        <li className='hover:text-[#FF3811] transition-colors cursor-pointer'>Services</li>
                        <li className='hover:text-[#FF3811] transition-colors cursor-pointer'>Contact</li>
                    </ul>
                </div>

                {/* Company Links */}
                <div>
                    <h1 className='text-xl font-semibold text-white'>Company</h1>
                    <ul className='text-[#F3F3F3] text-base font-inter mt-5 space-y-2'>
                        <li className='hover:text-[#FF3811] transition-colors cursor-pointer'>Why Car Doctor</li>
                        <li className='hover:text-[#FF3811] transition-colors cursor-pointer'>About</li>
                    </ul>
                </div>

                {/* Support Links */}
                <div>
                    <h1 className='text-xl font-semibold text-white'>Support</h1>
                    <ul className='text-[#F3F3F3] text-base font-inter mt-5 space-y-2'>
                        <li className='hover:text-[#FF3811] transition-colors cursor-pointer'>Support Center</li>
                        <li className='hover:text-[#FF3811] transition-colors cursor-pointer'>Feedback</li>
                        <li className='hover:text-[#FF3811] transition-colors cursor-pointer'>Accesibility</li>
                    </ul>
                </div>
            </div>

            {/* Copyright Section */}
            <div className="border-t border-[#2D2D2D] py-6">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-[#E8E8E8] text-sm">
                    <p>© {new Date().getFullYear()} Car Doctor. All Rights Reserved</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;