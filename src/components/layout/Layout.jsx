import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import '../../styles/global.css';

/**
 * Layout principal: header + sidebar + contenido.
 */
const Layout = ({ children }) => (
  <div className="app-root">
    <Header />
    <div className="main-layout">
      <Sidebar />
      <main className="main-content">
        {children}
      </main>
    </div>
  </div>
);

export default Layout;
