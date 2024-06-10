import React from 'react';

const Checkbox = ({ label, id, checked, onChange, disabled }) => (
  <div className="form-check">
    <input
      className="form-check-input"
      type="checkbox"
      id={id}
      checked={checked}
      onChange={onChange}
      disabled={disabled}
    />
    <label className="form-check-label" htmlFor={id}>
      {label}
    </label>
  </div>
);

export default Checkbox;
