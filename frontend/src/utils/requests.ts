import axios, { AxiosRequestConfig } from 'axios';
import qs from 'qs'

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

// URL do backend
export const BASE_URL = process.env.REACT_APP_BACKEND_URL ?? 'http://localhost:8080';

// Dados da aplicação
const CLIENT_ID = process.env.REACT_APP_CLIENT_ID ?? 'learn';
const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET ?? 'learn123';

// Função para fazer a requisição de login
export const requestBackEndLogin = (loginData : LoginData) => {

    // Cabeçalho da requisição
    const headers = {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: 'Basic ' +window.btoa(CLIENT_ID+ ':' +CLIENT_SECRET)
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

export const requestBackend = (config : AxiosRequestConfig) => {
    const headers = config.withCredentials ? {
        ...config.headers,
        Authorization: "BEARER " +getAuthData().access_token
    } 
    : config.headers;
    
    return axios({...config, baseURL: BASE_URL, headers});
}

// Função para salvar os dados da resposta da autenticação no LocalStorage
export const saveAuthData = (loginResponse : LoginResponse) => {
    localStorage.setItem('authData', JSON.stringify(loginResponse));
}

// Função para pegar os dados do token do LocalStorage
export const getAuthData = () => {
    const srt = localStorage.getItem('authData') ?? "{}";
    return JSON.parse(srt) as LoginResponse;
}