import Score from 'components/Score';
import { Course } from 'types/Course';

import './styles.css';

type Props = {
    course: Course;
}

function CourseCard({ course }: Props) {
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
                <Score count={course?.count!} score={course?.score!} origin="catalog" />
            </div>
        </div>
    );
}

export default CourseCard;