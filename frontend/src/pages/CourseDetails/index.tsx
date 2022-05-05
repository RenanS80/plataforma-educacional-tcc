import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, } from '@fortawesome/free-solid-svg-icons';
import Star from 'assets/img/star.svg';

import Navbar from 'components/Navbar';

import './styles.css';
import Footer from 'components/Footer';

function CourseDetails() {

    return (
        <>
            <Navbar />

            <section className="course-details-section">
                <div className="container">
                    <div className="course-details-card">
                        <div className="course-details-card-top">
                            <div className="goback-button">
                                <FontAwesomeIcon icon={faChevronLeft} className="arrow-back" />
                                <p>VOLTAR</p>
                            </div>
                            <div className="course-title-score-container">
                                <h3>Desenvolvimento Web Completo 2022 - 20 cursos + 20 projetos</h3>
                                <div className="score-info">
                                    <p className="score">5.0</p>
                                    <div className="group-stars">
                                        <img src={Star} alt="Full star" />
                                        <img src={Star} alt="Full star" />
                                        <img src={Star} alt="Full star" />
                                        <img src={Star} alt="Full star" />
                                        <img src={Star} alt="Full star" />
                                    </div>
                                    <p className="count-score">(95 avaliações)</p>
                                </div>
                            </div>
                        </div>

                        <div className="course-details-card-bottom">
                            <div className="course-details-image">
                                <img src="https://ik.imagekit.io/zqxyh6u3ylz/TCC/Cursos/front-end_tzOXv2QUo.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1651612517369" alt="Curso" className="img-responsive" />
                            </div>

                            <div className="course-details-platform-link">
                                <div>
                                    <h4>Plataforma</h4>
                                    <p>Udemy</p>
                                </div>

                                <div className="course-details-link">
                                    <h4>Link</h4>
                                    <a href="https://www.udemy.com/course/web-completo/" target="_blank" rel="noreferrer" className="link-desktop">https://www.udemy.com/course/web-completo/</a>
                                    <a href="https://www.udemy.com/course/web-completo/" target="_blank" rel="noreferrer" className="link-mobile">Clique aqui</a>
                                </div>
                            </div>

                            <div className="course-details-info">
                                <div className="course-details-info-description">
                                    <h4>Descrição do Curso</h4>
                                    <p>Domine Web - 20 Cursos - HTML5, CSS3, SASS, Bootstrap, JS, ES6, PHP 7, OO, MySQL, JQuery, MVC, APIs, IONIC e muito mais.</p>
                                </div>

                                <div>
                                    <h4>Data</h4>
                                    <p>01/01/2022</p>
                                </div>

                                <div>
                                    <h4>Recursos Educacionais</h4>
                                    <ul>
                                        <li>
                                            <a href="#link">Caelum Estruturação de Páginas Usando HTML e CSS</a>
                                        </li>
                                        <li>
                                            <a href="#link">Playlist de aulas HTML5 e CSS3</a>
                                        </li>
                                    </ul>
                                </div>

                                <div>
                                    <h4>Tags</h4>
                                    <p>#html #css #bootstrap #php</p>
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