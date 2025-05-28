import React from 'react';
import loginImg from '../../assets/images/login/login.svg';
import Navbar from '../Shared/Navbar/Navbar';
import Link from 'daisyui/components/link';
const Login = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='flex justify-between mt-5 items-center w-[1140px] mx-auto'>
                <div>
                    <img className='w-[460px] h-[502px]' src={loginImg} alt="" />
                </div>

                <div className='w-[611px] h-[782px] border border-[#D0D0D0] rounded-[10px] '>
                    <h1 className='text-[#444444] text-[40px] font-semibold font-inter text-center pt-15'>Login</h1>

                    <form className=''>
                        <div className='grid mx-auto mt-10 gap-2 w-[468px]'>
                        <label className='text-[#444444] text-[20px] font-semibold font-inter'>Email</label>
                        <input type="email" className='w-[461px] h-[60px] rounded-[10px] border border-[#E8E8E8] p-5' placeholder='Your email' required />
                        </div>
                        <div className='grid mx-auto mt-5 gap-2 w-[468px]'>
                        <label className='text-[#444444] text-[20px] font-semibold font-inter'>passwordl</label>
                        <input type="Password" className='w-[461px] h-[60px] rounded-[10px] border p-5 border-[#E8E8E8]' placeholder='Your password' required />
                        <button className='w-[461px] h-[64px] bg-[#FF3811] rounded-[10px] text-[20px] font-semibold text-white font-inter mt-5' type="submit">Sign In</button>
                        </div>
                        <h1 className='font-inter font-medium text-[18px] text-[#444444] text-center mt-5'>Or Sign In with</h1>
                            <div>

                            </div>
                            <p className='text-center'>Have an account? Sign In</p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;