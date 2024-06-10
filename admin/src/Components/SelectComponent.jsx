import React from 'react';

const Select = ({ label, id, options, value, onChange, multiple, ...rest }) => (
  <div className="form-floating form-floating-outline mb-4">
    <select
      className="form-select"
      id={id}
      value={value}
      onChange={onChange}
      multiple={multiple}
      {...rest}
    >
      {options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
    <label htmlFor={id}>{label}</label>
  </div>
);

export default Select;
