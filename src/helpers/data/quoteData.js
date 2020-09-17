import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseURL = apiKeys.firebaseConfig.databaseURL;
const tmdbKey = apiKeys.tmdbConfig.apiKey;

const getQuotesByCharId = (charId) => new Promise((resolve, reject) => {
  axios.get(`${baseURL}/quotes.json?orderBy="charId"&equalTo="${charId}"`)
    .then((response) => {
      const quoteObj = response.data;
      const quotes = [];
      if (quoteObj) {
        Object.keys(quoteObj).forEach((quoteId) => {
          quoteObj[quoteId].id = quoteId;
          quotes.push(quoteObj[quoteId]);
        });
      }
      resolve(quotes);
    })
    .catch((err) => reject(err));
});

const getOfficeCharByCharId = (charId) => new Promise((resolve, reject) => {
  axios.get(`https://api.themoviedb.org/3/person/${charId}/tv_credits?api_key=${tmdbKey}&language=en-US`)
    .then((response) => {
      const character = [];
      const credits = response.data.cast;
      credits.forEach((credit) => {
        if (credit.name === 'The Office' && credit.character) {
          character.push(credit);
        }
      });
      resolve(character);
    })
    .catch((err) => reject(err));
});

export default {
  getQuotesByCharId,
  getOfficeCharByCharId,
};
