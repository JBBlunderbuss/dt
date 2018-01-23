import React, { Component } from 'react';
import './styles.css';

class HCardPreview extends Component {
  render() {
    const { name } = this.props.card;

    return (
      <div className="HCardPreview">
        <div className="HCardPreview__card">
          <h2 className="HCardPreview__title">HCARD PREVIEW</h2>
          <h3 className="HCardPreview__name">{name}</h3>
          <div className="HCardPreview__details">{/* <PreviewInput /> */}</div>
        </div>
      </div>
    );
  }
}

export default HCardPreview;
