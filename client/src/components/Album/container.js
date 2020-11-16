import React from 'react';
import Album from './index';
import './container.css';

function AlbumContainer({ feed, setActiveAlbum }) {
  return (
    <div className='album-container'>
      {feed.results.map((feedItem) => (
        <Album
          key={feedItem.id}
          {...feedItem}
          onClick={() => setActiveAlbum(feedItem)}
        />
      ))}
    </div>
  );
}

export default AlbumContainer;
