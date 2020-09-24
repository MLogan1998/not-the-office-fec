/* eslint-disable no-param-reassign */
import axios from 'axios';
import apiKeys from '../apiKeys.json';

const tmdbKey = apiKeys.tmdbConfig.apiKey;

const getCharMovies = (charId) => new Promise((resolve, reject) => {
  axios.get(`https://api.themoviedb.org/3/person/${charId}/movie_credits?api_key=${tmdbKey}&language=en-US`)
    .then((response) => {
      const movieResopnses = response.data.cast;
      const movies = [];
      movieResopnses.forEach((movieResponse) => {
        if (movieResponse.poster_path && movieResponse.character && movieResponse.vote_average && movieResponse.title !== 'The Office Retrospective') {
          movieResponse.quoteId = charId;
          movies.push(movieResponse);
        }
      });
      resolve(movies);
    })
    .catch((err) => reject(err));
});

export default {
  getCharMovies,
};
