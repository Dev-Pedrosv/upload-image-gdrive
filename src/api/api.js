const axios = require('axios');

const api = axios.create({
  baseURL: 'http://service-upload.vercel.app/'
});

module.exports = {
  api
}