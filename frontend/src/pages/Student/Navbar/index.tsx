import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faUser, faTv, faUsers } from '@fortawesome/free-solid-svg-icons';
import { ReactComponent as DashboardIcon } from 'assets/img/dashboard.svg';

import './styles.css';
import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="student-nav-container">
            <ul>
                <li>
                    <NavLink to="/student/dashboard" className="student-nav-item" activeClassName="active">
                        <DashboardIcon className="dashboard-icon navbar-icon active" />
                        <p>Dashboard</p>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/student/profile" className="student-nav-item" activeClassName="active">
                        <FontAwesomeIcon icon={faUser} className="profile-icon navbar-icon" />
                        <p>Meu Perfil</p>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/student/courses" className="student-nav-item" activeClassName="active">
                        <FontAwesomeIcon icon={faGraduationCap} className="course-icon navbar-icon" />
                        <p>Meus Cursos</p>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/student/events" className="student-nav-item" activeClassName="active">
                        <FontAwesomeIcon icon={faTv} className="event-icon navbar-icon" />
                        <p>Meus Eventos</p>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/student/users" className="student-nav-item" activeClassName="active">
                        <FontAwesomeIcon icon={faUsers} className="event-icon navbar-icon" />
                        <p>Usuários</p>
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;