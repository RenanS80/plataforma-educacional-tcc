import { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AxiosRequestConfig } from 'axios';

import { Progress } from 'types/Progress';
import { SpringPage } from 'types/Vendor/spring';
import { requestBackend } from 'utils/requests';

import Pagination from 'components/Pagination';
import CardStudentLoader from 'components/Loaders/CardStudentLoader';
import EventCard from 'pages/Student/components/EventCard';

import './styles.css';

type ControlComponentData = {
    activePage: number;
}

function EventList() {

    const [page, setPage] = useState<SpringPage<Progress>>();

    // Hook para manipular os loaders
    const [isLoading, setIsLoading] = useState(false);

    const [controlComponentData, setControlComponentData] = useState<ControlComponentData>({
        activePage: 0
    });

    const handlePageChange = (pageNumber: number) => {
        setControlComponentData({ activePage: pageNumber })
    }

    const getLogedEvents = useCallback(() => {
        setIsLoading(true);
        const config: AxiosRequestConfig = {
            method: 'GET',
            url: "/progress/events",
            withCredentials: true,
            params: {
                page: controlComponentData.activePage,
                size: 5,
            }
        }

        requestBackend(config)
            .then((response) => {
                setPage(response.data);
            })
            .finally(() => {
                setIsLoading(false);
            })
    }, [controlComponentData])

    useEffect(() => {
        getLogedEvents();
    }, [getLogedEvents])


    return (
        <main className="my-courses-container">
            <div className="container">

                {page?.content.length! < 1 ?
                    <>
                        <div className="my-courses-top">
                            <Link to="/student/events/create">
                                <button className="base-btn btn-add-content">Adicionar Evento</button>
                            </Link>
                        </div>
                        <h4 className="mb-4 mt-5">Oops, parece que você não tem nenhuma inscrição em eventos.</h4>
                        <header className="dashboard-steps-container">
                            <div className="dashboard-steps-content">
                                <h2>
                                    Siga as etapas
                                </h2>

                                <ul className="steps-items">
                                    <li>
                                        <span className="steps-number">1</span>
                                        Visite o catálogo de eventos na barra de navegação.
                                    </li>
                                    <li>
                                        <span className="steps-number">2</span>
                                        Clique no evento desejado.
                                    </li>
                                    <li>
                                        <span className="steps-number">3</span>
                                        Depois clique em <strong>"INSCREVER-SE"</strong>
                                    </li>
                                </ul>
                            </div>
                        </header>
                    </> :
                    <>
                        <div className="my-courses-top">
                            <Link to="/student/events/create">
                                <button className="base-btn btn-add-content">Adicionar Evento</button>
                            </Link>
                        </div>

                        <div className="my-courses-list">
                            {isLoading ? <CardStudentLoader /> : (
                                page?.content.map((course) => (
                                    <div key={course.collection.id}>
                                        <EventCard
                                            id={course.collection.id}
                                            image={course.collection.image}
                                            title={course.collection.title}
                                            category={course.collection.category.name}
                                            platform={course.collection.platform}
                                            status={course.status}
                                        />
                                    </div>
                                )))}
                        </div>

                        <div className="my-courses-pagination-container">
                            <Pagination
                                forcePage={page?.number}
                                pageCount={(page) ? page.totalPages : 0}
                                range={3}
                                onChange={handlePageChange}
                            />
                        </div>
                    </>
                }

            </div>
        </main>
    );
}

export default EventList;