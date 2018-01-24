import React, { Component } from 'react';
import './styles.css';
import HCardFormElement from '../HCardFormElementComponent';

class HCardForm extends Component {
  render() {
    return (
      <div className="HCardForm">
        <h1 className="HCardForm__title">hCard Builder</h1>
        <fieldset className="HCardForm__fieldset">
          <legend className="HCardForm__legend">Personal Details</legend>
          <div className="HCardForm__fieldset__container">
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
          </div>
        </fieldset>

        <fieldset className="HCardForm__fieldset">
          <legend className="HCardForm__legend">ADDRESS</legend>
          <div className="HCardForm__fieldset__container">
            <HCardFormElement
              label="House Name Or #"
              name="address1"
              value={this.props.card.address1}
              handleChange={this.props.handleChange}
            />
            <HCardFormElement
              label="Street"
              name="street"
              value={this.props.card.street}
              handleChange={this.props.handleChange}
            />

            <HCardFormElement
              label="Suburb"
              name="suburb"
              value={this.props.card.suburb}
              handleChange={this.props.handleChange}
            />
            <HCardFormElement
              label="State"
              name="state"
              value={this.props.card.state}
              handleChange={this.props.handleChange}
            />
            <HCardFormElement
              label="Postcode"
              name="postcode"
              value={this.props.card.postcode}
              handleChange={this.props.handleChange}
            />
            <HCardFormElement
              label="Country"
              name="country"
              value={this.props.card.country}
              handleChange={this.props.handleChange}
            />
          </div>
        </fieldset>

        <div className="HCardForm__actions">
          <button className="HCardForm__btn">Upload Avatar</button>
          <button className="HCardForm__btn HCardForm__btn--primary">
            Create hCard
          </button>
        </div>
      </div>
    );
  }
}

export default HCardForm;
