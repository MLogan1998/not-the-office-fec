import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseConfig.databaseURL;

const addMovie = (newMovie) => axios.post(`${baseUrl}/watchlist.json`, newMovie);

export default {
  addMovie,
};
