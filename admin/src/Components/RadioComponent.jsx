import React from 'react';

const Radio = ({ label, id, name, checked, onChange, disabled }) => (
  <div className="form-check">
    <input
      className="form-check-input"
      type="radio"
      id={id}
      name={name}
      checked={checked}
      onChange={onChange}
      disabled={disabled}
    />
    <label className="form-check-label" htmlFor={id}>
      {label}
    </label>
  </div>
);

export default Radio;
