import { Router, Route, Switch, Redirect } from "react-router-dom";

import Navbar from "components/Navbar";
import Home from "pages/Home";
import CourseCatalog from "pages/CourseCatalog";
import EventCatalog from "pages/EventCatalog";
import ResourceCatalog from "pages/ResourceCatalog";
import Student from "pages/Student";
import CourseDetails from "pages/CourseDetails";
import EventDetails from "pages/EventDetails";


import './App.css'
import Login from "pages/Student/pages/Auth/Login";
import Signup from "pages/Student/pages/Auth/Signup";
import history from "utils/history";

function Routes() {
    return (
        <Router history={history}>

            <Navbar />

            <Switch>

                <Route path="/" exact>
                    <Home />
                </Route>

                <Route path="/courses" exact>
                    <CourseCatalog />
                </Route>

                <Route path="/events" exact>
                    <EventCatalog />
                </Route>

                <Route path="/resources" exact>
                    <ResourceCatalog />
                </Route>

                <Route path="/courses/:courseId">
                    <CourseDetails />
                </Route>

                <Route path="/events/:eventId">
                    <EventDetails />
                </Route>

                <Route path="/student/auth/login">
                    <Login />
                </Route>

                <Route path="/student/auth/signup">
                    <Signup />
                </Route>

                <Redirect from="/student/auth" to="/student/auth/login" exact />
                <Route path="/student/auth">
                    <Student />
                </Route>

                <Redirect from="/student" to="/student/dashboard" exact />
                <Route path="/student">
                    <Student />
                </Route>
            </Switch>

        </Router>
    );
}

export default Routes;
