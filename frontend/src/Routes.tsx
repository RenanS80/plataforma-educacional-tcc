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
import Login from "pages/Student/Auth/Login";
import Signup from "pages/Student/Auth/Signup";
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



                {/* <Route path="/" element={<Home />} />

        <Route path="/courses" element={<CourseCatalog />} />
        <Route path="/events" element={<EventCatalog />} />
        <Route path="/resources" element={<ResourceCatalog />} />

        <Route path="/student" element={<Student />}>
          <Route path="dashboard" element={<Users />} />
          <Route path="profile" element={<h1>Meu Perfil</h1>} />
          <Route path="courses" element={<h1>Meus Cursos</h1>} />
          <Route path="events" element={<h1>Meus Eventos</h1>} />

        </Route>

        <Route path="/courses/:courseId" element={<CourseDetails />} />
        <Route path="/events/:eventId" element={<EventDetails />} />

          <Route path="/student/auth/login" element={<Login />} />
          <Route path="/student/auth/signup" element={<Signup />} />

        <Route path="*" element={<h1>Not Found</h1>} /> */}
            </Switch>

        </Router>
    );
}

export default Routes;
