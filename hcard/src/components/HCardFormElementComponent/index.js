import React from 'react';
import './styles.css';

export default ({ label, value, name, handleChange }) => {
  return (
    <div className="HCardFormElement">
      <label className="HCardFormElement__label">
        <span className="HCardFormElement__label__text">{label}</span>
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
