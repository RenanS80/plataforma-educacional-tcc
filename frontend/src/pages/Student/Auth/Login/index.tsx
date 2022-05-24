import { useContext, useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { AuthContext } from 'AuthContext';
import { requestBackEndLogin } from 'utils/requests';
import { saveAuthData } from 'utils/storage';
import { getTokenData, isAuthenticated } from 'utils/auth';

import { ReactComponent as LoginImage } from 'assets/img/login-vector.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';

import './styles.css';


type CredentialsDTO = {
    username: string;
    password: string;
}

type LocationState = {
    from: string;
}

function Login() {

    const location = useLocation<LocationState>();

    const { from } = location.state || { from: { pathname: '/student' } }

    const { setAuthContextData } = useContext(AuthContext);

    const [hasError, setHasError] = useState(false);

    const history = useHistory();

    const { register, handleSubmit, formState: {errors} } = useForm<CredentialsDTO>();

    const onSubmit = (formData: CredentialsDTO) => {
        requestBackEndLogin(formData)
            .then(response => {
                saveAuthData(response.data);
                setHasError(false);
                setAuthContextData({
                    authenticated: isAuthenticated(),
                    tokenData: getTokenData()
                })
                history.replace(from);
            })
            .catch(error => {
                setHasError(true);
                console.log('ERRO', error);
            })
    }

    return (
        <main className="main-login">
            <div className="login-image-container">
                <div className="login-image-box">
                    <LoginImage className="login-image" />
                </div>
            </div>

            <div className="login-form-container">
                <div className="login-form-box">
                    <div className="login-form-title">
                        <p>Bem-vindo de volta</p>
                        <h3>Faça login na sua conta</h3>

                        {hasError && (
                            <div className="alert alert-danger mt-3" role="alert">
                                Usuário ou senha inválidos
                            </div>
                        )}
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="login-form-email">
                            <FontAwesomeIcon icon={faEnvelope} className="email-login-icon" />
                            <input
                                type="email"
                                {...register("username", {
                                    required: "Campo obrigatório",
                                    pattern: {
                                        value: /^[A-Z0-9 ._%+-]+@[A-Z0-9 .-]+\.[A-Z]{2,}$/i,
                                        message: "Formato de e-mail inválido"
                                    }
                                })}
                                name="username"
                                className={`form-control ${errors.username ? 'is-invalid' : ''}`}
                                placeholder="E-mail"
                            />
                            <div className="invalid-feedback d-block">{errors.username?.message}</div>
                        </div>

                        <div className="login-form-password">
                            <FontAwesomeIcon icon={faLock} className="password-login-icon" />
                            <input
                                type="password"
                                {...register("password", {
                                    required: "Campo obrigatório"
                                })}
                                name="password"
                                className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                                placeholder="Senha"
                            />
                            <div className="invalid-feedback d-block">{errors.password?.message}</div>
                        </div>

                        <p className="recover-password">Esqueci minha senha</p>
                        <button type="submit" className="login-form-btn">Entrar</button>
                    </form>

                    <p className="login-link-register">Não tem uma conta?
                        <Link to="/student/auth/signup">Cadastre-se</Link>
                    </p>
                </div>
            </div>
        </main>
    );
}

export default Login;