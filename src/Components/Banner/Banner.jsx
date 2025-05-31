import React, { useState, useEffect } from 'react';
import banner1 from '../../assets/images/homeCarousel/1.jpg';
import banner2 from '../../assets/images/homeCarousel/2.jpg';
import banner3 from '../../assets/images/homeCarousel/3.jpg';
import banner4 from '../../assets/images/homeCarousel/4.jpg';

const Banner = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

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

    // Auto-play functionality
    useEffect(() => {
        let interval;
        if (isAutoPlaying) {
            interval = setInterval(() => {
                nextSlide();
            }, 5000);
        }
        return () => clearInterval(interval);
    }, [currentSlide, isAutoPlaying]);

    return (
        <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] rounded-lg overflow-hidden">
            {/* Current Slide */}
            <div 
                key={slides[currentSlide].id} 
                className="relative w-full h-full rounded-lg overflow-hidden"
            >
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
                    <div className="absolute top-1/3 md:top-2/5 left-4 sm:left-8 md:left-16 lg:left-24 transform -translate-y-1/2 text-white max-w-xs sm:max-w-sm md:max-w-md">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
                            Affordable <br /> Price For Car Servicing
                        </h1>
                        <p className="text-sm sm:text-base mt-2 sm:mt-3 md:mt-4">
                            There are many variations of passages available, but the majority have suffered alteration in some form
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 mt-4 sm:mt-5">
                            <button 
                                className="px-4 py-2 sm:px-6 sm:py-3 bg-orange-600 hover:bg-orange-700 text-white rounded-md font-medium transition-colors"
                                onClick={() => setIsAutoPlaying(false)}
                            >
                                Discover More
                            </button>
                            <button 
                                className="px-4 py-2 sm:px-6 sm:py-3 bg-transparent hover:bg-white/10 text-white border border-white rounded-md font-medium transition-colors"
                                onClick={() => setIsAutoPlaying(false)}
                            >
                                Latest Project
                            </button>
                        </div>
                    </div>
                </div>

                {/* Navigation Arrows - Only visible on large screens */}
                <div className="hidden lg:flex absolute right-5 bottom-5 gap-3">
                    <button
                        onClick={() => {
                            prevSlide();
                            setIsAutoPlaying(false);
                        }}
                        className="bg-white/20 w-12 h-12 rounded-full flex items-center justify-center text-white hover:bg-orange-600 border-none transition-colors"
                        aria-label="Previous slide"
                    >
                        ❮
                    </button>
                    <button
                        onClick={() => {
                            nextSlide();
                            setIsAutoPlaying(false);
                        }}
                        className="bg-white/20 w-12 h-12 rounded-full flex items-center justify-center text-white hover:bg-orange-600 border-none transition-colors"
                        aria-label="Next slide"
                    >
                        ❯
                    </button>
                </div>

                {/* Slide Indicator Dots - Always visible */}
                <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex gap-2">
                    {slides.map((slide, index) => (
                        <button
                            key={slide.id}
                            onClick={() => {
                                setCurrentSlide(index);
                                setIsAutoPlaying(false);
                            }}
                            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-colors ${currentSlide === index ? 'bg-white' : 'bg-gray-400 hover:bg-gray-300'}`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Banner;