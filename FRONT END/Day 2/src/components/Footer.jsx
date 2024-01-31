import React from 'react';
import '../assets/css/Footer.css'
import { CDBIcon, CDBContainer } from 'cdbreact';
export default function Footer() {
  return (
    <>
    <footer class="footer-distributed">
    
                <div class="footer-left">
    
                    <h3>Boat House Booking<span> logo</span></h3>
    
                    <p class="footer-links">
                        <a href="/" class="link-1">Home</a>
                        <a href="/About">About</a>
                        
                        <a href="/contact">Contact</a>
                    </p>
                    <p class="footer-company-name">Aquamarina Boat House Booking © 2024</p>
                </div>
    
                <div class="footer-center">
                    <div>
                        <i class="fa fa-map-marker"></i>
                        <p><span>44,Thottrayan Kovil North</span> Kovaipudhur, Coimbatore</p>
                    </div>
    
                    <div>
                        <i class="fa fa-phone"></i>
                        <p>+1.555.555.5555</p>
                    </div>
    
                    <div>
                        <i class="fa fa-envelope"></i>
                        <p><a href="mailto:support@company.com">support@aquamarina.com</a></p>
                    </div>
    
                </div>
    
                <div class="footer-right">
    
                    <p class="footer-company-about">
                        <span>About the company</span>
                        AquaMarina Online Boat House Booking" offers a seamless platform for booking boat houses at 
                        your convenience. With user-friendly interfaces and secure payment gateways,
                         AquaMarina ensures a hassle-free booking experience.
                    </p>
    
                    <div class="footer-icons" style={{color:'white'}}>
    
                    <CDBContainer>
   
          
      <CDBIcon fab spin icon="facebook" />
   
      <CDBIcon fab spin icon="twitter" />
      <CDBIcon fab spin icon="instagram" />
      <CDBIcon fab spin icon="google" />
    </CDBContainer>
    
                    </div>
    
                </div>
    
            </footer>
            </>
  );
}

