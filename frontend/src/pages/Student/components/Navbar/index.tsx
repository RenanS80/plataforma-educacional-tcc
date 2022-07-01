import { NavLink } from 'react-router-dom';

import { hasAnyRoles } from 'utils/auth';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faTv, faFile, faUsers } from '@fortawesome/free-solid-svg-icons';
import { ReactComponent as DashboardIcon } from 'assets/images/icons/dashboard.svg';

import './styles.css';

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
                    <NavLink to="/student/resources" className="student-nav-item" activeClassName="active">
                        <FontAwesomeIcon icon={faFile} className="resource-icon navbar-icon" />
                        <p>Adicionar Recursos</p>
                    </NavLink>
                </li>

                {hasAnyRoles(['ROLE_ADMIN']) &&
                    <li>
                        <NavLink to="/student/users" className="student-nav-item" activeClassName="active">
                            <FontAwesomeIcon icon={faUsers} className="event-icon navbar-icon" />
                            <p>Usuários</p>
                        </NavLink>
                    </li>
                }

            </ul>
        </nav>
    );
}

export default Navbar;