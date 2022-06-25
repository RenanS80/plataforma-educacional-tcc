import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

import { BASE_URL } from 'utils/requests';
import { Event } from 'types/Event';
import { formatLocalDate } from 'utils/format';

import Score from 'components/Score';
import Footer from 'components/Footer';
import CardDetailsCenterLoader from 'components/Loaders/CardDetailsLoader/CardDetailsCenterLoader';
import CardDetailsLeftLoader from 'components/Loaders/CardDetailsLoader/CardDetailsLeftLoader';
import CardDetailsRightLoader from 'components/Loaders/CardDetailsLoader/CardDetailsRightLoader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, } from '@fortawesome/free-solid-svg-icons';

import './styles.css';

type UrlParams = {
    eventId: string;
}

function EventDetails() {

    const { eventId } = useParams<UrlParams>()

    const [event, setEvent] = useState<Event>();

    // Hook para manipular os loaders
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        axios.get(`${BASE_URL}/events/${eventId}`)
            .then(response => {
                setEvent(response.data);
            })
            .finally(() => {
                setIsLoading(false);
            })
    }, [eventId])

    return (
        <>
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

                            {isLoading ? <CardDetailsCenterLoader /> : (
                                <div className="event-title-score-container">
                                    <h3>{event?.title}</h3>
                                    <Score count={event?.count!} score={event?.score!} origin="details" />
                                </div>
                            )}

                        </div>

                        <div className="event-details-card-bottom">
                            {isLoading ? <CardDetailsLeftLoader /> :
                                <>
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
                                            <a
                                                href={event?.link.startsWith('www') || !event?.link.startsWith('http') || !event?.link.startsWith('https') ?
                                                    'https://'.concat(event?.link as string) : event?.link}
                                                target="_blank" rel="noreferrer">
                                                Clique aqui
                                            </a>
                                        </div>
                                    </div>
                                </>
                            }

                            {isLoading ? <CardDetailsRightLoader /> :
                                <>
                                    <div className="event-details-info">
                                        <div className="event-details-info-description">
                                            <h4>Descrição do Evento</h4>
                                            <p>{!event?.description.endsWith('.') ? event?.description.concat('.') : event?.description}</p>
                                        </div>

                                        <div>
                                            <h4>Categoria</h4>
                                            <p>{event?.category.name}</p>
                                        </div>

                                        <div className="event-details-date">
                                            <div>
                                                <h4>Início</h4>
                                                {event?.startDate !== undefined ? <p>{formatLocalDate(event.startDate, "dd/MM/yyyy")}</p> : ""}
                                            </div>
                                            <div>
                                                <h4>Fim</h4>
                                                {event?.endDate !== undefined ? <p>{formatLocalDate(event.endDate, "dd/MM/yyyy")}</p> : ""}
                                            </div>
                                        </div>

                                        {event?.resources.length! > 0 &&
                                            <div>
                                                <h4>Recursos Educacionais</h4>
                                                <ul className="event-resources-list">

                                                    {event?.resources.map((resource, key) => (
                                                        <li key={key}>
                                                            <a href={resource.link} target="_blank" rel="noreferrer">{resource.title}</a>
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
                                </>
                            }

                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}

export default EventDetails;