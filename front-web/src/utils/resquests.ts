import axios from 'axios';
import { FilterData } from '../types';

export const BASE_URL = 'http://localhost:8080';

// Making requests to the backend
export const makeRequest = axios.create({
  baseURL: BASE_URL
});

export const buildFilterParams = (filterData?: FilterData) => {
  return {
    storeId: filterData?.store?.id
  };
};
