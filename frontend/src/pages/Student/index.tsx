import PrivateRoute from 'components/PrivateRoute';
import { Switch } from 'react-router-dom';

import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import Courses from './pages/Courses';
import Events from './pages/Events';
import Profile from './pages/Profile';
import Users from './pages/Users';
import ResourceForm from './pages/Dashboard/ResourceForm';

import './styles.css';

function Student() {
    return (
        <div className="student-container">
            <Navbar />

            <div className="student-content">
                <Switch>
                    <PrivateRoute path="/student/dashboard">
                        <Dashboard />
                    </PrivateRoute>

                    <PrivateRoute path="/student/profile">
                        <Profile />
                    </PrivateRoute>

                    <PrivateRoute path="/student/courses">
                        <Courses />
                    </PrivateRoute>

                    <PrivateRoute path="/student/events">
                        <Events />
                    </PrivateRoute>

                    <PrivateRoute path="/student/resources">
                        <ResourceForm />
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