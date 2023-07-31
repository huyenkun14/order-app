/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import axios, { AxiosRequestConfig, Method } from 'axios';
import { API_CONFIG } from './constants';

export const axiosInstance = axios.create({
    baseURL: API_CONFIG.BASE_URL,
    timeout: 6000,
});
