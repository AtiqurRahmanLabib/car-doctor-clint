import React, { useState } from 'react';
import logo from '../../../assets/logo.svg';
import { NavLink } from 'react-router-dom';
import { IoIosSearch } from "react-icons/io";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="bg-white shadow-sm">
            {/* Main Navbar Container - Fixed width on large screens */}
            <div className="mx-auto px-4 sm:px-6 h-[86.78px] max-w-[1140px] flex items-center justify-between">
                {/* Logo */}
                <div className="flex-shrink-0">
                    <img src={logo} alt="Company Logo" className="h-10 md:h-12" />
                </div>

                {/* Desktop Navigation - Shows on md screens and up */}
                <nav className="hidden md:flex items-center space-x-8 h-full">
                    <NavLink
                        to="/home"
                        className={({ isActive }) =>
                            `h-full flex items-center text-[16px] font-medium hover:text-orange-600 transition-colors
                            ${isActive ? 'text-orange-600 font-semibold underline' : 'text-[#444444]'}`
                        }
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/about"
                        className={({ isActive }) =>
                            `h-full flex items-center text-[16px] font-medium hover:text-orange-600 transition-colors
                            ${isActive ? 'text-orange-600 font-semibold underline' : 'text-[#444444]'}`
                        }
                    >
                        About
                    </NavLink>
                    <NavLink
                        to="/services"
                        className={({ isActive }) =>
                            `h-full flex items-center text-[16px] font-medium hover:text-orange-600 transition-colors
                            ${isActive ? 'text-orange-600 font-semibold underline' : 'text-[#444444]'}`
                        }
                    >
                        Services
                    </NavLink>
                    <NavLink
                        to="/blog"
                        className={({ isActive }) =>
                            `h-full flex items-center text-[16px] font-medium hover:text-orange-600 transition-colors
                            ${isActive ? 'text-orange-600 font-semibold underline' : 'text-[#444444]'}`
                        }
                    >
                        Blog
                    </NavLink>
                    <NavLink
                        to="/contact"
                        className={({ isActive }) =>
                            `h-full flex items-center text-[16px] font-medium hover:text-orange-600 transition-colors
                            ${isActive ? 'text-orange-600 font-semibold underline' : 'text-[#444444]'}`
                        }
                    >
                        Contact
                    </NavLink>
                </nav>

                {/* Desktop Icons and Button - Shows on md screens and up */}
                <div className="hidden md:flex items-center space-x-5 h-full">
                    <div className="flex items-center space-x-5">
                        <HiOutlineShoppingBag className="w-[24px] h-[24px] text-[#444444] hover:text-orange-600 cursor-pointer transition-colors" />
                        <IoIosSearch className="w-[24px] h-[24px] text-[#444444] hover:text-orange-600 cursor-pointer transition-colors" />
                    </div>
                    <button className="w-[170px] h-[56px] border border-[#FF3811] text-[#FF3811] text-[18px] font-semibold rounded-[5px] hover:bg-[#FF3811] hover:text-white transition-colors">
                        Appointment
                    </button>
                </div>

                {/* Mobile Menu Button - Shows on small screens only */}
                <div className="md:hidden flex items-center space-x-4">
                    <HiOutlineShoppingBag className="w-[24px] h-[24px] text-[#444444]" />
                    <button 
                        onClick={toggleMenu}
                        className="text-[#444444] focus:outline-none"
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? (
                            <FaTimes className="w-6 h-6" />
                        ) : (
                            <FaBars className="w-6 h-6" />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-white py-4 shadow-md">
                    <div className="max-w-[1140px] mx-auto px-4">
                        <nav className="flex flex-col space-y-4">
                            <NavLink
                                to="/home"
                                onClick={toggleMenu}
                                className={({ isActive }) =>
                                    `text-[16px] font-medium px-4 py-2 rounded-md
                                    ${isActive ? 'bg-orange-100 text-orange-600' : 'text-[#444444] hover:bg-gray-100'}`
                                }
                            >
                                Home
                            </NavLink>
                            <NavLink
                                to="/about"
                                onClick={toggleMenu}
                                className={({ isActive }) =>
                                    `text-[16px] font-medium px-4 py-2 rounded-md
                                    ${isActive ? 'bg-orange-100 text-orange-600' : 'text-[#444444] hover:bg-gray-100'}`
                                }
                            >
                                About
                            </NavLink>
                            <NavLink
                                to="/services"
                                onClick={toggleMenu}
                                className={({ isActive }) =>
                                    `text-[16px] font-medium px-4 py-2 rounded-md
                                    ${isActive ? 'bg-orange-100 text-orange-600' : 'text-[#444444] hover:bg-gray-100'}`
                                }
                            >
                                Services
                            </NavLink>
                            <NavLink
                                to="/blog"
                                onClick={toggleMenu}
                                className={({ isActive }) =>
                                    `text-[16px] font-medium px-4 py-2 rounded-md
                                    ${isActive ? 'bg-orange-100 text-orange-600' : 'text-[#444444] hover:bg-gray-100'}`
                                }
                            >
                                Blog
                            </NavLink>
                            <NavLink
                                to="/contact"
                                onClick={toggleMenu}
                                className={({ isActive }) =>
                                    `text-[16px] font-medium px-4 py-2 rounded-md
                                    ${isActive ? 'bg-orange-100 text-orange-600' : 'text-[#444444] hover:bg-gray-100'}`
                                }
                            >
                                Contact
                            </NavLink>
                        </nav>
                        <div className="mt-4 px-4">
                            <button className="w-full h-[56px] border border-[#FF3811] text-[#FF3811] text-[18px] font-semibold rounded-[5px] hover:bg-[#FF3811] hover:text-white transition-colors">
                                Appointment
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Navbar;