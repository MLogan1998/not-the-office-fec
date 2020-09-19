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

const getWatchlistByMovieId = (movieId) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/watchlist.json?orderBy="movieId"&equalTo=${movieId}`)
    .then((response) => {
      const movie = response.data;
      const watchlist = [];
      if (movie) {
        Object.keys(movie).forEach((watchId) => {
          movie[watchId].id = watchId;
          watchlist.push(movie[watchId]);
        });
      }
      resolve(watchlist);
    })
    .catch((err) => reject(err));
});

const addMovie = (newMovie) => axios.post(`${baseUrl}/watchlist.json`, newMovie);

const updateMovie = (movieId, editedMovie) => axios.put(`${baseUrl}/watchlist/${movieId}.json`, editedMovie);

const deleteMovie = (movieId) => axios.delete(`${baseUrl}/watchlist/${movieId}.json`);

const getMovieById = (movieId) => axios.get(`${baseUrl}/watchlist/${movieId}.json`);

export default {
  addMovie,
  getWatchlistByUid,
  updateMovie,
  deleteMovie,
  getMovieById,
  getWatchlistByMovieId,
};
