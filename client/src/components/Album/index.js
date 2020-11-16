import React from 'react';
import './Album.css';

function Album({ artworkUrl100, onClick }) {
  return (
    <>
      <div className='album' onClick={onClick}>
        <img src={artworkUrl100} alt='Album Cover' />
      </div>
    </>
  );
}

export default Album;
