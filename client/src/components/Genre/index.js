import React from 'react';
import './Genre.css';

function GenreContainer({ genre, setGenre }) {
  return (
    <>
      {genre && (
        <div className='genre-container'>
          <div className='pill' onClick={() => setGenre(null)}>
            {genre.name}
          </div>
        </div>
      )}
    </>
  );
}

export default GenreContainer;
