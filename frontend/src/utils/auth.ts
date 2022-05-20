import jwtDecode from 'jwt-decode';
import { getAuthData } from './storage';


export type Role = 'ROLE_STUDENT' | 'ROLE_ADMIN';

export type TokenData = {
    exp: number,
    user_name: string,
    authorities: Role[];
}


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

// Função que informa se o usuário possui algum dos roles passados
export const hasAnyRoles = (roles: Role[]) : boolean => {
    if(roles.length === 0) {
        return true;
    }

    const tokenData = getTokenData();

    if(tokenData !== undefined) {
        return roles.some(role => tokenData.authorities.includes(role));
    }

    return false;
}

