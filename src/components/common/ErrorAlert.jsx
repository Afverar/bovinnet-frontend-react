import React from 'react';
import '../../styles/colors.css';

/**
 * Mensaje de error visual usando el color de alerta oficial.
 */
const ErrorAlert = ({ message }) => {
  if (!message) return null;

  return (
    <div
      style={{
        backgroundColor: 'var(--color-error)',
        color: '#ffffff',
        padding: '0.5rem 0.75rem',
        borderRadius: '4px',
        marginBottom: '0.75rem',
      }}
    >
      {message}
    </div>
  );
};

export default ErrorAlert;
