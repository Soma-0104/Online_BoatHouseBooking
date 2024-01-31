
import React from 'react';
import logo from '../assets/images/logo.ico'
import '../assets/css/Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar1">
      <div className="logo">
        <a href="/"><img className="log"src={logo} alt="logo" width="130px" /></a>
      </div>
      <ul className="nav">
        <li className="nav-items1"><a href="/"><span className="link-text">Home</span><i className="f1-solid f1-house"></i></a></li>
        <li className="nav-items1"><a href="/About"><span className="link-text">About</span><i className="f1-solid f1-store"></i></a></li>
        <li className="nav-items1"><a href="/Contact"><span className="link-text">Contact</span><i className="f1-solid f1-user"></i></a></li>
      </ul>
      <Link className="bn" to='/Role'>Login/SignUp<i className="f1-solid f1-chevron-right ok"></i></Link>
    </nav>
  );
};

export default Navbar;
