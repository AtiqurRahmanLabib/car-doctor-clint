import Navbar from "../Shared/Navbar/Navbar";
import { useLoaderData } from "react-router-dom";
import checkOutLogo from "../../assets/images/checkout/checkout.png";
import vector from '../../assets/icons/Vector.png';
import { FaArrowRight } from "react-icons/fa6";
import logo from '../../assets/logo.svg';
import Footer from "../Shared/Footer/Footer";

const ServicesDetails = () => {  // ✅ PascalCase
    const service = useLoaderData();
    const { _id, img, title, price, description } = service;
    return (
        <div>
            <Navbar />
            <div>
                <div className="w-[1137px] h-[300px] mx-auto mt-5 relative">
                    <p className="absolute z-10 text-white  text-[45px] font-bold top-1/3 left-22 font-inter ">Service Details</p>
                    <div className="relative w-full h-full">
                        <img
                            className="rounded-[10px] w-full h-full object-cover brightness-75"
                            src={checkOutLogo}
                            alt="Service Details"
                        />

                    </div>
                    {/* Linear gradient overlay */}
                    <div
                        className="absolute inset-0 rounded-[10px]"
                        style={{
                            background: 'linear-gradient(to bottom, #151515 0%, #151515 100%)',
                            opacity: 0.5,
                            mixBlendMode: 'multiply'
                        }}
                    ></div>
                    <div className="absolute inset-0 flex items-center justify-center bg-[#FF3811] w-[296px] h-[49.3px] mx-auto top-2/3 mt-12.5">
                        <h1 className="font-inter font-medium text-[20px] text-white">Home/Service Details</h1>
                    </div>
                </div>


                <div className="mt-9 w-[1140px] flex gap-6 mx-auto">
                    <div className="">
                        <img className="w-[752px] h-[400px] rounded-[10px] mx-auto" src={img} alt="" />
                        <div className="w-[752px]">
                            <h1 className="font-bold font-inter text-[35px] text-[#151515] mt-5">{title}</h1>
                            <p className="text-[#737373] text-[16px] font-inter mt-5">{description}</p>
                        </div>
                    </div>

                    <div>
                        <div className="bg-[#F3F3F3]  w-[364px] h-[490px] rounded-[10px] mx-auto">

                            <h1 className="font-bold font-inter text-[25px] text-[#151515] pt-10 pl-9">Services</h1>
                            <div className="w-[284px] h-[56px] bg-[#FFFFFF] rounded-[5px] mx-auto mt-4 hover:bg-[#FF3811] hover:text-white transition-colors text-[#151515] flex  justify-between p-4">
                                <h1 className="font-inter font-semibold text-[16px] ">Full Car Repair</h1>
                                <FaArrowRight className='hover:text-[#FF3811] w-6 h-6' />
                            </div>
                            <div className="w-[284px] h-[56px] bg-[#FFFFFF] rounded-[5px] mx-auto mt-4 hover:bg-[#FF3811] hover:text-white transition-colors text-[#151515] flex  justify-between p-4">
                                <h1 className="font-inter font-semibold text-[16px] ">Engine Repair</h1>
                                <FaArrowRight className='hover:text-[#FF3811] w-6 h-6' />
                            </div>
                            <div className="w-[284px] h-[56px] bg-[#FFFFFF] rounded-[5px] mx-auto mt-4 hover:bg-[#FF3811] hover:text-white transition-colors text-[#151515] flex  justify-between p-4">
                                <h1 className="font-inter font-semibold text-[16px] ">Automatic Services</h1>
                                <FaArrowRight className='hover:text-[#FF3811] w-6 h-6' />
                            </div>
                            <div className="w-[284px] h-[56px] bg-[#FFFFFF] rounded-[5px] mx-auto mt-4 hover:bg-[#FF3811] hover:text-white transition-colors text-[#151515] flex  justify-between p-4">
                                <h1 className="font-inter font-semibold text-[16px] ">Engine Oil Change</h1>
                                <FaArrowRight className='hover:text-[#FF3811] w-6 h-6' />
                            </div>
                            <div className="w-[284px] h-[56px] bg-[#FFFFFF] rounded-[5px] mx-auto mt-4 hover:bg-[#FF3811] hover:text-white transition-colors text-[#151515] flex  justify-between p-4">
                                <h1 className="font-inter font-semibold text-[16px] ">Battery Charge</h1>
                                <FaArrowRight className='hover:text-[#FF3811] w-6 h-6' />
                            </div>

                        </div>

                        <div className="w-[364px] h-[262px] bg-[#151515] mt-5 rounded-[10px] mx-auto">
                            <h1 className="font-inter font-bold text-[25px] text-white pt-9 pl-9">Download</h1>
                            <div className="flex w-[320px] mx-auto mt-4">
                                <div className="flex items-center gap-4 p-4">
                                    <img className="w-[30px] h-[30px]" src={vector} alt="" />
                                    <div>
                                        <h1 className="font-semibold font-inter text-[18px] text-white">Our Brochure</h1>
                                        <p className="font-inter text-[#A2A2A2] text-[18px] ">Download</p>
                                    </div>
                                </div>
                                <div className="flex items-center justify-center ml-auto mr-6">
                                    <button className="bg-[#FF3811] w-[56px] h-[56px] rounded-[5px] flex items-center justify-center text-white  ">
                                        <FaArrowRight className='w-6 h-6' />
                                    </button>
                                </div>
                                <div>
                                </div>
                            </div>
                            <div className="flex w-[320px] mx-auto">
                                <div className="flex items-center gap-4 p-4">
                                    <img className="w-[30px] h-[30px]" src={vector} alt="" />
                                    <div>
                                        <h1 className="font-semibold font-inter text-[18px] text-white">Company Details</h1>
                                        <p className="font-inter text-[#A2A2A2] text-[18px] ">Download</p>
                                    </div>
                                </div>
                                <div className="flex items-center justify-center ml-auto mr-6">
                                    <button className="bg-[#FF3811] w-[56px] h-[56px] rounded-[5px] flex items-center justify-center text-white  ">
                                        <FaArrowRight className='w-6 h-6' />
                                    </button>
                                </div>
                            </div>
                            <div className="w-[364px] h-[489px] bg-[#151515] rounded-[10px] mt-10 justify-center items-center mx-auto flex flex-col gap-4">
                                <div className="w-[270px] h-[389px] mx-auto ">
                                    <img className="justify-center mx-auto items-center mt-5" src={logo} alt="" />
                                    <h1 className="font-bold text-white text-[20px] font-inter text-center mt-5">Need Help? We Are Here
                                        To Help You</h1>
                                    <div className="absolute w-[270px]  h-[126px] bg-[#FFFFFF] rounded-[10px] mt-5 ">
                                        <h1 className="text-[#FF3811] text-center pt-5 text-[20px] font-bold font-inter">Car Doctor <span className="text-black text-[20px] font-bold font-inter">Special</span></h1>
                                        <p className="text-[#737373] text-[16px] font-bold text-center mt-1 font-inter">Save up to <span className="text-[#FF3811]  text-[16px] font-bold font-inter">60%</span></p>
                                    </div>
                                    <div className="mx-auto relative mt-29 w-[170px]">
                                        <button className="text-white bg-[#FF3811] w-[170px] h-[56px] rounded-[5px] font-semibold text-[18px] font-inter ">Get A Quote</button>
                                    </div>
                                </div>
                            </div>
                            <p className="font-bold font-inter text-[35px] mt-5 text-[#151515]">Price ${price}</p>
                            <div>
                                <button className="bg-[#FF3811] w-[364px] h-[56px] rounded-[5px] text-white font-semibold text-[18px] font-inter mt-5">
                                    Proceed Checkout
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-[700px]">
                <Footer></Footer>
            </div>
        </div>
    );
};

export default ServicesDetails;