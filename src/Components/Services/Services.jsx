
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";


const Services = ({ service }) => {  // Changed from services to service
    const { _id, img, title, price } = service;  // Changed from services to service
    return (
        <div className='justify-center mx-auto w-[364px] h-[348px] rounded-md border p-4 border-[#E8E8E8]'>
            <div className='rounded-2xl w-[314px] h-[208.01px] mx-auto'>
                <img className='w-[314px] h-[208.01px]  rounded-[10px]'
                    src={img} 
                    alt={title} 
                />
            </div>
            <div className='p-4'>
                <h1 className='text-[25px] font-inter text-[#444444] font-bold mt-4 '>{title}</h1>
                <div className="flex items-center justify-between mt-2">
                    <p className='text-[#FF3811] font-semibold text-[20px] font-inter mt-'>${price}</p>
                <Link to={`/servicesDetails/${_id}`} className='flex items-center gap-2 text-[#FF3811] font-semibold text-[20px] font-inter '>
                <FaArrowRight className='text-[#FF3811] w-6 h-6' />
                </Link>
                </div>
            </div>
        </div>
    );
};

export default Services;