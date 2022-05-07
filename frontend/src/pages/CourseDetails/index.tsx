import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, } from '@fortawesome/free-solid-svg-icons';


import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

import Navbar from 'components/Navbar';
import Score from 'components/Score';
import Footer from 'components/Footer';
import { Course } from 'types/Course';
import { BASE_URL } from 'utils/requests';

import './styles.css';

type UrlParams = {
    courseId: string;
}


function CourseDetails() {

    const { courseId } = useParams<UrlParams>();

    const [course, setCourse] = useState<Course>();

    useEffect(() => {
        axios.get(`${BASE_URL}/courses/${courseId}`)
            .then(response => {
                setCourse(response.data);
            })
    }, [courseId])

    return (
        <>
            <Navbar />

            <section className="course-details-section">
                <div className="container">
                    <div className="course-details-card">
                        <div className="course-details-card-top">
                            <Link to="/courses">
                                <div className="goback-button">
                                    <FontAwesomeIcon icon={faChevronLeft} className="arrow-back" />
                                    <p>VOLTAR</p>
                                </div>
                            </Link>

                            <div className="course-title-score-container">
                                <h3>{course?.title}</h3>
                                <Score count={course?.count!} score={course?.score!} />

                            </div>
                        </div>

                        <div className="course-details-card-bottom">
                            <div className="course-details-image">
                                <img src={course?.image} alt={course?.title} className="img-responsive" />
                            </div>

                            <div className="course-details-platform-link">
                                <div>
                                    <h4>Plataforma</h4>
                                    <p>{course?.platform}</p>
                                </div>

                                <div className="course-details-link">
                                    <h4>Link</h4>
                                    <a href={course?.link} target="_blank" rel="noreferrer">Clique aqui</a>
                                </div>
                            </div>

                            <div className="course-details-info">
                                <div className="course-details-info-description">
                                    <h4>Descrição do Curso</h4>
                                    <p>{course?.description}</p>
                                </div>

                                <div>
                                    <h4>Categoria</h4>
                                    <p>{course?.category.name}</p>
                                </div>

                                <div>
                                    <h4>Data</h4>
                                    <p>{course?.registrationDate}</p>
                                </div>

                                {course?.resources.length! > 0 &&
                                    <div>
                                        <h4>Recursos Educacionais</h4>
                                        <ul>

                                            {course?.resources.map((resource, key) => (
                                                <li key={key}>
                                                    <a href={resource.link}>{resource.title}</a>
                                                </li>
                                            ))}

                                        </ul>
                                    </div>
                                }


                                <div>
                                    <h4>Tags</h4>

                                    {course?.tags.map((tag, key) => (
                                        <p key={key} className="course-details-tags">{`#${tag.name}`}</p>
                                    ))}

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />

        </>
    );
}

export default CourseDetails;