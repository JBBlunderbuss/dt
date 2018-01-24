import React from 'react';
import './styles.css';

export default ({ label, value, name, handleChange }) => {
  return (
    <div className="HCardFormElement">
      <label>
        {label}
        <input
          type="text"
          name={name}
          className="HCardFormElement__input"
          onChange={handleChange}
          value={value}
        />
      </label>
    </div>
  );
};
