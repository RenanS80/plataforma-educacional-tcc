import { useEffect, useState } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import axios, { AxiosRequestConfig } from 'axios';
import { toast } from 'react-toastify';

import { CollectionStatus } from 'types/CollectionStatus';
import { Event } from 'types/Event';
import { BASE_URL } from 'utils/requests';
import { getAuthData } from 'utils/storage';

type ParamsType = {
    eventId: string;
}

function EventProgressCard() {

    const history = useHistory();

    const { eventId } = useParams<ParamsType>();

    const [event, setEvent] = useState<Event>();

    const authData = getAuthData();

    useEffect(() => {
        axios.get(`${BASE_URL}/events/${eventId}`)
            .then(response => {
                setEvent(response.data)
            })
    }, [eventId]);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const status = (event.target as any).status.value;
        const score = (event.target as any).score.value;

        const config: AxiosRequestConfig = {
            baseURL: BASE_URL,
            method: 'PUT',
            url: '/progress',
            data: {
                collectionId: eventId,
                userId: authData.userId,
                score: score,
                status: status
            },
            withCredentials: true           // precisa estar autenticado para fazer essa requisição
        }

        axios(config).then(response => {
            toast.success('Evento avaliado com sucesso')
            history.push("/student/events")
        })
    }


    return (
        <div className="progress-form-container">
            <img className="progress-form-card-image" src={event?.image} alt={event?.title} />
            <div className="progress-card-bottom-container">
                <h5>{event?.title}</h5>

                <form className="progress-form" onSubmit={handleSubmit}>
                    <div className="form-group progress-form-group">
                        <label htmlFor="status">Status do evento</label>
                        <select className="form-control form-select" id="status">
                            <option disabled selected hidden>Selecione...</option>
                            <option>{CollectionStatus[0]}</option>
                            <option>{CollectionStatus[1]}</option>
                        </select>
                    </div>
                    <div className="form-group progress-form-group">
                        <label htmlFor="score">Informe a sua avaliação</label>
                        <select className="form-control form-select" id="score">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </div>
                    <div className="progress-form-btn-container">
                        <button type="submit" className="progress-btn btn-save">Salvar</button>
                    </div>
                </form >

                <Link to="/student/events">
                    <button className="progress-btn btn-cancel mt-3">Cancelar</button>
                </Link>
            </div >
        </div >
    );
}

export default EventProgressCard;