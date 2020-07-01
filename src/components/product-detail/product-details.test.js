import React from 'react';
import { shallow } from 'enzyme';
import ProductDetail from './product-detail';
import App from '../../App';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('First React component test with Enzyme', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<ProductDetail />);
    expect(wrapper.exists()).toBeTruthy();
  });
});

// describe('App', () => {
//   it('should render', () => {
//     const wrapper = shallow(<App />);
//     expect(wrapper.exists()).toBeTruthy();
//   });
// });
