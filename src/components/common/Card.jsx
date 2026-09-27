import React from 'react';

/**
 * Tarjeta básica para agrupar contenido.
 */
const Card = ({ title, children, actions }) => (
  <div className="card">
    {title && (
      <div style={{ marginBottom: '0.5rem', fontWeight: 700 }}>
        {title}
      </div>
    )}
    {children}
    {actions && (
      <div style={{ marginTop: '0.75rem', textAlign: 'right' }}>
        {actions}
      </div>
    )}
  </div>
);

export default Card;
