import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faUser, faTv } from '@fortawesome/free-solid-svg-icons';
import { ReactComponent as DashboardIcon } from 'assets/img/dashboard.svg';

import './styles.css';
import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="student-nav-container">
            <ul>
                <li>
                    <NavLink to="/student/dashboard" className={({ isActive }) => isActive ? "student-nav-item active" : "student-nav-item"}>
                        <DashboardIcon className="dashboard-icon navbar-icon active" />
                        <p>Dashboard</p>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/student/profile" className={({ isActive }) => isActive ? "student-nav-item profile-item active" : "student-nav-item profile-item"}>
                        <FontAwesomeIcon icon={faUser} className="profile-icon navbar-icon" />
                        <p>Meu Perfil</p>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/student/courses" className={({ isActive }) => isActive ? "student-nav-item active" : "student-nav-item"}>
                        <FontAwesomeIcon icon={faGraduationCap} className="course-icon navbar-icon" />
                        <p>Meus Cursos</p>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/student/events" className={({ isActive }) => isActive ? "student-nav-item active" : "student-nav-item"}>
                        <FontAwesomeIcon icon={faTv} className="event-icon navbar-icon" />
                        <p>Meus Eventos</p>
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;