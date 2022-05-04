import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons';

import './styles.css';

function EventCard() {
    return (
        <div className="event-card">
            <div className="event-card-image">
                <img src="https://ik.imagekit.io/zqxyh6u3ylz/TCC/Eventos/IBM_GR1Q5mGq0.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1651007560030" alt="Evento" />
            </div>

            <div className="event-card-info">
                <p>Automação</p>
                <p>IBM Think 2022</p>
            </div>

            <div className="event-start-date">
                <FontAwesomeIcon icon={faCalendarDays} className="calendar-icon" />
                <p>09/05/2022</p>
            </div>
        </div>
    );
}

export default EventCard;