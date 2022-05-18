import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios, { AxiosRequestConfig } from 'axios';

import { Course } from 'types/Course';
import { SpringPage } from 'types/Vendor/spring';
import { BASE_URL } from 'utils/requests';
import CourseFilter from 'components/CourseFilter';
import CourseCard from 'components/CourseCard';
import Pagination from 'components/Pagination';
import Footer from 'components/Footer';

import './styles.css';

function CourseCatalog() {

    const [page, setPage] = useState<SpringPage<Course>>();

    useEffect(() => {
        getCourses(0);
    }, [])

    const getCourses = (pageNumber: number) => {
        const params: AxiosRequestConfig = {
            method: 'GET',
            url: "/courses",
            baseURL: BASE_URL,
            params: {
                page: pageNumber,
                size: 12
            }
        }
        axios(params)
            .then(response => {
                setPage(response.data);
            })
    }

    return (
        <>
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

                        {page?.content.map((course) => (
                            <div key={course.id}>
                                <Link to={`/courses/${course.id}`}>
                                    <CourseCard course={course} />
                                </Link>
                            </div>
                        ))}

                    </div>

                    <div className="course-pagination-container">
                        <Pagination
                            pageCount={(page) ? page.totalPages : 0}
                            range={3}
                            onChange={getCourses}
                        />
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}

export default CourseCatalog;