import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';

export default function Layout() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-3 p-0">
          <Navbar />
        </div>
        <div className="col-md-9 p-0">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
