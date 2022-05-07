import Star from 'assets/img/star-full.svg';
import { Course } from 'types/Course';

import './styles.css';

type Props = {
    course: Course;
}

function CourseCard({ course } : Props) {
    return (
        <div className="popular-course-card">
            <div className="popular-course-image">
                <img src={course.image} alt={course.title} />
            </div>

            <div className="popular-course-info">
                <p>{course.category.name}</p>
                <p>{course.title}</p>
            </div>

            <div className="popular-course-score">
                <p className="score">{course.score}</p>
                <div className="group-stars">
                    <img src={Star} alt="Full star" />
                    <img src={Star} alt="Full star" />
                    <img src={Star} alt="Full star" />
                    <img src={Star} alt="Full star" />
                    <img src={Star} alt="Full star" />
                </div>
                <p className="count-score">{`${course.count} avaliações`}</p>
            </div>
        </div>
    );
}

export default CourseCard;