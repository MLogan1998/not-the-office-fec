import axios from 'axios';
import apiKeys from '../apiKeys.json';

const tmdbKey = apiKeys.tmdbConfig.apiKey;

const getPopularTV = () => new Promise((resolve, reject) => {
  axios.get(`https://api.themoviedb.org/3/tv/popular?api_key=${tmdbKey}&language=en-US&page=1`)
    .then((response) => {
      const popularTV = response.data.results;
      const shows = [];
      popularTV.forEach((show) => {
        shows.push(show);
      });
      resolve(shows);
    })
    .catch((err) => reject(err));
});

const getSimilarTV = () => new Promise((resolve, reject) => {
  axios.get(`https://api.themoviedb.org/3/tv/2316/similar?api_key=${tmdbKey}&language=en-US&page=1`)
    .then((response) => {
      const similarTV = response.data.results;
      const shows = [];
      similarTV.forEach((show) => {
        if (show.name !== 'The Office') {
          shows.push(show);
        }
        resolve(shows);
      });
    })
    .catch((err) => reject(err));
});

export default {
  getPopularTV,
  getSimilarTV,
};
