import axios, { AxiosRequestConfig } from 'axios';
import qs from 'qs';
import history from './history';
import { getAuthData } from './storage';


type LoginData = {
    username: string;
    password: string;
}

/* export const BASE_URL = process.env.REACT_APP_BACKEND_URL ?? 'http://localhost:8080'; */
export const BASE_URL = 'http://localhost:8080';

const CLIENT_ID = process.env.REACT_APP_CLIENT_ID ?? 'learn';
const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET ?? 'learn123';

// Função para fazer a requisição de login
export const requestBackEndLogin = (loginData: LoginData) => {

    // Cabeçalho da requisição
    const headers = {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: 'Basic ' + window.btoa(CLIENT_ID + ':' + CLIENT_SECRET)
    }

    // Corpo da requisição
    const data = qs.stringify({
        ...loginData,
        grant_type: 'password'
    })

    // Realiza a requisição
    return axios({
        method: 'POST',
        baseURL: BASE_URL,
        url: '/oauth/token',
        data: data,
        headers: headers
    })
}

export const requestBackend = (config: AxiosRequestConfig) => {
    const headers = config.withCredentials ? {
        ...config.headers,
        Authorization: "Bearer " + getAuthData().access_token
    }
        : config.headers;

    return axios({ ...config, baseURL: BASE_URL, headers });
}

// Add a request interceptor
axios.interceptors.request.use(function (config) {
    return config;
}, function (error) {
    return Promise.reject(error);
});

// Add a response interceptor
axios.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    if (error.response.status === 401) {
        history.push('/student/auth')
    }
    return Promise.reject(error);
});


