import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';


import './styles.css';
import { Link } from 'react-router-dom';

function Signup() {

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

                        <form>
                            <div className="register-form-name">
                                <FontAwesomeIcon icon={faUser} className="name-register-icon" />
                                <input
                                    type="text"
                                    className=""
                                    placeholder="Nome"
                                />
                            </div>

                            <div className="register-form-surname">
                                <FontAwesomeIcon icon={faUser} className="surname-register-icon" />
                                <input
                                    type="text"
                                    className=""
                                    placeholder="Sobrenome"
                                />
                            </div>

                            <div className="register-form-email">
                                <FontAwesomeIcon icon={faEnvelope} className="email-register-icon" />
                                <input
                                    type="email"
                                    className=""
                                    placeholder="E-mail"
                                />
                            </div>


                            <div className="register-form-password">
                                <FontAwesomeIcon icon={faLock} className="password-register-icon" />
                                <input
                                    type="password"
                                    className=""
                                    placeholder="Senha"
                                />
                            </div>

                            <button type="submit" className="register-form-btn">Cadastrar</button>
                        </form>

                        <p className="register-link-login">Já tem uma conta?
                            <Link to="/login">Login</Link>
                        </p>
                    </div>
                </div>
            </div>

        </main>
    );
}

export default Signup;