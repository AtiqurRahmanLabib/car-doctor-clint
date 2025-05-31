import React, { useEffect, useState } from 'react';
import Banner from '../../Components/Banner/Banner';
import Person from '../../assets/images/about_us/person.jpg'
import parts from '../../assets/images/about_us/parts.jpg'
import Services from '../../Components/Services/Services';
import Navbar from '../Shared/Navbar/Navbar';
import Footer from '../Shared/Footer/Footer';

const Home = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('../../../public/Data/services.json')
            .then(res => res.json())
            .then(data => setServices(data))
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
                <div className='container max-w-6xl mx-auto bg-gray-900 rounded-lg h-48 md:h-64'></div>
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

            <Footer></Footer>
        </div>
    );
};

export default Home;