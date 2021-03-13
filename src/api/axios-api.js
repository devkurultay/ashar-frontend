import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://example.com'
});


export default instance;