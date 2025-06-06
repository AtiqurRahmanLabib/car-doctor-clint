import React, { useContext, useState } from 'react';
import logo from '../../../assets/logo.svg';
import { Link, NavLink } from 'react-router-dom';
import { IoIosSearch } from "react-icons/io";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { FaBars, FaTimes } from "react-icons/fa";
import { AuthContext } from '../../../Providers/AuthProvider';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { user, logOut } = useContext(AuthContext);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Handle logout
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }

    return (
        <header className="">
            {/* Main Navbar Container - Fixed width on large screens */}
            <div className="mx-auto px-4 sm:px-6 h-[86.78px] max-w-[1190px] flex items-center justify-between mt-5">
                {/* Logo */}
                <div className=''>
                    <div className="flex-shrink-0">
                        <NavLink to="/home">
                            <img src={logo} alt="Company Logo" className="lg:w-[107px] lg:h-[86px] md:h-12" />
                        </NavLink>
                    </div>
                </div>
                {/* <div className={`class-no-user flex items-center  w-[840px] justify-between $ */}
                {/* Desktop Navigation - Shows on md screens and up */}
                <div className={`${user ? 'flex gap-5' : 'class-no-user flex items-center  w-[840px] justify-between'}`}>
                    <nav className="hidden md:flex items-center space-x-8 h-full">
                        <NavLink
                            to={user ? "/cardDetails" : "/home"}
                            className={({ isActive }) =>
                                `h-full flex items-center text-[16px] font-medium hover:text-orange-600 transition-colors
                            ${isActive ? 'text-orange-600 font-semibold underline' : 'text-[#444444]'}`
                            }
                        >
                            {user ? "Orders" : "Home"}
                        </NavLink>
                        <NavLink
                            to={user ? "/order-review" : "/about"}
                            className={({ isActive }) =>
                                `h-full flex items-center text-[16px] font-medium hover:text-orange-600 transition-colors
                            ${isActive ? 'text-orange-600 font-semibold underline' : 'text-[#444444]'}`
                            }
                        >
                            {user ? "Order Review" : "About"}
                        </NavLink>
                        <NavLink
                            to={user ? "/manage-inventory" : "/services"}
                            className={({ isActive }) =>
                                `h-full flex items-center text-[16px] font-medium hover:text-orange-600 transition-colors
                            ${isActive ? 'text-orange-600 font-semibold underline' : 'text-[#444444]'}`
                            }
                        >
                            {user ? "Manage Inventory" : "Services"}
                        </NavLink>
                        {!user && (
                            <NavLink
                                to="/blog"
                                className={({ isActive }) =>
                                    `h-full flex items-center text-[16px] font-medium hover:text-orange-600 transition-colors
                                ${isActive ? 'text-orange-600 font-semibold underline' : 'text-[#444444]'}`
                                }
                            >
                                Blog
                            </NavLink>
                        )}
                        {!user && (
                            <NavLink
                                to="/contact"
                                className={({ isActive }) =>
                                    `h-full flex items-center text-[16px] font-medium hover:text-orange-600 transition-colors
                                ${isActive ? 'text-orange-600 font-semibold underline' : 'text-[#444444]'}`
                                }
                            >
                                Contact
                            </NavLink>
                        )}
                        {/* {user && (
                        <div className="h-full flex items-center text-[16px] font-medium text-[#444444]">
                            {user.displayName || "User"}
                        </div>
                    )} */}
                        {user ? (
                            <button
                                onClick={handleLogOut}
                                className="h-full flex items-center text-[16px] font-medium text-[#444444] hover:text-orange-600 transition-colors"
                            >
                                Logout
                            </button>
                        ) : (
                            <NavLink
                                to="/login"
                                className={({ isActive }) =>
                                    `h-full flex items-center text-[16px] font-medium hover:text-orange-600 transition-colors
                                ${isActive ? 'text-orange-600 font-semibold underline' : 'text-[#444444]'}`
                                }
                            >
                                Login
                            </NavLink>
                        )}
                    </nav>

                    {/* Desktop Icons - Always visible */}
                    <div className="hidden md:flex items-center space-x-5 h-full">
                        <IoIosSearch className="w-[24px] h-[24px] text-[#444444] hover:text-orange-600 cursor-pointer transition-colors" />
                        <HiOutlineShoppingBag className="w-[24px] h-[24px] text-[#444444] hover:text-orange-600 cursor-pointer transition-colors" />
                        {!user && (
                            <button className="w-[170px] h-[56px] border border-[#FF3811] text-[#FF3811] text-[18px] font-semibold rounded-[5px] hover:bg-[#FF3811] hover:text-white transition-colors">
                                Appointment
                            </button>
                        )}
                    </div>
                </div>

                {/* Mobile Menu Button - Shows on small screens only */}
                <div className="md:hidden flex items-center space-x-4">
                    <IoIosSearch className="w-[24px] h-[24px] text-[#444444]" />
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
                                to={user ? "/orders" : "/home"}
                                onClick={toggleMenu}
                                className={({ isActive }) =>
                                    `text-[16px] font-medium px-4 py-2 rounded-md
                                    ${isActive ? 'bg-orange-100 text-orange-600' : 'text-[#444444] hover:bg-gray-100'}`
                                }
                            >
                                {user ? "Orders" : "Home"}
                            </NavLink>
                            <NavLink
                                to={user ? "/order-review" : "/about"}
                                onClick={toggleMenu}
                                className={({ isActive }) =>
                                    `text-[16px] font-medium px-4 py-2 rounded-md
                                    ${isActive ? 'bg-orange-100 text-orange-600' : 'text-[#444444] hover:bg-gray-100'}`
                                }
                            >
                                {user ? "Order Review" : "About"}
                            </NavLink>
                            <NavLink
                                to={user ? "/manage-inventory" : "/services"}
                                onClick={toggleMenu}
                                className={({ isActive }) =>
                                    `text-[16px] font-medium px-4 py-2 rounded-md
                                    ${isActive ? 'bg-orange-100 text-orange-600' : 'text-[#444444] hover:bg-gray-100'}`
                                }
                            >
                                {user ? "Manage Inventory" : "Services"}
                            </NavLink>
                            {!user && (
                                <>
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
                                </>
                            )}
                            {/* {user && (
                                <div className="text-[16px] font-medium px-4 py-2 rounded-md text-[#444444]">
                                    {user.displayName || "User"}
                                </div>
                            )} */}
                        </nav>
                        {!user && (
                            <div className="mt-4 px-4">
                                <button className="w-full h-[56px] border border-[#FF3811] text-[#FF3811] text-[18px] font-semibold rounded-[5px] hover:bg-[#FF3811] hover:text-white transition-colors">
                                    Appointment
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </header>
    );
};

export default Navbar;