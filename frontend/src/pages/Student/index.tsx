import PrivateRoute from 'components/PrivateRoute';
import { Switch } from 'react-router-dom';
import Navbar from './Navbar';
import './styles.css';
import Users from './User';

function Student() {
    return (
        <div className="student-container">
            <Navbar />

            <div className="student-content">
                <Switch>
                    <PrivateRoute path="/student/dashboard">
                        <h1>Dashboard</h1>
                    </PrivateRoute>
                    <PrivateRoute path="/student/profile">
                        <h1>Perfil</h1>
                    </PrivateRoute>
                    <PrivateRoute path="/student/courses">
                        <h1>Meus Cursos</h1>
                    </PrivateRoute>
                    <PrivateRoute path="/student/events">
                        <h1>Meus Eventos</h1>
                    </PrivateRoute>
                    <PrivateRoute path="/student/users" roles={['ROLE_ADMIN']}>
                        <Users />
                    </PrivateRoute>
                </Switch>
            </div>
        </div>
    );
}

export default Student;