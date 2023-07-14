import axios from 'axios';

export const BASE_URL = 'http://localhost:8080';

// Making requests to the backend
export const makeRequest = axios.create({
  baseURL: BASE_URL
});
