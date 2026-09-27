import React from 'react';
import '../../styles/colors.css';

/**
 * Barra superior de BovinNet.
 */
const Header = () => (
  <header
    style={{
      backgroundColor: 'var(--color-dark-green)',
      color: '#ffffff',
      padding: '0.5rem 1rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    }}
  >
    <div style={{ fontWeight: 700 }}>BovinNet</div>
    <div style={{ fontSize: '0.9rem' }}>Sistema de gestión ganadera</div>
  </header>
);

export default Header;
