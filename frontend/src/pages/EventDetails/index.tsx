import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, } from '@fortawesome/free-solid-svg-icons';

import Navbar from 'components/Navbar';

import './styles.css';
import Footer from 'components/Footer';
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { BASE_URL } from 'utils/requests';
import { Event } from 'types/Event';
import Score from 'components/Score';

type UrlParams = {
    eventId: string;
}

function EventDetails() {

    const { eventId } = useParams<UrlParams>()

    const [event, setEvent] = useState<Event>();

    useEffect(() => {
        axios.get(`${BASE_URL}/events/${eventId}`)
            .then(response => {
                setEvent(response.data);
            })
    }, [eventId])

    return (
        <>
            <Navbar />

            <section className="event-details-section">
                <div className="container">
                    <div className="event-details-card">
                        <div className="event-details-card-top">
                            <Link to="/events">
                                <div className="goback-button">
                                    <FontAwesomeIcon icon={faChevronLeft} className="arrow-back" />
                                    <p>VOLTAR</p>
                                </div>
                            </Link>

                            <div className="event-title-score-container">
                                <h3>{event?.title}</h3>
                                <Score count={event?.count!} score={event?.score!} />
                            </div>
                        </div>

                        <div className="event-details-card-bottom">
                            <div className="event-details-image">
                                <img src={event?.image} alt={event?.title} className="img-responsive" />
                            </div>

                            <div className="event-details-platform-link">
                                <div>
                                    <h4>Plataforma</h4>
                                    <p>{event?.platform}</p>
                                </div>

                                <div className="event-details-link">
                                    <h4>Link</h4>
                                    <a href={event?.link} target="_blank" rel="noreferrer">Clique aqui</a>
                                </div>
                            </div>

                            <div className="event-details-info">
                                <div className="event-details-info-description">
                                    <h4>Descrição do Evento</h4>
                                    <p>{event?.description}</p>
                                </div>

                                <div>
                                    <h4>Categoria</h4>
                                    <p>{event?.category.name}</p>
                                </div>

                                <div className="event-details-date">
                                    <div>
                                        <h4>Início</h4>
                                        <p>{event?.startDate}</p>
                                    </div>
                                    <div>
                                        <h4>Fim</h4>
                                        <p>{event?.endDate}</p>
                                    </div>
                                </div>

                                {event?.resources.length! > 0 &&
                                    <div>
                                        <h4>Recursos Educacionais</h4>
                                        <ul>

                                            {event?.resources.map((resource, key) => (
                                                <li key={key}>
                                                    <a href={resource.link}>{resource.title}</a>
                                                </li>
                                            ))}

                                        </ul>
                                    </div>
                                }

                                <div>
                                    <h4>Tags</h4>

                                    {event?.tags.map((tag, key) => (
                                        <p key={key} className="event-details-tags">{`#${tag.name.replace(/\s+/g, '')}`}</p>   /* Remover os espaços em branco da tag */
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

export default EventDetails;