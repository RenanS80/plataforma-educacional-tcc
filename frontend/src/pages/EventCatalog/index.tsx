import CourseFilter from 'components/CourseFilter';
import EventCard from 'components/EventCard';
import Footer from 'components/Footer';
import Navbar from 'components/Navbar';
import Pagination from 'components/Pagination';

import './styles.css';

function EventCatalog() {

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
                        <EventCard />
                        <EventCard />
                        <EventCard />
                        <EventCard />
                        <EventCard />
                        <EventCard />
                        <EventCard />
                        <EventCard />
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