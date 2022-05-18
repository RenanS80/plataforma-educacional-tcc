import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import './styles.css';

function Student() {
    return (
        <div className="student-container">
            <Navbar />

            <div className="student-content">
                <Outlet />
            </div>
        </div>
    );
}

export default Student;