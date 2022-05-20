type LoginResponse = {
    access_token: string,
    token_type: string,
    expires_in: number,
    scope: string,
    userFirstName: string,
    userId: number,
    jti: string
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