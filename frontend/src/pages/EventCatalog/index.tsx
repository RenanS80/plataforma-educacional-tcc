import { useEffect, useState } from 'react';
import axios from 'axios';

import { Event } from 'types/Event';
import { AxiosParams } from 'types/Vendor/axios';
import { SpringPage } from 'types/Vendor/spring';
import { BASE_URL } from 'utils/requests';
import Navbar from 'components/Navbar';
import CourseFilter from 'components/CourseFilter';
import EventCard from 'components/EventCard';
import Pagination from 'components/Pagination';
import Footer from 'components/Footer';

import './styles.css';
import { Link } from 'react-router-dom';

function EventCatalog() {

    const [page, setPage] = useState<SpringPage<Event>>();

    useEffect(() => {

        const params: AxiosParams = {
            method: 'GET',
            url: `${BASE_URL}/events`,
            params: {
                page: 0,
                size: 12
            }
        }

        axios(params)
            .then(response => {
                setPage(response.data);
            })
    }, [])

    return (
        <>
            <Navbar />

            <section className="event-catalog">
                <div className="container">
                    <div className="event-catalog-title">
                        <h5>Procure pelos eventos da sua preferência</h5>
                        <h2>Catálogo de eventos</h2>
                    </div>

                    <div className="search-filter">
                        <CourseFilter />
                    </div>


                    <div className="course-catalog-container">
                    {page?.content.map((event) => (
                            <div key={event.id}>
                                <Link to="/events/28">
                                    <EventCard event={event} />
                                </Link>
                            </div>
                        ))}
                    </div>

                    <div className="course-pagination-container">
                        <Pagination />
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}

export default EventCatalog;