import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseURL = apiKeys.firebaseConfig.databaseURL;

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

export default {
  getQuotesByCharId,
};
