import React from 'react';
import renderer from 'react-test-renderer';
import Genre from './index';

describe('Genre', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Genre />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
