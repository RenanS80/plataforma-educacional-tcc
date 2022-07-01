import { Link } from 'react-router-dom';
import { CollectionStatus } from 'types/CollectionStatus';

import { ReactComponent as CompleteStatus } from 'assets/images/icons/status-complete.svg';
import { ReactComponent as InProgressStatus } from 'assets/images/icons/status-inprogress.svg';

import './styles.css';

type Props = {
    id: number;
    image: string;
    title: string;
    category: string;
    platform: string;
    status: CollectionStatus;
}

function CourseCard({id, image, title, category, platform, status }: Props) {

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
                        {String(status) === "Cursando" ? <InProgressStatus /> : <CompleteStatus />}
                        <p>{status}</p>
                    </div>
                </div>

                <div className="course-card-student-button">
                    <Link to={`/student/courses/progress/${id}`}>
                        <button>Avaliar</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default CourseCard;