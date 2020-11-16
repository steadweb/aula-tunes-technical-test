const fetch = require('node-fetch');
const express = require('express');
const cors = require('cors');
const app = express();
const port = 3100;

app.use(cors());

app.get('/api/:type', async (req, res) => {
  const results = await fetch(
    `https://rss.itunes.apple.com/api/v1/us/apple-music/${req.params.type}/all/100/non-explicit.json`,
  );

  res.send(await results.json());
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
