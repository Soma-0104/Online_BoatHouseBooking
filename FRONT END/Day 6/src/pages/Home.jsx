import React from "react";
import '../assets/css/Home.css';
import Footer from "../components/Footer";
import ImageSlider from "../components/ImageSlider";
import Navbar from '../components/Navbar';
import boat from '../assets/images/boat.jpg';
import boat2 from '../assets/images/boat2.jpg';
import boathouse from '../assets/images/boathouse.jpg';

function Home() {
    const slides = [
        { image: boat },
        { image: boat2 },
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
