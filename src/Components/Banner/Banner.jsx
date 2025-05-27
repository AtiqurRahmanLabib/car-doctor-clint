import React, { useState } from 'react';
import banner1 from '../../assets/images/homeCarousel/1.jpg';
import banner2 from '../../assets/images/homeCarousel/2.jpg';
import banner3 from '../../assets/images/homeCarousel/3.jpg';
import banner4 from '../../assets/images/homeCarousel/4.jpg';

const Banner = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            id: 1,
            src: banner1,
            alt: "Slide 1"
        },
        {
            id: 2,
            src: banner2,
            alt: "Slide 2"
        },
        {
            id: 3,
            src: banner3,
            alt: "Slide 3"
        },
        {
            id: 4,
            src: banner4,
            alt: "Slide 4"
        },
    ];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    return (
        <div className="carousel relative w-[1140px] h-[600px] rounded-[10px]">
            {/* Current Slide */}
            <div key={slides[currentSlide].id} className="carousel-item relative w-full h-full rounded-[10px] overflow-hidden">
                {/* Image with gradient overlay */}
                <div className="relative w-full h-full">
                    <img
                        src={slides[currentSlide].src}
                        alt={slides[currentSlide].alt}
                        className="w-full h-full object-cover"
                    />
                    {/* Gradient overlay */}
                    <div
                        className="absolute inset-0"
                        style={{
                            background: 'linear-gradient(to top, #151515 0%, transparent 100%)'
                        }}
                    />

                    {/* Headline and buttons container */}
                    <div className="absolute top-2/5 left-18 transform -translate-y-1/2 text-white max-w-md justify-center ite">
                        <h1 className="text-[50px] font-bold font-inter">
                            Affordable <br /> Price For Car Servicing
                        </h1>
                        <p className="text-[16px] font-inter">
                            There are many variations of passages of  available, but <br />the majority have suffered alteration in some form                        </p>
                        <div className="flex gap-4 mt-5">
                            <button className="btn bg-[#FF3811] hover:bg-[#e0310f] text-white border-none rounded-[5px] font-medium w-[170px] h-[56px]">
                                Discover More
                            </button>
                            <button className="btn bg-transparent hover:bg-white/10 text-white border border-white px-8 py-3 rounded-md font-medium">
                                Latest Project
                            </button>
                        </div>
                    </div>
                </div>

                {/* Navigation Arrows */}
                <div className="absolute left-5 right-12 bottom-2 flex -translate-y-1/2 transform justify-end gap-5">
                    <button
                        onClick={prevSlide}
                        className="btn btn-circle bg-[#FFFFFF]/20 w-[60px] h-[60px] rounded-full bg-opacity-20 text-white hover:bg-[#FF3811] border-none"
                    >
                        ❮
                    </button>
                    <button
                        onClick={nextSlide}
                        className="btn btn-circle bg-[#FFFFFF]/20 w-[60px] h-[60px] rounded-full bg-opacity-20 text-white hover:bg-[#FF3811] border-none"
                    >
                        ❯
                    </button>
                </div>

                {/* Slide Indicator Dots */}
                <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex gap-2">
                    {slides.map((slide, index) => (
                        <button
                            key={slide.id}
                            onClick={() => setCurrentSlide(index)}
                            className={`w-3 h-3 rounded-full ${currentSlide === index ? 'bg-white' : 'bg-gray-400'}`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Banner;