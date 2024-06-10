import React from 'react';

const Textarea = ({ label, id, value, onChange, ...rest }) => (
  <div className="form-floating form-floating-outline mb-4">
    <textarea
      className="form-control"
      id={id}
      value={value}
      onChange={onChange}
      {...rest}
    />
    <label htmlFor={id}>{label}</label>
  </div>
);

export default Textarea;
