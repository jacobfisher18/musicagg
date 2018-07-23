const endpoints = {
  "Spotify": 'https://api.spotify.com/v1/artists/'
}

const spotifyGetArtist = (spotifyID) => {
  console.log("Getting artist from Spotify...");
  return new Promise((res, rej) => {
    fetch(endpoints.Spotify + spotifyID)
      .then( (response) => {
        return response.json();
      })
      .then( (myJson) => {
        console.log(myJson);
      }).catch((err) => {
        console.log(err);
      });
  })
}

spotifyGetArtist(12312);

module.exports = {
  spotifyGetArtist
}