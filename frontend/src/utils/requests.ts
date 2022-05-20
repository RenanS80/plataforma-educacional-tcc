import axios, { AxiosRequestConfig } from 'axios';
import qs from 'qs';
import history from './history';
import jwtDecode from 'jwt-decode';

type LoginData = {
    username: string;
    password: string;
}

type LoginResponse = {
    access_token: string,
    token_type: string,
    expires_in: number,
    scope: string,
    userFirstName: string,
    userId: number,
    jti: string
}

type Role = 'ROLE_STUDENT' | 'ROLE_ADMIN';

export type TokenData = {
    exp: number,
    user_name: string,
    authorities: Role[];
}

// URL do backend
export const BASE_URL = process.env.REACT_APP_BACKEND_URL ?? 'http://localhost:8080';

// Dados da aplicação
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
        Authorization: "BEARER " + getAuthData().access_token
    }
        : config.headers;

    return axios({ ...config, baseURL: BASE_URL, headers });
}

// Função para salvar os dados da resposta da autenticação no LocalStorage
export const saveAuthData = (loginResponse: LoginResponse) => {
    localStorage.setItem('authData', JSON.stringify(loginResponse));
}

// Função para pegar os dados do token do LocalStorage
export const getAuthData = () => {
    const srt = localStorage.getItem('authData') ?? "{}";
    return JSON.parse(srt) as LoginResponse;
}

export const removeAuthData = () => {
    localStorage.removeItem('authData');
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
    if(error.response.status === 401 || error.response.status === 403) {
        history.push('/student/auth')
    }
    return Promise.reject(error);
});

// Função para decodificar o token
export const getTokenData = () : TokenData | undefined => {   
    try {
        return jwtDecode(getAuthData().access_token) as TokenData;
    }
    catch(error) {
        return undefined;
    }
}

// Função para verificar se o usuário está autenticado
export const isAuthenticated = () : boolean => {
    const tokenData = getTokenData();
    return (tokenData && tokenData.exp * 1000 > Date.now()) ? true : false;
}