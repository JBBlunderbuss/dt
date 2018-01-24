import React, { Component } from 'react';
import PreviewInput from '../PreviewInputComponent';
import './styles.css';

class HCardPreview extends Component {
  render() {
    const {
      name,
      email,
      surname,
      phone,
      address1,
      street,
      suburb,
      state,
      postcode,
      country
    } = this.props.card;

    const address = `${address1} ${street}`;
    const address2 = `${suburb} ${state}`;

    return (
      <div className="HCardPreview">
        <div className="HCardPreview__card">
          <h2 className="HCardPreview__title">HCARD PREVIEW</h2>

          <div className="HCardPreview__header">
            <h3 className="HCardPreview__name">{`${name} ${surname}`}</h3>
            <img src="/profile.png" className="HCardPreview__profile" />
          </div>
          <div className="HCardPreview__details">
            <PreviewInput label="EMAIL" value={email} />
            <PreviewInput label="PHONE" value={phone} />
            <PreviewInput label="ADDRESS" value={address} />
            <PreviewInput label="" value={address2} />
            <PreviewInput label="POSTCODE" value={postcode} size="half" />
            <PreviewInput label="COUNTRY" value={country} size="half" />
          </div>
        </div>
      </div>
    );
  }
}

export default HCardPreview;
