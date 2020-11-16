import axios from 'axios';

async function getFeed(type) {
  const cache = window.localStorage.getItem(`feed:${type}`);

  if (cache) {
    return Promise.resolve(JSON.parse(cache));
  }

  const response = await axios.get(`/api/${type}`);

  localStorage.setItem(`feed:${type}`, JSON.stringify(response));

  return response;
}

export default getFeed;
