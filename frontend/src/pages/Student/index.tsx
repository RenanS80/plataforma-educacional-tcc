import { Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import './styles.css';
import Users from './User';

function Student() {
    return (
        <div className="student-container">
            <Navbar />

            <div className="student-content">
                <Switch>
                    <Route path="/student/dashboard">
                        <h1>Dashboard</h1>
                    </Route>
                    <Route path="/student/profile">
                        <h1>Perfil</h1>
                    </Route>
                    <Route path="/student/courses">
                        <h1>Meus Cursos</h1>
                    </Route>
                    <Route path="/student/events">
                        <h1>Meus Eventos</h1>
                    </Route>
                    <Route path="/student/users">
                        <Users />
                    </Route>
                </Switch>
            </div>
        </div>
    );
}

export default Student;