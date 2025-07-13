import React from 'react';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';
import './Layout.css';

function Layout() {
  return (
    <div className="layout-wrapper">
      <Navbar />
      <main className="main-content">
        <Outlet />
      </main>
      <footer className="footer">
        © 2025 BookBound Inc. | Made with ❤️
      </footer>
    </div>
  );
}

export default Layout;
