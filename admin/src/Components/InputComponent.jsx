import React from 'react';

const Input = ({ label, type, id, placeholder, value, onChange, ...rest }) => (
  <div className="form-floating form-floating-outline mb-4">
    <input
      type={type}
      className="form-control"
      id={id}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      {...rest}
    />
    <label htmlFor={id}>{label}</label>
  </div>
);

export default Input;
