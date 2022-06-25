import { ReactComponent as CompleteStatus } from 'assets/images/icons/status-complete.svg';
import { ReactComponent as InProgressStatus } from 'assets/images/icons/status-inprogress.svg';

import './styles.css';

type Props = {
    image: string;
    title: string;
    category: string;
    platform: string;
    status: string;
}

function CourseCard({ image, title, category, platform, status }: Props) {

    // Primeira letra do status maiúscula
    const capitalizeStatus = (status : string) => {
        const lower = status.toLowerCase();
        return status.charAt(0).toUpperCase() + lower.slice(1);
    }

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
                        {status === 'CURSANDO' ? <InProgressStatus /> : <CompleteStatus /> }
                        <p>{capitalizeStatus(status)}</p>
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

export default CourseCard;