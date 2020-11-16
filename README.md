# Aula Tunes - Technical Task

Submission of a technical task for Aula Tunes. The following is required to get started:

- Node 12.x
- NPM 6.x
- Docker (optional) 19.03x
- docker-compose 3.x

## Quick Start

Run the following commands to run this application. Everything runs in memory, and doesn't need anything for permanent storage.

### NPM / Node

```
npm i
npm run dev
```

### Docker

Both `docker` and `docker-compose` are optional, but allow you to run this application without having to install Node or NPM locally, and thus compiling code.

```
docker-compose up -d --build
```

## Features

The following features have been included:

- Ability to filter by RSS `top-albums`, `top-songs`, `hot-tracks`, `new-releases` and `coming-soon`
- Search functionality which filters based on the artistName or the name of the album
- Advanced filtering of genre when clicking on a single album (powered by search and filtering as well)
- Responsive design including blurring of background when selected album is in focus
- Hard caching in play, locally, rather than on the server

## Technical Decisions

The following decisions were made early on, to aid development:

- Use Create React App for speed of delivery
- Split client and server up as the RSS link provided is protected by CORS
- `server/` is just a proxy to the RSS feed using `express`
- `client/` contains the CRA which houses 99% of the application
- Tests are written in Jest. Snapshots used for basic component rendering and unit tests included for service and helpers
- Simplity is the aim, so CSS, HTML and JS are all that's included, along with CRA standards. No SCSS, styled-jsx, or state handling (i.e. redux) introduced.
- Component state leveraged (via hooks) to contain search, filter and genre selection
- Running `npm run build` within `client` will produce a production version of client

## Known Issues

- Search doesn't work for singles
- Tests(s) missing for server, although this is a lightweight proxy
- A production version of this isn't included (i.e. within public)
- No deployment strategy provided to production
- Proxy http://localhost:3100 is hard coded within the service (bad)

## Better Enhancements

Given more time was spent on this, I'd enhance the following:

- Users could choose more genres rather than having one
- More powerful search that just looking at name and albumName
- Better handling of cache, having the ability to bust the cache, or expire within a certain time period
- Actually test the components, using react testing library
- Use docker ~~to contain both client and server~~ to demonstrate a production deployment strategy

## Tests

Run the following commands to run the tests within `client`.

```
cd client
npm test
```

Results

```
 PASS  src/components/Album/Album.test.js
 PASS  src/helpers/searchFilter.test.js
 PASS  src/services/getFeed.test.js
 PASS  src/helpers/genreFilter.test.js
 PASS  src/components/Genre/index.test.js
 PASS  src/components/Modal/index.test.js
 PASS  src/components/Filter/index.test.js
 PASS  src/App.test.js
 PASS  src/components/Search/index.test.js
 PASS  src/components/Loading/index.test.js

Test Suites: 10 passed, 10 total
Tests:       19 passed, 19 total
Snapshots:   7 passed, 7 total
Time:        5.313 s, estimated 8 s
Ran all test suites.
```
