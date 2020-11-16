import React, { useState, useEffect, useCallback } from 'react';
import './App.css';

import AlbumContainer from './components/Album/container';
import Filter from './components/Filter';
import Genre from './components/Genre';
import Loading from './components/Loading';
import Modal from './components/Modal';
import Search from './components/Search';

import getFeed from './services/getFeed';

import genreFilter from './helpers/genreFilter';
import searchFilter from './helpers/searchFilter';

const DEFAULT_FILTER = 'top-albums';

function App() {
  const [feed, setFeed] = useState(null);
  const [loading, setLoading] = useState(false);

  const [activeAlbum, setActiveAlbum] = useState(null);

  const [filter, setFilter] = useState(DEFAULT_FILTER);
  const [genre, setGenre] = useState(null);
  const [search, setSearch] = useState('');

  const getAndFilterResults = useCallback(() => {
    getFeed(filter)
      .then((response) => {
        const feed = response.data?.feed;

        feed.results = feed.results
          .filter(genreFilter(genre))
          .filter(searchFilter(search));

        setLoading(false);
        setFeed(feed);
      })
      .catch((e) => console.error(e));
  }, [filter, genre, search]);

  useEffect(() => getAndFilterResults(), [getAndFilterResults]);

  if (!feed || loading) {
    return <Loading />;
  }

  return (
    <section className={`container ${Boolean(activeAlbum) ? 'blur' : ''}`}>
      <h1>{feed.title}</h1>

      <Filter onChange={setFilter} value={filter} />
      <Search onChange={setSearch} value={search} />
      <Genre genre={genre} setGenre={setGenre} />
      <AlbumContainer feed={feed} setActiveAlbum={setActiveAlbum} />
      <Modal
        {...activeAlbum}
        enabled={Boolean(activeAlbum)}
        close={() => setActiveAlbum(null)}
        genreFilter={setGenre}
      />
    </section>
  );
}

export default App;
