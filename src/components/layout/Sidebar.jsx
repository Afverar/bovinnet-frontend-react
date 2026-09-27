import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/colors.css';

/**
 * Menú lateral para navegar entre módulos.
 */
const Sidebar = () => (
  <aside
    style={{
      width: '220px',
      backgroundColor: 'var(--color-earth-light)',
      borderRight: '1px solid var(--color-earth-medium)',
      padding: '1rem',
    }}
  >
    <nav>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
        <li><Link to="/dashboard">Panel principal</Link></li>
        <li><Link to="/animals">Animales</Link></li>
        <li><Link to="/births">Nacimientos</Link></li>
        <li><Link to="/vaccinations">Vacunaciones</Link></li>
        <li><Link to="/disposals">Bajas</Link></li>
      </ul>
    </nav>
  </aside>
);

export default Sidebar;
