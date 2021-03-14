import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://ashar-backend.ga/api/v1/'
});


export default instance;