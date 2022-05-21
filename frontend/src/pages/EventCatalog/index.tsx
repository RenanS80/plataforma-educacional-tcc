import { useCallback, useEffect, useState } from 'react';
import { AxiosRequestConfig } from 'axios';

import { Event } from 'types/Event';
import { SpringPage } from 'types/Vendor/spring';
import { requestBackend } from 'utils/requests';
import EventCard from 'components/EventCard';
import Pagination from 'components/Pagination';
import Footer from 'components/Footer';

import './styles.css';
import { Link } from 'react-router-dom';
import EventFilter, { EventFilterData } from 'components/EventFilter';

type ControlComponentData = {
    activePage: number;
    filterData: EventFilterData;
}


function EventCatalog() {

    const [page, setPage] = useState<SpringPage<Event>>();

    const [controlComponentData, setControlComponentData] = useState<ControlComponentData>({
        activePage: 0,
        filterData: {title: "", category: null}
    });

    const handlePageChange = (pageNumber: number) => {
        setControlComponentData({ activePage: pageNumber, filterData: controlComponentData.filterData })
    }

    const handleSubmitFilter = (data: EventFilterData) => {
        setControlComponentData({ activePage: 0, filterData: data })
    }
    

    const getEvents = useCallback(() => {
        const config: AxiosRequestConfig = {
            method: 'GET',
            url: "/events",
            params: {
                page: controlComponentData.activePage,
                size: 12,
                title: controlComponentData.filterData.title,
                categoryId: controlComponentData.filterData.category?.id
            }
        }

        requestBackend(config).then((response) => {
            setPage(response.data);
        })
    }, [controlComponentData])

    useEffect(() => {
        getEvents();
    }, [getEvents])

    return (
        <>
            <section className="event-catalog">
                <div className="container">
                    <div className="event-catalog-title">
                        <h5>Procure pelos eventos da sua preferência</h5>
                        <h2>Catálogo de eventos</h2>
                    </div>

                    <div className="search-filter">
                        <EventFilter onSubmitFilter={handleSubmitFilter} /> 
                    </div>


                    <div className="course-catalog-container">
                        {page?.content.map((event) => (
                            <div key={event.id}>
                                <Link to={`/events/${event.id}`}>
                                    <EventCard event={event} />
                                </Link>
                            </div>
                        ))}
                    </div>

                    <div className="course-pagination-container">
                        <Pagination
                            forcePage={page?.number}
                            pageCount={(page) ? page.totalPages : 0}
                            range={3}
                            onChange={handlePageChange}
                        />
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}

export default EventCatalog;