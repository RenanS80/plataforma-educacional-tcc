import { useCallback, useEffect, useState } from 'react';
import { AxiosRequestConfig } from 'axios';
import { Link } from 'react-router-dom';

import { Progress } from 'types/Progress';
import { SpringPage } from 'types/Vendor/spring';
import { requestBackend } from 'utils/requests';
import { getAuthData } from 'utils/storage';

import CourseCard from '../../components/CourseCard';
import EventCard from '../../components/EventCard';
import CardStudentLoader from 'components/Loaders/CardStudentLoader';

import './styles.css';

type ControlComponentData = {
    activePage: number;
}

function Dashboard() {

    const [page, setPage] = useState<SpringPage<Progress>>();

    const [eventPage, setEventPage] = useState<SpringPage<Progress>>();

    // Hook para manipular os loaders
    const [isLoading, setIsLoading] = useState(false);

    const authData = getAuthData();

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [controlComponentData, setControlComponentData] = useState<ControlComponentData>({
        activePage: 0
    });

    const getLogedCourses = useCallback(() => {
        setIsLoading(true);
        const config: AxiosRequestConfig = {
            method: 'GET',
            url: "/progress/courses",
            withCredentials: true,
            params: {
                page: controlComponentData.activePage,
                size: 3
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
        getLogedCourses();
    }, [getLogedCourses])

    const getLogedEvents = useCallback(() => {

        const config: AxiosRequestConfig = {
            method: 'GET',
            url: "/progress/events",
            withCredentials: true,
            params: {
                page: controlComponentData.activePage,
                size: 3
            }
        }

        requestBackend(config)
            .then((response) => {
                setEventPage(response.data);
            })
    }, [controlComponentData])

    useEffect(() => {
        getLogedEvents();
    }, [getLogedEvents])


    return (
        <main className="container-dashboard">
            <div className="container">
                <div className="dashboard-greeting">
                    <p>Olá, {authData.userFirstName}! ✋</p>
                    <p>{page?.content.length! < 1 ? 'Você não possui cursos ou eventos para gerenciar. Vamos aprender algo novo hoje?' : 'Vamos aprender algo novo hoje?'}</p>
                </div>

                {page?.content.length! < 1 ?
                    <header className="dashboard-steps-container">
                        <div className="dashboard-steps-content">
                            <h2>
                                Siga as etapas
                            </h2>

                            <ul className="steps-items">
                                <li>
                                    <span className="steps-number">1</span>
                                    Visite o catálogo de cursos ou eventos na barra de navegação.
                                </li>
                                <li>
                                    <span className="steps-number">2</span>
                                    Clique no curso ou evento desejado.
                                </li>
                                <li>
                                    <span className="steps-number">3</span>
                                    Depois clique em <strong>"INSCREVER-SE"</strong>
                                </li>
                            </ul>
                        </div>
                    </header>

                    :

                    <>
                        <section className="dashboard-my-collections">
                            <div className="dashboard-collections-title">
                                <h4>Meus cursos</h4>
                                <Link to="/student/courses">
                                    <p>Ver todos</p>
                                </Link>
                            </div>

                            <div className="dashboard-collections-container">
                                {isLoading ? <CardStudentLoader /> : (
                                    page?.content.map((course) => (
                                        <div key={course.collection.id}>
                                            <CourseCard
                                                id={course.collection.id}
                                                image={course.collection.image}
                                                title={course.collection.title}
                                                link={course.collection.link}
                                                category={course.collection.category.name}
                                                platform={course.collection.platform}
                                                status={course.status}
                                            />
                                        </div>
                                    )))}
                            </div>
                        </section>

                        {eventPage?.content.length! > 0 ?
                            <section className="dashboard-my-collections dashboard-my-events">
                                <div className="dashboard-collections-title">
                                    <h4>Meus eventos</h4>
                                    <Link to="/student/events">
                                        <p>Ver todos</p>
                                    </Link>
                                </div>

                                <div className="dashboard-collections-container">
                                    {eventPage?.content.map((event) => (
                                        <div key={event.collection.id}>
                                            <EventCard
                                                id={event.collection.id}
                                                image={event.collection.image}
                                                title={event.collection.title}
                                                link={event.collection.link}
                                                category={event.collection.category.name}
                                                platform={event.collection.platform}
                                                status={event.status}
                                            />
                                        </div>
                                    ))}
                                </div>
                            </section>
                            : ''}
                    </>
                }

            </div>
        </main>
    );
}

export default Dashboard;