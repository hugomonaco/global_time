import axios from "axios";

export const timeZonesAxiosClient = axios.create({
  baseURL: process.env.REACT_APP_TIME_ZONE_API,
  timeout: 10000,
  responseType: 'json',
  params: {
    key: process.env.REACT_APP_TIME_ZONE_API_KEY,
    format: 'json',
  },
});
