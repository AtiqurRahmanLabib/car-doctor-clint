import React, { useEffect, useState } from 'react';
import Banner from '../../Components/Banner/Banner';
import Person from '../../assets/images/about_us/person.jpg'
import parts from '../../assets/images/about_us/parts.jpg'
import Services from '../../Components/Services/Services';

const Home = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('../../../public/Data/services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div>
            {/* Banner Section  starting point */}

            <section className="banner">
                <div className="container w-[1140px] h-[600px]  mx-auto mt-10">
                    <Banner></Banner>
                </div>
            </section>

            {/* Banner section end point */}

            {/*About us section starting point */}

            <div className='w-[1140px] h-[557px] mt-25 mx-auto flex justify-between mb-2'>
                <div className='w-[521px] h-[557px]'>
                    <img className='w-[460px]  h-[473px] rounded-[10px]' src={Person} alt="" />
                    <img className='w-[327px]  h-[332px] rounded-[10px] absolute right-1/2 top-4/3 mt-9 mr-12 border-white border-8 ' src={parts} alt="" />
                </div>

                <div className='w-[489px]'>
                    <h1 className='text-[#FF3811] text-[20px] font-bold font-inter'>About Us</h1>
                    <h2 className='text-[#151515] font-bold text-[45px] font-inter'>We are qualified <br /> & of experience <br /> in this field</h2>
                    <p className='font-inter text-[16px] text-[#250f0f] mt-2'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>

                    <p className='font-inter text-[16px] text-[#737373] mt-5'>
                        There are many variations of passages of Lorem Ipsum available, but
                        <br />
                        the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                    </p>
                    <button className='w-[170px] h-[56px] bg-[#FF3811] rounded-[5px] text-[18px] font-inter font-semibold text-white mt-5'>Get More Info</button>
                </div>

            </div>

            {/*About us section ending point */}

            <div className='mx-auto w-[376px] h-[98px] mb-2 mt-20 text-center' >
                <h1 className='text-[#FF3811] text-[20px] font-bold font-inter'>Service</h1>
                <h2 className='text-[45px] font-bold font-inter text-[#151515]'>Our Service Area</h2>
            </div>
            <p className='text-[16px] font-inter text-[#737373] text-center'>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>



            <div className='grid grid-cols-3 w-[1140px] mx-auto gap-5 mt-5' >
                {
                    services.map(service => (
                        <Services
                            key={service._id}
                            service={service}
                        />
                    ))
                }
            </div>


            <div className='w-[1140px] h-[98px] mx-auto mt-10 text-center'>
            <button className='rounded-[5px] w-[170px] h-[56px] border border-[#FF3811] text-[#FF3811] font-semibold font-inter text-[18px]'>More Services</button>
            </div>
                <div className='w-[1140px] h-[250px] mx-auto mt-10 bg-[#151515] rounded-[10px] mb-10'>

                </div>

                <div className='mx-auto text-center'>
                    <h1 className='font-inter font-bold text-[20px] text-[#FF3811]'>Popular Products</h1>
                    <p className='text-[#151515] text-[45px] font-bold font-inter'>Browse Our Products</p>
                    <p className='font-inter text-[16px] text-[#737373] mt-2'>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
                </div>




        </div>

    );
};

export default Home;