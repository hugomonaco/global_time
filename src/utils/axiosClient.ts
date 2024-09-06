import axios from "axios";

export const axiosClient = axios.create({
    baseURL: '',
    timeout: 10000,
    responseType: 'json'
});
