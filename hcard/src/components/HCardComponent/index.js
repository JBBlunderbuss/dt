import React, { Component } from 'react';
import HCardPreview from '../HCardPreviewComponent';
import HCardForm from '../HCardFormComponent';
import './styles.css';
import HCardFormElement from '../HCardFormElementComponent';

const initialState = {
  name: '',
  email: '',
  surname: '',
  phone: '',
  address1: '',
  street: '',
  suburb: '',
  state: '',
  postcode: '',
  country: ''
};

class HCardComponent extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <div className="HCard">
        <HCardForm handleChange={this.handleChange} card={this.state} />
        <HCardPreview card={this.state} />
      </div>
    );
  }
}

export default HCardComponent;
