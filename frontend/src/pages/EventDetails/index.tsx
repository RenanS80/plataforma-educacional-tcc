import { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios, { AxiosRequestConfig } from 'axios';
import { AuthContext } from 'AuthContext';
import { toast } from 'react-toastify';

import { BASE_URL, requestBackend } from 'utils/requests';
import { Event } from 'types/Event';
import { descriptionConfigure, formatLocalDate, urlConfigure } from 'utils/format';
import { getTokenData, isAuthenticated } from 'utils/auth';
import { getAuthData } from 'utils/storage';

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

    const { handleSubmit } = useForm();

    // Hook para manipular os loaders
    const [isLoading, setIsLoading] = useState(false);

    const { authContextData, setAuthContextData } = useContext(AuthContext);

    useEffect(() => {
        if (isAuthenticated()) {
            setAuthContextData({
                authenticated: isAuthenticated(),
                tokenData: getTokenData()
            })
        }
        else {
            setAuthContextData({
                authenticated: false
            })
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [authContextData])

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

    // Requisi????o para se inscrever no curso
    const onSubmit = () => {
        const authData = getAuthData();

        const config: AxiosRequestConfig = {
            method: 'POST',
            url: "/progress",
            baseURL: BASE_URL,
            data: {
                collectionId: eventId,
                userId: authData.userId
            },
            withCredentials: true           // precisa estar autenticado para fazer essa requisi????o
        }

        requestBackend(config)
            .then(response => {
                toast.success('Inscri????o realizada com sucesso. Visite "Meus Eventos" na ??rea de Estudante para visualiz??-lo');
            })
            .catch(() => {
                toast.error('Erro ao se inscrever no evento');
            })
    }


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
                                            <a href={urlConfigure(event?.link)} target="_blank" rel="noreferrer">
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
                                            <h4>Descri????o do Evento</h4>
                                            <p>{descriptionConfigure(event?.description)}</p>
                                        </div>

                                        <div>
                                            <h4>Categoria</h4>
                                            <p>{event?.category.name}</p>
                                        </div>

                                        <div className="event-details-date">
                                            <div>
                                                <h4>In??cio</h4>
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
                                                <p key={key} className="event-details-tags">{`#${tag.name.replace(/\s+/g, '')}`}</p>   /* Remover os espa??os em branco da tag */
                                            ))}
                                        </div>
                                    </div>
                                </>
                            }

                            {authContextData.authenticated ? (
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div>
                                        <button className="base-btn subscribe-btn">Inscrever-se</button>
                                    </div>
                                </form>
                            ) :
                                ''
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