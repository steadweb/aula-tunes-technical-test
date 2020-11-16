import React from 'react';
import './Modal.css';

function Modal({
  artistName,
  name,
  releaseDate,
  artworkUrl100,
  genres,
  copyright,
  enabled,
  close,
  genreFilter,
}) {
  const style = { display: enabled ? 'flex' : 'none' };

  return (
    <>
      <div className='modal' style={style}>
        <div className='modal__image'>
          <img src={artworkUrl100} alt='Album Cover' />
        </div>
        <div className='modal__content'>
          <h2>{artistName}</h2>
          <h3>
            {name} ({releaseDate})
          </h3>
          <p>
            {genres &&
              genres.map((genre) => (
                <span
                  key={genre.genreId}
                  className='genre'
                  onClick={() => genreFilter(genre)}>
                  {genre.name}
                </span>
              ))}
          </p>
          <p className='copyright'>{copyright}</p>
        </div>
      </div>
      <div className='modal__overlay' style={style} onClick={close}></div>
    </>
  );
}

export default Modal;
