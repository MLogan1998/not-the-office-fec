import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseURL = apiKeys.firebaseConfig.databaseURL;

const getQuotesByCharId = (charId) => axios.get(`${baseURL}/quotes.json?orderBy="charId"&equalTo="${charId}"`);

export default {
  getQuotesByCharId,
};
