import Logo from 'assets/img/logo.png';

import 'bootstrap/js/src/collapse.js';
import RegisterButton from 'components/RegisterButton';
import { useContext, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { getTokenData, isAuthenticated, removeAuthData } from 'utils/requests';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';

import './styles.css';
import history from 'utils/history';
import { AuthContext } from 'AuthContext';

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
                            <div>
                                <NavLink to="/student/auth/login" role="button" className="btn-login">Login</NavLink>
                                <RegisterButton />
                            </div>
                        }

                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;