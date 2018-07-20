const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('API is working!'));

let artistData = [
  {
    "id": 111,
    "name": "Tom Misch"
  },
  {
    "id": 222,
    "name": "Adele"
  },
  {
    "id": 333,
    "name": "Katy Perry"
  }
]

app.get('/artists/:artistID/', (req, res) => {

  let targetArtist = artistData.find( (artist) => {
    return artist.id == req.params.artistID;
  });

  if (typeof targetArtist === "undefined") {
    res.sendStatus(404);
  } else {
    res.send(targetArtist);
  }
});

app.get('/world', (req, res) => res.send('World!'));

app.listen(3000, () => console.log('Example app listening on port 3000!'));