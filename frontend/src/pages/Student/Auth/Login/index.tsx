import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import { ReactComponent as LoginImage } from 'assets/img/login-vector.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';

import './styles.css';

type FormData = {
    username: string;
    password: string;
}

function Login() {

    const { register, handleSubmit } = useForm<FormData>();

    const onSubmit = (formData : FormData) => {
        console.log(formData);
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
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="login-form-email">
                            <FontAwesomeIcon icon={faEnvelope} className="email-login-icon" />
                            <input
                                type="email"
                                {...register("username")}
                                name="username"
                                placeholder="E-mail"
                            />
                        </div>

                        <div className="login-form-password">
                            <FontAwesomeIcon icon={faLock} className="password-login-icon" />
                            <input
                                type="password"
                                {...register("password")}
                                name="password"
                                placeholder="Senha"
                            />
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