import React from 'react';
import renderer from 'react-test-renderer';
import Modal from './index';

describe('Modal', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Modal />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
