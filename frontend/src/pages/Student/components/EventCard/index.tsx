import { ReactComponent as CompleteStatus } from 'assets/images/icons/status-complete.svg';
import { ReactComponent as InProgressStatus } from 'assets/images/icons/status-inprogress.svg';

import './styles.css';

type Props = {
    image: string;
    title: string;
    category: string;
    platform: string;
    /*startDate: string;
    endDate: string*/
}

function EventCard({ image, title, category, platform/*, startDate, endDate*/ }: Props) {

    return (
        <div className="course-card-student-container">
            <div className="course-card-student-image">
                <img src={image} alt={title} />
            </div>

            <div className="course-card-student-content">
                <div className="course-card-student-info">
                    <h5>{title}</h5>
                    <p>{category} | {platform}</p>
                    <div className="course-card-student-status">
                        <p>Início - Fim</p>
                    </div>
                </div>
                <div className="course-card-student-button">
                    <button>
                        Avaliar
                    </button>
                </div>
            </div>
        </div>
    );
}

export default EventCard;