import PrivateRoute from 'components/PrivateRoute';
import { Switch } from 'react-router-dom';
import Courses from './Courses';
import Dashboard from './Dashboard';
import Events from './Events';
import Navbar from './Navbar';
import Profile from './Profile';
import Resources from './Resources';
import './styles.css';
import Users from './Users';

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
                    <PrivateRoute path="/student/courses/:courseId">
                        <Courses />
                    </PrivateRoute>
                    <PrivateRoute path="/student/events/:eventId">
                        <Events />
                    </PrivateRoute>
                    <PrivateRoute path="/student/resources/:resourceId">
                        <Resources />
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