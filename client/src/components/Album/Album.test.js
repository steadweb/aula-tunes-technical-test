import React from 'react';
import renderer from 'react-test-renderer';
import Album from './index';

describe('Album', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<Album artworkUrl100='/path/to/image' onClick={() => {}} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
