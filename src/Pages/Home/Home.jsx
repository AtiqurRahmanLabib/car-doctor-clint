import React, { useEffect, useState } from 'react';
import Banner from '../../Components/Banner/Banner';
import Person from '../../assets/images/about_us/person.jpg'
import parts from '../../assets/images/about_us/parts.jpg'
import Services from '../../Components/Services/Services';
import Navbar from '../Shared/Navbar/Navbar';
import Footer from '../Shared/Footer/Footer';
import Products from '../../Components/Products/Products';
import teamMember1 from '../../assets/images/team/1.jpg';
import teamMember2 from '../../assets/images/team/2.jpg';
import teamMember3 from '../../assets/images/team/3.jpg';
import icon1 from '../../assets/icons/Group 38729.svg';
import icon2 from '../../assets/icons/check.svg';
import icon3 from '../../assets/icons/deliveryt.svg';
import icon4 from '../../assets/icons/group.svg';
import icon5 from '../../assets/icons/person.svg';
import icon6 from '../../assets/icons/Wrench.svg';
import CustomerReview from '../../Components/CustomerReview/CustomerReview';


const Home = () => {
    const [services, setServices] = useState([]);
    const [products, setProducts] = useState([]);
    const [description, setDescription] = useState([]);
    const [visibleReviews, setVisibleReviews] = useState(2);

    const showMoreReviews = () => {
        setVisibleReviews(prev => prev + 2);
    };

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    useEffect(() => {
        fetch('http://localhost:5000/customer_reviews')
            .then(res => res.json())
            .then(data => setDescription(data))
    }, [])




    return (
        <div className="overflow-x-hidden">
            <Navbar></Navbar>

            {/* Banner Section */}
            <section className="banner px-4 md:px-6">
                <div className="container max-w-6xl mx-auto py-10">
                    <Banner></Banner>
                </div>
            </section>

            {/* About us section */}
            <section className="about px-4 md:px-6 py-12 md:py-20">
                <div className='container max-w-6xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-8 md:gap-12'>
                    <div className='relative w-full lg:w-1/2'>
                        <img className='w-full max-w-md rounded-lg' src={Person} alt="Mechanic working" />
                        <img className='w-2/3 max-w-xs rounded-lg absolute -right-4 -bottom-4 md:-right-8 md:-bottom-8 border-4 md:border-8 border-white' src={parts} alt="Car parts" />
                    </div>

                    <div className='w-full lg:w-1/2 space-y-4'>
                        <h1 className='text-orange-600 text-lg md:text-xl font-bold'>About Us</h1>
                        <h2 className='text-gray-900 font-bold text-3xl md:text-4xl lg:text-5xl leading-tight'>
                            We are qualified <br /> & of experience <br /> in this field
                        </h2>
                        <p className='text-gray-800'>
                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                        </p>
                        <p className='text-gray-500'>
                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                        </p>
                        <button className='px-6 py-3 bg-orange-600 rounded-md text-lg font-semibold text-white mt-4 hover:bg-orange-700 transition-colors'>
                            Get More Info
                        </button>
                    </div>
                </div>
            </section>

            {/* Services section */}
            <section className="services px-4 md:px-6 py-12 md:py-20">
                <div className='container max-w-6xl mx-auto text-center mb-12'>
                    <h1 className='text-orange-600 text-lg md:text-xl font-bold'>Service</h1>
                    <h2 className='text-3xl md:text-4xl font-bold text-gray-900'>Our Service Area</h2>
                    <p className='text-gray-500 mt-2 max-w-2xl mx-auto'>
                        The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                    </p>
                </div>

                <div className='container max-w-6xl mx-auto'>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                        {services.map(service => (
                            <Services
                                key={service._id}
                                service={service}
                            />
                        ))}
                    </div>
                </div>

                <div className='container max-w-6xl mx-auto text-center mt-12'>
                    <button className='px-6 py-3 border border-orange-600 rounded-md text-lg font-semibold text-orange-600 hover:bg-orange-600 hover:text-white transition-colors'>
                        More Services
                    </button>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta px-4 md:px-6 py-12">
                <div className='flex items-center justify-evenly container max-w-6xl mx-auto bg-gray-900 rounded-lg h-48 md:h-64'>
                    <div>
                        <h1 className='font-inter font-medium text-[16px] text-white'>We are open monday-friday</h1>
                        <p className='font-inter font-bold text-[25px] text-white'>7:00 am - 9:00 pm</p>
                    </div>
                    <div>
                        <h1 className='font-inter font-medium text-[16px] text-white'>Have a qeastion?</h1>
                        <p className='font-inter font-bold text-[25px] text-white'>+2546 251 2658</p>
                    </div>
                    <div>
                        <h1 className='font-inter font-medium text-[16px] text-white'>Need a repair? our address</h1>
                        <p className='font-inter font-bold text-[25px] text-white'>Liza Street, New York</p>
                    </div>
                </div>
            </section>

            {/* Products Section */}
            <section className="products px-4 md:px-6 py-12 md:py-20">
                <div className='container max-w-6xl mx-auto text-center'>
                    <h1 className='text-orange-600 text-lg md:text-xl font-bold'>Popular Products</h1>
                    <h2 className='text-gray-900 text-3xl md:text-4xl font-bold'>Browse Our Products</h2>
                    <p className='text-gray-500 mt-2 max-w-2xl mx-auto'>
                        The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                    </p>
                </div>
            </section>
            <section>

                <div className='container max-w-6xl mx-auto'>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                        {products.map(product => (
                            <Products
                                key={product._id}
                                product={product}
                            />
                        ))}
                    </div>
                </div>
            </section>
            <div className='container max-w-6xl mx-auto text-center mt-12 mb-20'>
                <button className='px-6 py-3 border border-orange-600 rounded-md text-lg font-semibold text-orange-600 hover:bg-orange-600 hover:text-white transition-colors'>
                    More Products
                </button>
            </div>

            <div className='w-[717px] h-[178px] mx-auto text-center '>
                <h1 className='font-inter font-bold text-[20px] text-[#FF3811]'>Team</h1>
                <h2 className='text-[#151515] font-bold text-[45px] font-inter'>Meet Our Team</h2>
                <p className='font-inter text-[16px] text-[#737373]'>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
            </div>
            <div className='flex flex-col lg:flex-row justify-between items-center gap-6 lg:gap-8 mx-auto w-[1170px] mt-10 mb-20'>
                <div className='w-[364px] h-[487px] rounded-[10px] border border-[#E8E8E8]'>
                    <div className='w-[314px] h-[293px] rounded-[10px] mx-auto mt-4'>
                        <img className='w-[314px] h-[293px] rounded-[10px]' src={teamMember1} alt="" />
                    </div>
                    <div className='p-4 text-center'>
                        <h1 className='font-bold text-[25px] font-inter text-[#444444]'>Car Engine Plug</h1>
                        <p className='text-[#737373] font-semibold text-[20px]'>Engine Expert</p>
                    </div>
                </div>
                <div className='w-[364px] h-[487px] rounded-[10px] border border-[#E8E8E8]'>
                    <div className='w-[314px] h-[293px] rounded-[10px] mx-auto mt-4'>
                        <img className='w-[314px] h-[293px] rounded-[10px]' src={teamMember2} alt="" />
                    </div>
                    <div className='p-4 text-center'>
                        <h1 className='font-bold text-[25px] font-inter text-[#444444]'>Car Engine Plug</h1>
                        <p className='text-[#737373] font-semibold text-[20px]'>Engine Expert</p>
                    </div>
                </div>
                <div className='w-[364px] h-[487px] rounded-[10px] border border-[#E8E8E8]'>
                    <div className='w-[314px] h-[293px] rounded-[10px] mx-auto mt-4'>
                        <img className='w-[314px] h-[293px] rounded-[10px]' src={teamMember3} alt="" />
                    </div>
                    <div className='p-4 text-center'>
                        <h1 className='font-bold text-[25px] font-inter text-[#444444]'>Car Engine Plug</h1>
                        <p className='text-[#737373] font-semibold text-[20px]'>Engine Expert</p>
                    </div>
                </div>
            </div>
            <div className='w-[717px] h-[178px] mx-auto text-center '>
                <h1 className='font-inter font-bold text-[20px] text-[#FF3811]'>Core Features</h1>
                <h2 className='text-[#151515] font-bold text-[45px] font-inter'>Why Choose Us</h2>
                <p className='font-inter text-[16px] text-[#737373]'>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
            </div>
            <div className='flex flex-col lg:flex-row justify-between items-center gap-6 lg:gap-8 mx-auto w-[1170px] mt-10 mb-20'>

                <div className='w-[170px] h-[156px] rounded-[10px] border border-[#E8E8E8] hover:bg-[#FF3811] mt-10 hover:text-white content-center' >
                    <div className='mt-5 w-[50px] mx-auto'>
                        <img className='w-[50px] h-[50px]' src={icon4} alt="" />
                    </div>
                    <h1 className='font-inter font-bold text-center pt-5 text-[18px] text-[#444444] '>Expert Team</h1>
                </div>

                <div className='w-[170px] h-[156px] rounded-[10px] border border-[#E8E8E8] bg-[#FF3811] mt-10 hover:text-white content-center'>
                    <div className='mt-5 w-[50px] mx-auto'>
                        <img className='w-[50px] h-[50px]' src={icon1} alt="" />
                    </div>
                    <h1 className='font-inter font-bold text-center pt-5 text-[18px] text-[#444444] '>Timely Delivery</h1>
                </div>

                <div className='w-[170px] h-[156px] rounded-[10px] border border-[#E8E8E8] hover:bg-[#FF3811] mt-10 hover:text-white content-center'>
                    <div className='mt-5 w-[50px] mx-auto'>
                        <img className='w-[50px] h-[50px]' src={icon5} alt="" />
                    </div>
                    <h1 className='font-inter font-bold text-center pt-5 text-[18px] text-[#444444] '>24/7 Support</h1>
                </div>

                <div className='w-[170px] h-[156px] rounded-[10px] border border-[#E8E8E8] hover:bg-[#FF3811] mt-10 hover:text-white content-center'>
                    <div className='mt-5 w-[50px] mx-auto'>
                        <img className='w-[50px] h-[50px]' src={icon6} alt="" />
                    </div>
                    <h1 className='font-inter font-bold text-center pt-5 text-[18px] text-[#444444] '>Best Equipment</h1>
                </div>

                <div className='w-[170px] h-[156px] rounded-[10px] border border-[#E8E8E8] hover:bg-[#FF3811] mt-10 hover:text-white content-center'>
                    <div className='mt-5 w-[50px] mx-auto'>
                        <img className='w-[50px] h-[50px]' src={icon2} alt="" />
                    </div>
                    <h1 className='font-inter font-bold text-center pt-5 text-[18px] text-[#444444] '>100% Guranty</h1>
                </div>

                <div className='w-[170px] h-[156px] rounded-[10px] border border-[#E8E8E8] hover:bg-[#FF3811] mt-10 hover:text-white content-center'>
                    <div className='mt-5 w-[50px] mx-auto'>
                        <img className='w-[50px] h-[50px]' src={icon3} alt="" />
                    </div>
                    <h1 className='font-inter font-bold text-center pt-5 text-[18px] text-[#444444] hover:text-white '>Timely Delivery</h1>

                </div>
            </div>

            <div className='w-[717px] h-[178px] mx-auto text-center '>
                <h1 className='font-inter font-bold text-[20px] text-[#FF3811]'>Testimonial</h1>
                <h2 className='text-[#151515] font-bold text-[45px] font-inter'>What Customer Says</h2>
                <p className='font-inter text-[16px] text-[#737373]'>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
            </div>
            <section>
                <div className='container max-w-6xl mx-auto'>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6'>
                        {description.slice(0, visibleReviews).map(sReview => (
                            <CustomerReview
                                key={sReview._id}
                                description={sReview}
                            />
                        ))}
                    </div>
                    {visibleReviews < description.length && (
                        <div className="container max-w-6xl mx-auto text-center mt-12 mb-20">
                            <button
                                onClick={showMoreReviews}
                                className="px-6 py-3 border border-orange-600 rounded-md text-lg font-semibold text-orange-600 hover:bg-orange-600 hover:text-white transition-colors"
                            >
                                Show More
                            </button>
                        </div>
                    )}
                </div>
            </section>
            <Footer></Footer>
        </div>
    );
};

export default Home;