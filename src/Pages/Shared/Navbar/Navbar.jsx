import React from 'react';
import logo from '../../../assets/logo.svg'; // Adjust the path as necessary
import { NavLink } from 'react-router-dom';
import { IoIosSearch } from "react-icons/io";
import { HiOutlineShoppingBag } from "react-icons/hi2";
const Navbar = () => {
    return (
        <div>

            <div className='w-[1140px] h-[86.78px] mx-auto mt-10 flex items-center gap-5 justify-between'>
                <img src={logo} alt="" srcset="" />

                <div className='gap-10 flex items-center'>
                    <NavLink
                        to="/home"
                        className={({ isActive }) =>
                            `text-[16px] font-medium text-center
                            ${isActive ? 'text-[18px] font-semibold font-inter text-center underline ' : 'text-[16px] font-semibold text-center text-[#444444] '}`
                        }
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/about"
                        className={({ isActive }) =>
                            `text-[16px] font-medium text-center
                            ${isActive ? 'text-[18px] font-semibold font-inter text-center underline ' : 'text-[16px] font-semibold text-center text-[#444444] '}`
                        }
                    >
                        About
                    </NavLink>
                    <NavLink
                        to="/services"
                        className={({ isActive }) =>
                            `text-[16px] font-medium text-center
                            ${isActive ? 'text-[18px] font-semibold font-inter text-center underline ' : 'text-[16px] font-semibold text-center text-[#444444] '}`
                        }
                    >
                        Services
                    </NavLink>
                    <NavLink
                        to="/blog"
                        className={({ isActive }) =>
                            `text-[16px] font-medium text-center
                            ${isActive ? 'text-[18px] font-semibold font-inter text-center underline ' : 'text-[16px] font-semibold text-center text-[#444444] '}`
                        }
                    >
                        Blog
                    </NavLink>
                    <NavLink
                        to="/contact"
                        className={({ isActive }) =>
                            `text-[16px] font-medium text-center
                            ${isActive ? 'text-[18px] font-semibold font-inter text-center underline ' : 'text-[16px] font-semibold text-center text-[#444444] '}`
                        }
                    >
                        Contact
                    </NavLink>
                </div>

                <div className='flex items-center gap-5'>
                    <div className='flex items-center gap-5'>
                        <HiOutlineShoppingBag className='w-[24px] h-[24px]' />
                        <IoIosSearch className='w-[24px] h-[24px]' />
                    </div>

                    <div>
                        <button className='w-[170px] h-[56px] border border-[#FF3811] rounded-[5px] text-[#FF3811] text-[18px] font-semibold font-inter'>Appointment</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Navbar;