import React from "react";
import about from '../assets/images/about.jpg'
import '../assets/css/About.css'
import Navbar from "../components/Navbar";
import { useState } from "react";
import AdminSidebar from "../components/AdminSidebar";
function AboutEdit() {
    const [editableContent, setEditableContent] = useState(`Embark on a journey with AquaMarina Boat House Booking Platform and discover the freedom and excitement of the open sea. Book your adventure today, and let's create memories that will last a lifetime.`);

    const handleEdit = () => {
        if (editableContent.trim() === "") return;
        // Call your API or save the content to a database
        console.log("Content saved:", editableContent);
      };
    
    return (
        <div className="adedit">
        <AdminSidebar/>
        <section className="section_all bg-light" id="about">
            <div className="about-container">
                <div className="row-about">
                    <div className="col-lg-12">
                        <div className="section_title_all text-center">
                            <h3 className="font-weight-bold">
Welcome to our <span className="text-custom">AquaMarina Boat House Booking!</span></h3>
                            <p className="section_subtitle mx-auto text-muted"> Our mission is to connect boat house owners with travelers seeking unique and memorable experiences on the water. We strive to make the booking process convenient, secure, and transparent for both hosts and guests, fostering a community built on trust and mutual respect.
                            <br/></p>
                            <div className="">
                                <i className=""></i>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row vertical_content_manage mt-5">
                    <div className="col-lg-6">
                        <div className="about_header_main mt-3">
                            <div className="about_icon_box">
                                <p className="text_custom font-weight-bold">Empowering Your Water Adventures:
We are on a mission to empower individuals, families, and groups to explore the beauty of the waterways hassle-free. Our platform provides a user-friendly interface, ensuring that your journey from booking to boarding is smooth and stress-free.</p>
                            </div>
                            <h4 className="about_heading text-capitalize font-weight-bold mt-4">Join Us On Water</h4>
                            <p className="text-muted mt-3">Embark on a journey with AquaMarina Boat House Booking Platform and discover the freedom and excitement of the open sea. Book your adventure today, and let's create memories that will last a lifetime.

</p>
                            <h4 className="about_heading text-capitalize font-weight-bold mt-4">Get In Touch</h4>

                            <p className="text-muted mt-3">
Ready to embark on your next boating journey? Start exploring our collection of boat houses today! For inquiries or assistance, feel free to reach out to our friendly team at <a href='/Contact'>Contact</a>.</p>
                            <h4 className="about_heading text-capitalize font-weight-bold mt-4">Our Team</h4>
                            <p className="text-muted mt-3">Behind AquaMarina Boat House Booking is a dedicated team of professionals passionate about boating and committed to delivering excellence. From our customer support specialists to our technical experts, each member of our team plays a crucial role in ensuring you have a memorable booking experience.
</p>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="img_about mt-3">
                            <img src={about} style={{height:"400px"}} alt="" className="img-fluid mx-auto d-block"/>
                        </div>
                    </div>
                </div>

                <div className="row mt-3">
                    <div className="col-lg-4">
                        <div className="about_content_box_all mt-3">
                            <div className="about_detail text-center">
                                <div className="about_icon">

                                    <i className="fas fa-pencil-alt"></i>
                                </div>
                                <h5 className="text-dark text-capitalize mt-3 font-weight-bold">Creative Design</h5>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className="about_content_box_all mt-3">
                            <div className="about_detail text-center">
                                <div className="about_icon">
                                    <i className="fab fa-angellist"></i>
                                </div>
                                <h5 className="text-dark text-capitalize mt-3 font-weight-bold">We make Best Result</h5>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className="about_content_box_all mt-3">
                            <div className="about_detail text-center">
                                <div className="about_icon">
                                    <i className="fas fa-paper-plane"></i>
                                </div>
                                <h5 className="text-dark text-capitalize mt-3 font-weight-bold">best platform </h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row mt-5 text-center">
          <div className="col-12">
            <button
              className="btn btn-primary m-2"
              onClick={() => setEditableContent(editableContent)}
            >
              Cancel
            </button>
            <button className="btn btn-success m-2" onClick={handleEdit}>
              Save
            </button>
          </div>
        </div>
        </section>
        </div>
    );
}

export default AboutEdit;
