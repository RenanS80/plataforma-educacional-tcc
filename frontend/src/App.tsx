import CourseCatalog from 'pages/CourseCatalog';
import EventCatalog from 'pages/EventCatalog';
import Home from 'pages/Home';
import Login from 'pages/Login';
import ResourceCatalog from 'pages/ResourceCatalog';
import Signup from 'pages/Signup';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<CourseCatalog />} />
        <Route path="/events" element={<EventCatalog />} />
        <Route path="/resources" element={<ResourceCatalog />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
