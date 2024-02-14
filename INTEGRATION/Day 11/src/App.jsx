import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home';
import { BrowserRouter as Router,Route,Routes} from "react-router-dom";
import Role from './pages/Role';
import AdminLogin from './pages/AdminLogin';
import UserLogin from './pages/UserLogin';
import User from './pages/User';
import Registration from './pages/Registration';
import Sidebar from './components/Sidebar';
import UserDashboard from './pages/UserDashBoard';
import AdminDashboard from './pages/AdminDashboard';
import UserProfile from './pages/UserProfile';
import ViewBoat from './components/ViewBoat';
import Booking from './pages/Booking';
import AddBoat from './pages/AddBoat';
import ViewEditBoat from './pages/ViewEditBoat';
import UserDetails from './pages/UserDetails';
import About from './pages/About';
import Contact from './pages/Contact';
import MyBooking from './pages/MyBooking';
import AboutEdit from './pages/AboutEdit';

function App() {
  return (
    <Router>
     {/* <Home/> */}
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/AdminLogin" element={<AdminLogin/>}/>
      <Route path="/UserLogin" element={<UserLogin/>}/>
      <Route path="/About" element={<About/>}/>
      <Route path="/Contact" element={<Contact/>}/>
      <Route path="/Role" element={<Role/>}/>
      <Route path="/Sidebar" element={<Sidebar/>}/>
      <Route path="/Registration" element={<Registration/>}/>
      <Route path="/UserDashboard" element={<UserDashboard/>}/>
      <Route path="/AdminDashboard" element={<AdminDashboard/>}/>
      <Route path="/UserProfile" element={<UserProfile/>}/>
      <Route path="/ViewBoat" element={<ViewBoat/>}/>
      <Route path="/Booking" element={<Booking/>}/>
      <Route path="/AddBoat" element={<AddBoat/>}/>
      <Route path="/ViewEditBoat" element={<ViewEditBoat/>}/>
      <Route path="/UserDetails" element={<UserDetails/>}/>
      <Route path="/MyBooking" element={<MyBooking/>}/>
      <Route path="/AboutEdit" element={<AboutEdit/>}/>

    </Routes>
  </Router>


  )
}

export default App
