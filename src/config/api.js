import axios from 'axios';

const API = axios.create({
  baseURL: `https://images-api.nasa.gov/`,
});

const getSearchRequest = (q, description, mediaType) =>
  API.get(`search?q=${q}&description=${description}&media_type=${mediaType}`);

const getAssetRequest = id => API.get(`asset/${id}`);

const api = {
  getSearchRequest,
  getAssetRequest,
};

export default api;
