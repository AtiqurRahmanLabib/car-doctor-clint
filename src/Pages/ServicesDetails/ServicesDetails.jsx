import Navbar from "../Shared/Navbar/Navbar";
import { Link, useLoaderData } from "react-router-dom";
import checkOutLogo from "../../assets/images/checkout/checkout.png";
import vector from '../../assets/icons/Vector.png';
import { FaArrowRight } from "react-icons/fa6";
import logo from '../../assets/logo.svg';
import Footer from "../Shared/Footer/Footer";

const ServicesDetails = () => {
    const service = useLoaderData();
    const { _id, img, title, price, description, facility } = service;

    return (
        <div className="overflow-x-hidden">
            <Navbar />

            {/* Hero Banner Section */}
            <div className="w-full px-4 md:px-0 md:w-[90%] lg:w-[1137px] h-[200px] md:h-[250px] lg:h-[300px] mx-auto mt-5 relative">
                <p className="absolute z-10 text-white text-2xl md:text-3xl lg:text-[45px] font-bold top-1/4 md:top-1/3 left-4 md:left-8 lg:left-22 font-inter">
                    Service Details
                </p>
                <div className="relative w-full h-full">
                    <img
                        className="rounded-[10px] w-full h-full object-cover brightness-75"
                        src={checkOutLogo}
                        alt="Service Details"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 rounded-[10px] bg-gradient-to-b from-[#151515] to-[#151515] opacity-50 mix-blend-multiply"></div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center bg-[#FF3811] w-[80%] sm:w-[296px] h-[40px] sm:h-[49.3px] mx-auto top-2/3 mt-8 sm:mt-12.5">
                    <h1 className="font-inter font-medium text-sm sm:text-[20px] text-white">
                        Home/Service Details
                    </h1>
                </div>
            </div>

            {/* Main Content Section */}
            <div className="mt-9 w-full px-4 md:px-0 md:w-[90%] lg:w-[1140px] flex flex-col lg:flex-row gap-6 mx-auto">
                {/* Left Column */}
                <div className="w-full lg:w-[752px]">
                    <img
                        className="w-full h-[300px] md:h-[350px] lg:h-[400px] rounded-[10px] mx-auto"
                        src={img}
                        alt={title}
                    />

                    <div className="w-full mt-5">
                        <h1 className="font-bold font-inter text-2xl md:text-3xl lg:text-[35px] text-[#151515]">
                            {title}
                        </h1>
                        <p className="text-[#737373] text-sm md:text-[16px] font-inter mt-3 md:mt-5">
                            {description}
                        </p>
                    </div>

                    {/* Facility Cards */}
                    <div className="mt-8 md:mt-10 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                        {Array.isArray(facility) && facility.length > 0 ? (
                            facility.map((item, index) => (
                                <div
                                    key={index}
                                    className="bg-[#F3F3F3] p-4 md:p-6 pt-6 md:pt-9 rounded-[10px] border-t-4 border-t-[#FF3811] w-full h-auto md:h-[204px]"
                                >
                                    <h3 className="font-inter font-bold text-lg md:text-[20px] text-[#444444] mb-2 md:mb-3">
                                        {item.name || 'Service Feature'}
                                    </h3>
                                    <p className="font-inter text-[#737373] text-sm md:text-[16px]">
                                        {item.details || 'No description available'}
                                    </p>
                                </div>
                            ))
                        ) : (
                            <div className="col-span-2 text-center py-8 text-[#737373]">
                                No facility information available
                            </div>
                        )}
                    </div>

                    <p className="text-[#737373] text-sm md:text-[16px] font-inter mt-5 md:mt-8">
                        {description}
                    </p>

                    <h1 className="font-bold text-2xl md:text-3xl lg:text-[35px] font-inter text-[#151515] mt-5 md:mt-8">
                        3 Simple Steps to Process
                    </h1>

                    <p className="text-[#737373] text-sm md:text-[16px] font-inter mt-3 md:mt-5">
                        {description}
                    </p>
                </div>

                {/* Right Column */}
                <div className="w-full lg:w-[364px] mt-6 lg:mt-0">
                    {/* Services List */}
                    <div className="bg-[#F3F3F3] w-full h-auto md:h-[490px] rounded-[10px] mx-auto p-4 md:p-0">
                        <h1 className="font-bold font-inter text-xl md:text-[25px] text-[#151515] pt-6 md:pt-10 pl-4 md:pl-9">
                            Services
                        </h1>

                        {['Full Car Repair', 'Engine Repair', 'Automatic Services', 'Engine Oil Change', 'Battery Charge'].map((serviceName, index) => (
                            <div
                                key={index}
                                className="w-full md:w-[284px] h-[50px] md:h-[56px] bg-white rounded-[5px] mx-auto mt-3 md:mt-4 hover:bg-[#FF3811] hover:text-white transition-colors text-[#151515] flex justify-between items-center p-3 md:p-4"
                            >
                                <h1 className="font-inter font-semibold text-sm md:text-[16px]">
                                    {serviceName}
                                </h1>
                                <FaArrowRight className='text-[#FF3811] group-hover:text-white w-5 h-5 md:w-6 md:h-6' />
                            </div>
                        ))}
                    </div>

                    {/* Download Section */}
                    <div className="w-full h-auto md:h-[262px] bg-[#151515] mt-5 rounded-[10px] mx-auto p-4 md:p-0">
                        <h1 className="font-inter font-bold text-xl md:text-[25px] text-white pt-6 md:pt-9 pl-4 md:pl-9">
                            Download
                        </h1>

                        {['Our Brochure', 'Company Details'].map((item, index) => (
                            <div key={index} className="flex w-full md:w-[320px] mx-auto mt-3 md:mt-4">
                                <div className="flex items-center gap-3 md:gap-4 p-2 md:p-4">
                                    <img className="w-6 h-6 md:w-[30px] md:h-[30px]" src={vector} alt="" />
                                    <div>
                                        <h1 className="font-semibold font-inter text-base md:text-[18px] text-white">
                                            {item}
                                        </h1>
                                        <p className="font-inter text-[#A2A2A2] text-base md:text-[18px]">
                                            Download
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-center justify-center ml-auto mr-2 md:mr-6">
                                    <button className="bg-[#FF3811] w-10 h-10 md:w-[56px] md:h-[56px] rounded-[5px] flex items-center justify-center text-white">
                                        <FaArrowRight className='w-4 h-4 md:w-6 md:h-6' />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Help Section */}
                    <div className="w-full h-auto md:h-[489px] bg-[#151515] rounded-[10px] mt-5 md:mt-10 mx-auto p-4 md:p-0">
                        <div className="w-full md:w-[270px] h-auto mx-auto py-5 md:py-0 md:mt-5 flex flex-col items-center">
                            <img className="w-20 md:w-auto" src={logo} alt="Logo" />
                            <h1 className="font-bold text-white text-lg md:text-[20px] font-inter text-center mt-3 md:mt-5">
                                Need Help? We Are Here To Help You
                            </h1>
                            <div className="relative w-full md:w-[270px] h-[100px] md:h-[126px] bg-white rounded-[10px] mt-4 md:mt-5 p-4">
                                <h1 className="text-[#FF3811] text-center text-lg md:text-[20px] font-bold font-inter">
                                    Car Doctor <span className="text-black">Special</span>
                                </h1>
                                <p className="text-[#737373] text-sm md:text-[16px] font-bold text-center mt-1 font-inter">
                                    Save up to <span className="text-[#FF3811]">60%</span>
                                </p>
                            </div>
                            <div className="w-full md:w-[170px] mt-6 md:mt-8">
                                <button className="text-white bg-[#FF3811] w-full h-12 md:h-[56px] rounded-[5px] font-semibold text-base md:text-[18px] font-inter">
                                    Get A Quote
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Price and Checkout */}
                    <div className="mt-5">
                        <p className="font-bold font-inter text-2xl md:text-3xl lg:text-[35px] text-[#151515]">
                            Price ${price}
                        </p>
                        <div className="mt-4">
                            <Link to={`/checkout/${_id}`}>
                                <button className="bg-[#FF3811] w-full h-12 md:h-[56px] rounded-[5px] text-white font-semibold text-base md:text-[18px] font-inter">
                                    Proceed Checkout
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default ServicesDetails;