import React, { useState, useEffect } from 'react';
import '../assets/css/ImageSlider.css';
import { Link } from 'react-router-dom';
const ImageSlider = ({ slides, autoPlay }) => {
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

    useEffect(() => {
        if (autoPlay) {
            const interval = setInterval(() => {
                setCurrentSlideIndex(prevIndex => (prevIndex + 1) % slides.length);
            }, 3000); // Change slide every 3 seconds
            return () => clearInterval(interval);
        }
    }, [autoPlay, slides.length]);

    const nextSlide = () => {
        setCurrentSlideIndex(prevIndex => (prevIndex + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlideIndex(prevIndex => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
    };

    return (
        <div className="slider">
            <button className="prev" onClick={prevSlide}>&#10094;</button>
            {slides.map((slide, index) => (
                <div key={index} className={index === currentSlideIndex ? 'slide active' : 'slide'}>
                    <img src={slide.image} alt={`Slide ${index}`} />
                    <div className="home-box">
                        <h1>Book your Boat House</h1>
                        <p>Your one-stop destination for booking boat houses for your next vacation!</p>
                        <Link to='/Role'><button className="book-now-button">Book Now</button></Link>
                    </div>
                </div>
            ))}
            <button className="next" onClick={nextSlide}>&#10095;</button>
        </div>
    );
};

export default ImageSlider;
