import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons';

import './styles.css';
import { Event } from 'types/Event';

type Props = {
    event: Event;
}

function EventCard({ event } : Props) {
    return (
        <div className="event-card">
            <div className="event-card-image">
                <img src={event.image} alt={event.title} />
            </div>

            <div className="event-card-info">
                <p>{event.category.name}</p>
                <p>{event.title}</p>
            </div>

            <div className="event-start-date">
                <FontAwesomeIcon icon={faCalendarDays} className="calendar-icon" />
                <p>{event.startDate}</p>
            </div>
        </div>
    );
}

export default EventCard;