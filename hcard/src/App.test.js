import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {
  it('matches snapshot', () => {
    const tree = shallow(<App />).html();
    expect(tree).toMatchSnapshot();
  });
});
