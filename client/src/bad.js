import React, { useState, useEffect } from 'react';
import './App.css';

import Album from './components/Album';
import Modal from './components/Modal';
import Filter from './components/Filter';
import Search from './components/Search';

import getFeed from './services/getFeed';

const DEFAULT_FILTER = 'top-albums';

class App extends React.Component {
  //   const [feed, setFeed] = useState(null);
  //   const [activeAlbum, setActiveAlbum] = useState(null);
  //   const [selectedGenre, setGenre] = useState(null);
  //   const [filter, setFilter] = useState(DEFAULT_FILTER);
  //   const [search, setSearch] = useState('');
  //   const [loading, setLoading] = useState(false);

  state = {
    loading: true,
    feed: null,
    filter: null,
    activeAlbum: null,
    search: null,
    selectedGenre: DEFAULT_FILTER,
  };

  componentDidMount() {
    getFeed(this.state.selectedGenre)
      .then((response) => {
        const feed = response.data?.feed;

        // Genre
        feed.results = feed.results.filter((item) => {
          if (!this.state.selectedGenre) {
            return true;
          }

          return (
            item.genres?.filter(
              (genre) => genre.genreId === this.state.selectedGenre,
            ).length > 0
          );
        });

        // Search
        feed.results = feed.results.filter((item) => {
          if (!this.state.search) {
            return true;
          }

          return (
            item.genres?.filter(
              (genre) => genre.genreId === this.state.selectedGenre,
            ).length > 0
          );
        });

        this.setState({
          feed,
          loading: false,
        });
      })
      .catch((e) => console.error(e));
  }

  render() {
    if (!this.state.feed || this.state.loading) {
      return (
        <section className={`container blur`} key={this.state.selectedGenre}>
          <h1>Loading...</h1>
        </section>
      );
    }

    console.log(this.state.feed);

    return (
      <section
        className={`container ${Boolean(this.state.activeAlbum) ? 'blur' : ''}`}
        key={this.state.filter}>
        <h1>{this.state.feed.title}</h1>

        {/* <Filter onChange={setFilter} value={filter} />
        <Search onChange={setSearch} value={search} /> */}

        <div className='album-container'>
          {this.state.feed.results.map((feedItem) => (
            <Album
              key={feedItem.id}
              {...feedItem}
              onClick={() => {
                // setActiveAlbum(feedItem);
                // console.log(activeAlbum);
              }}
            />
          ))}
        </div>
        <Modal
          {...this.state.activeAlbum}
          enabled={Boolean(this.state.activeAlbum)}
          close={() => {}}
          genreFilter={() => {}}
        />
      </section>
    );
  }
}

// function App() {
//   const [feed, setFeed] = useState(null);
//   const [activeAlbum, setActiveAlbum] = useState(null);
//   const [selectedGenre, setGenre] = useState(null);
//   const [filter, setFilter] = useState(DEFAULT_FILTER);
//   const [search, setSearch] = useState('');
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     setLoading(true);
//   }, [selectedGenre, filter, search]);

//   console.log(feed);

//   if (!feed || loading) {
//     return (
//       <section className={`container blur`} key={filter}>
//         <h1>Loading...</h1>
//       </section>
//     );
//   }
// }

export default App;
