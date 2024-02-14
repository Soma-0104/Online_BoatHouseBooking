import React from "react";
import '../assets/css/Home.css';
import Footer from "../components/Footer";
import ImageSlider from "../components/ImageSlider";
import Navbar from '../components/Navbar';
import boat from '../assets/images/boat.jpg';
import boat3 from '../assets/images/boat3.jpg';
import boat1 from '../assets/images/boat1.jpg';
import boat5 from '../assets/images/boat5.jpg';
import boat6 from '../assets/images/boat6.jpg';
import boat4 from '../assets/images/boat4.jpg';
import boat2 from '../assets/images/boat2.jpg';
import boat7 from '../assets/images/bo1.webp';
import boat8 from '../assets/images/pro.jpg';
import boathouse from '../assets/images/boathouse.jpg';

function Home() {
    const slides = [
        { image: boat },
        { image: boat2 },
        { image: boat3 },
        { image: boat4 },
        { image: boat5 },
        { image: boat6 },
        { image: boat7 },
        { image: boat8 },
        { image: boat1 },
        { image: boathouse }
    ];

    return (
        <div>
            <Navbar />
            <ImageSlider slides={slides} autoPlay={true} />
            <Footer />
        </div>
    );
}

export default Home;
