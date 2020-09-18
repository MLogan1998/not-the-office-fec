import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseConfig.databaseURL;

const getWatchlistByUid = (uid) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/watchlist.json?orderBy="uid"&equalTo="${uid}"`)
    .then((response) => {
      const watchlistObj = response.data;
      const watchlist = [];
      if (watchlistObj) {
        Object.keys(watchlistObj).forEach((watchId) => {
          watchlistObj[watchId].id = watchId;
          watchlist.push(watchlistObj[watchId]);
        });
      }
      resolve(watchlist);
    })
    .catch((err) => reject(err));
});

const addMovie = (newMovie) => axios.post(`${baseUrl}/watchlist.json`, newMovie);

const updateMovie = (movieId, editedMovie) => axios.put(`${baseUrl}/watchlist/${movieId}.json`, editedMovie);

export default {
  addMovie,
  getWatchlistByUid,
  updateMovie,
};
