import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from 'pages/Home';
import CourseCatalog from 'pages/CourseCatalog';
import EventCatalog from 'pages/EventCatalog';
import ResourceCatalog from 'pages/ResourceCatalog';
import CourseDetails from 'pages/CourseDetails';
import EventDetails from 'pages/EventDetails';
import Login from 'pages/Login';
import Signup from 'pages/Signup';

import './App.css';
import Navbar from 'components/Navbar';

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/courses" element={<CourseCatalog />} />
        <Route path="/events" element={<EventCatalog />} />
        <Route path="/resources" element={<ResourceCatalog />} />

        <Route path="/courses/:courseId" element={<CourseDetails />} />
        <Route path="/events/:eventId" element={<EventDetails />} />

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
