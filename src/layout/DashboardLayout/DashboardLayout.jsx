import React from "react";
import Header from "../../Pages/Shared/Header/Header";
import { Link, Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div>
      <Header></Header>
      <div className="drawer lg:drawer-open mt-18">
        <input id="admin-dashboard" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content p-10">
          {/* Page content here */}
          <Outlet></Outlet>
         
        </div>
        <div className="drawer-side">
          <label
            htmlFor="admin-dashboard"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4 mt-16 md:mt-0">
            {/* Sidebar content here */}
            <li>
              <Link to='/dashboard/my-appointment'>My Appointments</Link>
            </li>
            <li>
              <Link to='/dashboard/all-users'>All Users</Link>
            </li>
            <li>
              <Link to='/dashboard/add-doctors'>Add Doctors</Link>
            </li>
           
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
