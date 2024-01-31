import React from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
const Sidebar = () => {
  return (
    <div style={{ display: 'flex', height:'100vh', position:'fixed' }}>
      <CDBSidebar textColor="#fff" backgroundColor="black">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <a href="/" className="text-decoration-none" style={{ color: 'inherit' }}>BoatHouse Booking</a>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink exact to="/UserDashboard" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="columns">Dashboard</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/ViewBoat" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="table">View Boats</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/UserProfile" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="user">Profile page</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/MyBooking" acti veClassName="activeClicked">
              <CDBSidebarMenuItem icon="chart-line">My Bookings</CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter style={{ textAlign: 'center' }}>
          <div
            style={{
              padding: '20px 5px',
            }}
          >
            <Link to='/'>
            <button className="btn btn-outline-light">
              <i className="fa fa-sign-out-alt"></i> Logout
            </button>
            </Link>
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  );
};

export default Sidebar;
