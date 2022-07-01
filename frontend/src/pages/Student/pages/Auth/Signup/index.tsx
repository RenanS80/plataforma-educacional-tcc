import { Link, useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { AxiosRequestConfig } from 'axios';
import { toast } from 'react-toastify';

import { UserInsert } from 'types/UserInsert';
import { BASE_URL, requestBackend } from 'utils/requests';
import { defaultRole } from 'utils/auth';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';

import './styles.css';

function Signup() {

    const history = useHistory();

    const { register, handleSubmit, formState: { errors } } = useForm<UserInsert>();

    const onSubmit = (formData: UserInsert) => {
        const data = {
            ...formData,
            roles: defaultRole
        }
        const config: AxiosRequestConfig = {
            method: 'POST', 
            url: '/users', 
            baseURL: BASE_URL,
            data: data
        };

        requestBackend(config)
            .then((response) => {
                toast.success('Cadastro realizado com sucesso');
                history.push('/student/auth/login');
            })
            .catch(() => {
                toast.error('Erro ao realizar cadastro');
            });
    };


    return (
        <main className="main-register">
            <div className="register-purple-area"></div>
            <div className="register-white-area">

                <div className="register-form-container">
                    <div className="register-form-box">
                        <div className="register-form-title">
                            <p>Seja bem-vindo</p>
                            <h3>Cadastre-se no Learn</h3>
                        </div>

                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="register-form-name">
                                <FontAwesomeIcon icon={faUser} className="name-register-icon" />
                                <input
                                    {...register('firstName', {
                                        required: 'Campo obrigatório',
                                        pattern: {
                                            value: /^[a-zA-Z\s]*$/,
                                            message: "Informe apenas letras"
                                        }
                                    })}
                                    type="text"
                                    className={`form-control ${errors.firstName ? 'is-invalid' : ''}`}
                                    placeholder="Nome"
                                    name="firstName"
                                />
                                <div className="invalid-feedback d-block">{errors.firstName?.message}</div>
                            </div>

                            <div className="register-form-surname">
                                <FontAwesomeIcon icon={faUser} className="surname-register-icon" />
                                <input
                                    {...register('lastName', {
                                        required: 'Campo obrigatório',
                                        pattern: {
                                            value: /^[a-zA-Z\s]*$/,
                                            message: "Informe apenas letras"
                                        }
                                    })}
                                    type="text"
                                    className={`form-control ${errors.lastName ? 'is-invalid' : ''}`}
                                    placeholder="Sobrenome"
                                    name="lastName"
                                />
                                <div className="invalid-feedback d-block">{errors.lastName?.message}</div>
                            </div>

                            <div className="register-form-email">
                                <FontAwesomeIcon icon={faEnvelope} className="email-register-icon" />
                                <input
                                    type="email"
                                    {...register("email", {
                                        required: "Campo obrigatório",
                                        pattern: {
                                            value: /^[A-Z0-9 ._%+-]+@[A-Z0-9 .-]+\.[A-Z]{2,}$/i,
                                            message: "Formato de e-mail inválido"
                                        }
                                    })}
                                    name="email"
                                    className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                                    placeholder="E-mail"
                                />
                                <div className="invalid-feedback d-block">{errors.email?.message}</div>
                            </div>

                            <div className="register-form-password">
                                <FontAwesomeIcon icon={faLock} className="password-register-icon" />
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

                            <button type="submit" className="register-form-btn">Cadastrar</button>
                        </form>

                        <p className="register-link-login">Já tem uma conta?
                            <Link to="/student/auth/login">Login</Link>
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Signup;