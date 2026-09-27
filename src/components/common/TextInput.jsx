import React from 'react';

/**
 * Campo de texto reutilizable.
 */
const TextInput = ({ id, label, value, onChange, type = 'text', ...rest }) => (
  <div className="form-group">
    <label htmlFor={id} className="form-label">
      {label}
    </label>
    <input
      id={id}
      type={type}
      className="form-input"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      {...rest}
    />
  </div>
);

export default TextInput;
