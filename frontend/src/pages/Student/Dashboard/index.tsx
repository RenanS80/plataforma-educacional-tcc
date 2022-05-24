import { Link } from 'react-router-dom';

import './styles.css';


function Dashboard() {
    return (
        <div className="add-content-button-container">
            <Link to="/student/courses/create">
                <button className="base-btn btn-add-content">Adicionar Curso</button>
            </Link>
            <Link to="/student/events/create">
                <button className="base-btn btn-add-content">Adicionar Evento</button>
            </Link>
            <Link to="/student/resources/create">
                <button className="base-btn btn-add-content">Adicionar Recurso</button>
            </Link>
        </div>
    );
}

export default Dashboard;