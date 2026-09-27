import React from 'react';
import './Button.css';

/**
 * Botón reutilizable con estilos BovinNet.
 */
const Button = ({ children, variant = 'primary', ...rest }) => {
  return (
    <button className={`btn btn-${variant}`} {...rest}>
      {children}
    </button>
  );
};

export default Button;
