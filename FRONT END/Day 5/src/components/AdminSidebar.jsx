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
const AdminSidebar = () => {
  return (
    <div style={{ display: 'flex', height: '100vh', position:'fixed'}}>
      <CDBSidebar textColor="#fff" backgroundColor="black">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <a href="/" className="text-decoration-none" style={{ color: 'inherit' }}>BoatHouse Booking</a>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink exact to="/AdminDashboard" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="columns">Dashboard</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/AddBoat" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="table">Add Boats</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/ViewEditBoat" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="table">View and Edit Boats</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/AboutEdit" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="table">Edit About</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/UserDetails" acti veClassName="activeClicked">
              <CDBSidebarMenuItem icon="chart-line">User Details</CDBSidebarMenuItem>
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

export default AdminSidebar;