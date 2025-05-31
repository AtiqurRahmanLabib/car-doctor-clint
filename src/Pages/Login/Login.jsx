import React, { useContext, useState } from 'react';
import loginImg from '../../assets/images/login/login.svg';
import Navbar from '../Shared/Navbar/Navbar';
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth/web-extension';

const Login = () => {
    const { loginUser, googleLogin } = useContext(AuthContext);
    const provider = new GoogleAuthProvider();
    const navigate = useNavigate();
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        
        loginUser(email, password)
            .then(result => {
                setSuccess('Login successfully');
                navigate("/home");
            })
            .catch(error => {
                setError(error.message);
            });
    };

    const handleGoogleLogin = () => {
        googleLogin(provider)
            .then(result => {
                setSuccess('Login successfully');
                navigate('/home');
            })
            .catch(error => {
                setError(error.message);
            });
    };

    return (
        <div>
            <Navbar></Navbar>
            <div className='container mx-auto px-4 py-8 md:py-12 lg:py-16'>
                <div className='flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-16'>
                    {/* Login Image - Hidden on small screens */}
                    <div className='hidden lg:block flex-1 max-w-md xl:max-w-lg'>
                        <img className='w-full h-auto' src={loginImg} alt="Login illustration" />
                    </div>

                    {/* Login Form */}
                    <div className='w-full max-w-md md:max-w-lg lg:max-w-md xl:max-w-lg border border-[#D0D0D0] rounded-lg p-6 md:p-8'>
                        <h1 className='text-[#444444] text-3xl md:text-4xl font-semibold text-center mb-8 md:mb-12'>Login</h1>

                        <form onSubmit={handleSubmit}>
                            <div className='space-y-4'>
                                <div>
                                    <label className='block text-[#444444] text-lg font-semibold mb-2'>Email</label>
                                    <input 
                                        type="email" 
                                        name='email' 
                                        className='w-full h-12 md:h-14 rounded-lg border border-[#E8E8E8] px-4' 
                                        placeholder='Your email' 
                                        required 
                                    />
                                </div>
                                
                                <div>
                                    <label className='block text-[#444444] text-lg font-semibold mb-2'>Password</label>
                                    <input 
                                        type="password" 
                                        name='password' 
                                        className='w-full h-12 md:h-14 rounded-lg border border-[#E8E8E8] px-4' 
                                        placeholder='Your password' 
                                        required 
                                    />
                                </div>

                                <button 
                                    className='w-full h-14 md:h-16 bg-[#FF3811] rounded-lg text-lg md:text-xl font-semibold text-white mt-6 hover:bg-[#e0310f] transition-colors' 
                                    type="submit"
                                >
                                    Sign In
                                </button>

                                {error && <p className='text-red-500 font-medium mt-2'>{error}</p>}
                                {success && <p className='text-green-500 font-medium mt-2'>{success}</p>}
                            </div>

                            <div className='mt-8 md:mt-12 text-center'>
                                <p className='text-[#444444] mb-6'>Or Sign In with</p>
                                <div className='flex justify-center gap-4'>
                                    <button 
                                        type="button" 
                                        className='w-12 h-12 md:w-14 md:h-14 bg-[#F5F5F8] rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors'
                                    >
                                        <FaFacebook className='text-blue-600 text-2xl' />
                                    </button>
                                    <button 
                                        type="button" 
                                        className='w-12 h-12 md:w-14 md:h-14 bg-[#F5F5F8] rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors'
                                    >
                                        <FaLinkedin className='text-blue-600 text-2xl' />
                                    </button>
                                    <button 
                                        type="button" 
                                        onClick={handleGoogleLogin}
                                        className='w-12 h-12 md:w-14 md:h-14 bg-[#F5F5F8] rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors'
                                    >
                                        <FcGoogle className='text-2xl' />
                                    </button>
                                </div>
                            </div>

                            <p className='text-center mt-8 text-[#737373]'>
                                Don't have an account?{' '}
                                <Link to="/signup" className='text-[#FF3811] font-semibold hover:underline'>
                                    Sign Up
                                </Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;