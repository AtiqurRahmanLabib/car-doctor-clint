import React, { useContext, useState } from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import { FaFacebook, FaLinkedin } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import loginImg from '../../assets/images/login/login.svg';
import { Link, useNavigate,  } from 'react-router-dom';
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
        console.log(name, email, password);
        createUser(email, password)
            .then(result => {
                const user = result.user;
                setSuccess('User created successfully');
                setError('');
                navigate('/home');
                console.log(user);
            })
            .catch(error => {
                console.error('Error creating user:', error);
                setError(error.message);
                setSuccess('');
            });

    }
    return (
        <div>
            <Navbar></Navbar>
            <div className='flex justify-between mt-5 items-center w-[1140px] mx-auto'>
                <div>
                    <img className='w-[460px] h-[502px]' src={loginImg} alt="" />
                </div>

                <div className='w-[611px] h-[919px] border border-[#D0D0D0] rounded-[10px] '>
                    <h1 className='text-[#444444] text-[40px] font-semibold font-inter text-center pt-15'>Sign Up</h1>

                    <form onSubmit={handleSubmit}>
                        <div className='grid mx-auto mt-20 gap-2 w-[468px]'>
                            <label className='text-[#444444] text-[20px] font-semibold font-inter'>Name</label>
                            <input type="text" name='name' className='w-[461px] h-[60px] rounded-[10px] border border-[#E8E8E8] p-5' placeholder='Your name' required />
                        </div>
                        <div className='grid mx-auto mt-5 gap-2 w-[468px]'>
                            <label className='text-[#444444] text-[20px] font-semibold font-inter'>Email</label>
                            <input type="email" name='email' className='w-[461px] h-[60px] rounded-[10px] border border-[#E8E8E8] p-5' placeholder='Your email' required />
                        </div>
                        <div className='grid mx-auto mt-5 gap-2 w-[468px]'>
                            <label className='text-[#444444] text-[20px] font-semibold font-inter'>Confirm passwordl</label>
                            <input type="Password" name='password' className='w-[461px] h-[60px] rounded-[10px] border p-5 border-[#E8E8E8]' placeholder='Your password' required />
                            <button className='w-[461px] h-[64px] bg-[#FF3811] rounded-[10px] text-[20px] font-semibold text-white font-inter mt-5' type="submit">Sign Up</button>
                            {
                                error && <p className='text-1xl font-bold text-red-500 mt-2'>{error}</p>
                            }
                            {
                                success && <p className='text-1xl font-bold text-green-500 mt-2'>{success}</p>
                            }
                        </div>
                        <h1 className='font-inter font-medium text-[18px] text-[#444444] text-center mt-10'>Or Sign Up with</h1>
                        <div className='flex mx-auto w-[197px] h-[55px] gap-5 mt-10'>
                            <FaFacebook className='w-[55px] h-[55px] text-blue-600 bg-[#F5F5F8] rounded-full'></FaFacebook>
                            <FaLinkedin className='w-[55px] h-[55px] text-blue-600 bg-[#F5F5F8] '></FaLinkedin>
                            <FcGoogle className='w-[55px] h-[55px] text-blue-600'></FcGoogle>
                        </div>
                        <p className='text-center mt-10 font-inter text-[18px] text-[#737373]'>Already have an account? <Link to="/login"><span className='text-[#FF3811] font-semibold font-inter'>Login</span></Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;