import React from 'react';

/**
 * Select reutilizable con opciones.
 */
const SelectInput = ({ id, label, value, onChange, options, ...rest }) => (
  <div className="form-group">
    <label htmlFor={id} className="form-label">
      {label}
    </label>
    <select
      id={id}
      className="form-select"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      {...rest}
    >
      <option value="">Seleccione...</option>
      {options.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  </div>
);

export default SelectInput;
