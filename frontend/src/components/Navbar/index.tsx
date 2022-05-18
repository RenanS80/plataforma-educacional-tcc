import Logo from 'assets/img/logo.png';

import 'bootstrap/js/src/collapse.js';
import RegisterButton from 'components/RegisterButton';
import { NavLink } from 'react-router-dom';

import './styles.css';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light pt-4 pb-4 main-nav">
            <div className="container">
                <NavLink to="/" className="nav-logo-text">
                    <img src={Logo} alt="Learn Logo" />
                </NavLink>

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
                            <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/courses" className={({ isActive }) => isActive ? "active" : ""}>Cursos</NavLink>
                        </li>
                        <li>
                            <NavLink to="/events" className={({ isActive }) => isActive ? "active" : ""}>Eventos</NavLink>
                        </li>
                        <li>
                            <NavLink to="/resources" className={({ isActive }) => isActive ? "active" : ""}>Recursos</NavLink>
                        </li>
                        <li>
                            <NavLink to="/student/dashboard" className={({ isActive }) => isActive ? "active" : ""}>Estudante</NavLink>
                        </li>
                    </ul>
                    
                    <div className="group-buttons">
                        <NavLink to="/login" role="button" className="btn-login">Login</NavLink>
                        <RegisterButton />
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;