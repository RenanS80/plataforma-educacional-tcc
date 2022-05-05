import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, } from '@fortawesome/free-solid-svg-icons';
import Star from 'assets/img/star.svg';

import Navbar from 'components/Navbar';

import './styles.css';
import Footer from 'components/Footer';

function EventDetails() {

    return (
        <>
            <Navbar />

            <section className="event-details-section">
                <div className="container">
                    <div className="event-details-card">
                        <div className="event-details-card-top">
                            <div className="goback-button">
                                <FontAwesomeIcon icon={faChevronLeft} className="arrow-back" />
                                <p>VOLTAR</p>
                            </div>
                            <div className="event-title-score-container">
                                <h3>IBM Think 2022</h3>
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

                        <div className="event-details-card-bottom">
                            <div className="event-details-image">
                                <img src="https://ik.imagekit.io/zqxyh6u3ylz/TCC/Eventos/IBM_GR1Q5mGq0.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1651007560030" alt="Evento" className="img-responsive" />
                            </div>

                            <div className="event-details-platform-link">
                                <div>
                                    <h4>Plataforma</h4>
                                    <p>IBM</p>
                                </div>

                                <div className="event-details-link">
                                    <h4>Link</h4>
                                    <a href="https://www.ibm.com/events/think/" target="_blank" rel="noreferrer" className="link-desktop">https://www.ibm.com/events/think/</a>
                                    <a href="https://www.ibm.com/events/think/" target="_blank" rel="noreferrer" className="link-mobile">Clique aqui</a>
                                </div>
                            </div>

                            <div className="event-details-info">
                                <div className="event-details-info-description">
                                    <h4>Descrição do Evento</h4>
                                    <p>Think 2022 é uma conferência da IBM dedicada a tecnologia, soluções e software, como IA, nuvem, dados e segurança.</p>
                                </div>

                                <div className="event-details-date">
                                    <div>
                                        <h4>Início</h4>
                                        <p>09/05/2022</p>
                                    </div>
                                    <div>
                                        <h4>Fim</h4>
                                        <p>13/05/2022 </p>
                                    </div>

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
                                    <p>#machinelearning #ia</p>
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

export default EventDetails;