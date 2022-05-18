import axios from 'axios';
import qs from 'qs'

// URL do backend
export const BASE_URL = process.env.REACT_APP_BACKEND_URL ?? 'http://localhost:8080';

// Dados da aplicação
const CLIENT_ID = process.env.REACT_APP_CLIENT_ID ?? 'learn';
const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET ?? 'learn123';

type LoginData = {
    username: string;
    password: string;
}

// Função para fazer a requisição
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