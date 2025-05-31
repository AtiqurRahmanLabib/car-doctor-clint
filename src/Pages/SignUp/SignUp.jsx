import React, { useContext, useState } from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import { FaFacebook, FaLinkedin } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import loginImg from '../../assets/images/login/login.svg';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';

const SignUp = () => {
    const navigate = useNavigate();
    const { createUser } = useContext(AuthContext);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        
        createUser(email, password)
            .then(result => {
                setSuccess('User created successfully');
                setError('');
                navigate('/home');
            })
            .catch(error => {
                setError(error.message);
                setSuccess('');
            });
    };

    return (
        <div>
            <Navbar />
            <div className="container mx-auto px-4 py-8 md:py-12 lg:py-16">
                <div className="flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-16">
                    {/* Signup Image - Hidden on mobile */}
                    <div className="hidden lg:block flex-1 max-w-md xl:max-w-lg">
                        <img 
                            className="w-full h-auto" 
                            src={loginImg} 
                            alt="Signup illustration" 
                        />
                    </div>

                    {/* Signup Form */}
                    <div className="w-full max-w-md md:max-w-lg border border-[#D0D0D0] rounded-lg p-6 md:p-8">
                        <h1 className="text-[#444444] text-3xl md:text-4xl font-semibold text-center mb-8 md:mb-12">
                            Sign Up
                        </h1>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block text-[#444444] text-lg font-semibold mb-2">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    className="w-full h-12 md:h-14 rounded-lg border border-[#E8E8E8] px-4"
                                    placeholder="Your name"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-[#444444] text-lg font-semibold mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    className="w-full h-12 md:h-14 rounded-lg border border-[#E8E8E8] px-4"
                                    placeholder="Your email"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-[#444444] text-lg font-semibold mb-2">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    className="w-full h-12 md:h-14 rounded-lg border border-[#E8E8E8] px-4"
                                    placeholder="Your password"
                                    required
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full h-14 md:h-16 bg-[#FF3811] rounded-lg text-lg md:text-xl font-semibold text-white mt-6 hover:bg-[#e0310f] transition-colors"
                            >
                                Sign Up
                            </button>

                            {error && (
                                <p className="text-red-500 font-medium mt-2">
                                    {error}
                                </p>
                            )}
                            {success && (
                                <p className="text-green-500 font-medium mt-2">
                                    {success}
                                </p>
                            )}
                        </form>

                        <div className="mt-8 md:mt-12 text-center">
                            <p className="text-[#444444] mb-6">
                                Or Sign Up with
                            </p>
                            <div className="flex justify-center gap-4">
                                <button
                                    type="button"
                                    className="w-12 h-12 md:w-14 md:h-14 bg-[#F5F5F8] rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
                                >
                                    <FaFacebook className="text-blue-600 text-2xl" />
                                </button>
                                <button
                                    type="button"
                                    className="w-12 h-12 md:w-14 md:h-14 bg-[#F5F5F8] rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
                                >
                                    <FaLinkedin className="text-blue-600 text-2xl" />
                                </button>
                                <button
                                    type="button"
                                    className="w-12 h-12 md:w-14 md:h-14 bg-[#F5F5F8] rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
                                >
                                    <FcGoogle className="text-2xl" />
                                </button>
                            </div>
                        </div>

                        <p className="text-center mt-8 text-[#737373]">
                            Already have an account?{' '}
                            <Link
                                to="/login"
                                className="text-[#FF3811] font-semibold hover:underline"
                            >
                                Login
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;