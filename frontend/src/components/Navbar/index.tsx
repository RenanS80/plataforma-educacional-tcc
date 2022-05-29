import 'bootstrap/js/src/collapse.js';
import { useContext, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from 'AuthContext';
import history from 'utils/history';
import { getTokenData, isAuthenticated } from 'utils/auth';
import { removeAuthData } from 'utils/storage';
import SignUpButton from 'components/SignUpButton';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import Logo from 'assets/img/logo.png';

import './styles.css';

function Navbar() {

    const { authContextData, setAuthContextData } = useContext(AuthContext);

    useEffect(() => {
        if (isAuthenticated()) {
            setAuthContextData({
                authenticated: isAuthenticated(),
                tokenData: getTokenData()
            })
        }
        else {
            setAuthContextData({
                authenticated: false
            })
        }
    }, [authContextData])

    const handleLogoutClick = (event : React.MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault();

        removeAuthData();
        setAuthContextData({
            authenticated: false
        })
        history.replace('/');
    }

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
                            <NavLink to="/" exact activeClassName="active">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/courses" activeClassName="active">Cursos</NavLink>
                        </li>
                        <li>
                            <NavLink to="/events" activeClassName="active">Eventos</NavLink>
                        </li>
                        <li>
                            <NavLink to="/resources" activeClassName="active">Recursos</NavLink>
                        </li>
                        <li>
                            <NavLink to="/student" activeClassName="active">Estudante</NavLink>
                        </li>
                    </ul>

                    <div className="group-buttons">

                        {authContextData.authenticated ? (
                            <div className="navbar-logout-container">
                                <Link to="/" className="navbar-logout" onClick={handleLogoutClick}>Logout</Link>
                                <FontAwesomeIcon icon={faArrowRightFromBracket} className="navbar-logout-icon" />
                            </div>
                        ) :
                            <div className="btn-login-signup-container">
                                <NavLink to="/student/auth/login" role="button" className="base-btn btn-login">Login</NavLink>
                                <SignUpButton />
                            </div>
                        }

                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;