import axios from 'axios';

async function getFeed(type) {
  const cache = window.localStorage.getItem(`feed:${type}`);

  if (cache) {
    return Promise.resolve(JSON.parse(cache));
  }

  // @todo this is bad, don't prefix, as you can't go live with this.
  // it should either be injected or proxyed, but docker based proxying
  // doesn't work, because it can't connect and I'm out of time :)
  const response = await axios.get(`http://localhost:3100/api/${type}`);

  localStorage.setItem(`feed:${type}`, JSON.stringify(response));

  return response;
}

export default getFeed;
