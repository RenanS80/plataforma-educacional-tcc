import { BrowserRouter, Route, Routes } from "react-router-dom";

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

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/courses" element={<CourseCatalog />} />
        <Route path="/events" element={<EventCatalog />} />
        <Route path="/resources" element={<ResourceCatalog />} />

        <Route path="/student" element={<Student />}>
          <Route path="dashboard" element={<h1>Dashboard</h1>} />
          <Route path="profile" element={<h1>Meu Perfil</h1>} />
          <Route path="courses" element={<h1>Meus Cursos</h1>} />
          <Route path="events" element={<h1>Meus Eventos</h1>} />

        </Route>

        <Route path="/courses/:courseId" element={<CourseDetails />} />
        <Route path="/events/:eventId" element={<EventDetails />} />

          <Route path="/student/auth/login" element={<Login />} />
          <Route path="/student/auth/signup" element={<Signup />} />

        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
