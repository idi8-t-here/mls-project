import React from 'react';

const Range = ({ label, id, value, onChange, min, max, step, disabled }) => (
  <div className="mb-3">
    <label htmlFor={id} className="form-label">
      {label}
    </label>
    <input
      type="range"
      className="form-range"
      id={id}
      value={value}
      onChange={onChange}
      min={min}
      max={max}
      step={step}
      disabled={disabled}
    />
  </div>
);

export default Range;
