import React, { Component } from 'react';
import HCardPreview from '../HCardPreviewComponent';
import HCardForm from '../HCardFormComponent';
import './styles.css';

const initialState = {
  card: {
    name: ''
  }
};

class HCardComponent extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  render() {
    return (
      <div className="HCard">
        <HCardForm />
        <HCardPreview card={this.state.card} />
      </div>
    );
  }
}

export default HCardComponent;
