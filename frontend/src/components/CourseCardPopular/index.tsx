import Star from 'assets/img/star.svg';

import './styles.css';

function CourseCardPopular() {
    return (
        <div className="popular-course-card">
            <div className="popular-course-image">
                <img src="https://ik.imagekit.io/zqxyh6u3ylz/TCC/Cursos/front-end_tzOXv2QUo.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1651612517369" alt="Curso" />
            </div>

            <div className="popular-course-info">
                <p>Front-end</p>
                <p>Desenvolvimento Web Completo 2022 - 20 cursos + 20 projetos</p>
            </div>

            <div className="popular-course-score">
                <p className="score">5.0</p>
                <div className="group-stars">
                    <img src={Star} alt="Full star" />
                    <img src={Star} alt="Full star" />
                    <img src={Star} alt="Full star" />
                    <img src={Star} alt="Full star" />
                    <img src={Star} alt="Full star" />
                </div>
                <p className="count-score">95 avaliações</p>
            </div>
        </div>
    );
}

export default CourseCardPopular;