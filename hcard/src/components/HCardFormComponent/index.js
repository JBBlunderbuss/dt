import React, { Component } from 'react';
import './styles.css';
import HCardFormElement from '../HCardFormElementComponent';

class HCardForm extends Component {
  render() {
    return (
      <div className="HCardForm">
        <h1>hCard Builder</h1>
        <fieldset className="HCardForm__fieldset">
          <legend className="HCardForm__legend">Personal Details</legend>

          <HCardFormElement
            label="Given Name"
            name="name"
            value={this.props.card.name}
            handleChange={this.props.handleChange}
          />
          <HCardFormElement
            label="Surname"
            name="surname"
            value={this.props.card.surname}
            handleChange={this.props.handleChange}
          />

          <HCardFormElement
            label="Email"
            name="email"
            value={this.props.card.email}
            handleChange={this.props.handleChange}
          />
          <HCardFormElement
            label="Phone"
            name="phone"
            value={this.props.card.phone}
            handleChange={this.props.handleChange}
          />
        </fieldset>
        {/* <HCardFormElement label="ADDRESS" value={address} /> */}
        {/* <HCardFormElement label="" value={address2} /> */}
        {/* <HCardFormElement
            label="postcode"
            value={this.state.postcode}
            size="half"
            handleChange={this.handleChange}
          /> */}
        {/* <HCardFormElement
            label="country"
            value={this.state.country}
            size="half"
            handleChange={this.handleChange}
          /> */}
      </div>
    );
  }
}

export default HCardForm;
