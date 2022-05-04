import Logo from 'assets/img/logo.png';

import 'bootstrap/js/src/collapse.js';
import RegisterButton from 'components/RegisterButton';
import './styles.css';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light pt-4 pb-4 main-nav">
            <div className="container">
                <a href="/" className="nav-logo-text">
                    <img src={Logo} alt="Learn Logo" />
                </a>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#learn-navbar"
                    aria-controls="learn-navbar"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div id="learn-navbar" className="collapse navbar-collapse nav-items">
                    <ul className="navbar-nav main-menu">
                        <li>
                            <a href="/" className="active">Home</a>
                        </li>
                        <li>
                            <a href="/produtos">Cursos</a>
                        </li>
                        <li>
                            <a href="/eventos">Eventos</a>
                        </li>
                        <li>
                            <a href="/recursos">Recursos</a>
                        </li>
                    </ul>
                    
                    <div className="group-buttons">
                        <a href="#login" role="button" className="btn-login">Login</a>
                        <RegisterButton />
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;