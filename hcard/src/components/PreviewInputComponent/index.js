import React from 'react';
import './styles.css';

export default ({ label, value, size }) => {
  const classes = 'PreviewInput' + (size ? ' PreviewInput--' + size : '');

  return (
    <div className={classes}>
      <span className="PreviewInput__label">{label}</span>
      <span className="PreviewInput__value">{value}</span>
    </div>
  );
};
