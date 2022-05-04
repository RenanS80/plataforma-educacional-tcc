import CourseCard from 'components/CourseCard';
import CourseFilter from 'components/CourseFilter';
import Footer from 'components/Footer';
import Navbar from 'components/Navbar';
import Pagination from 'components/Pagination';

import './styles.css';

function CourseCatalog() {

    return (
        <>
            <Navbar />

            <section className="course-catalog">
                <div className="container">
                    <div className="course-catalog-title">
                        <h5>Procure pelos cursos da sua preferência</h5>
                        <h2>Catálogo de cursos</h2>
                    </div>

                    <div className="search-filter">
                        <CourseFilter />
                    </div>


                    <div className="course-catalog-container">
                        <CourseCard />
                        <CourseCard />
                        <CourseCard />
                        <CourseCard />
                        <CourseCard />
                        <CourseCard />
                        <CourseCard />
                        <CourseCard />
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

export default CourseCatalog;