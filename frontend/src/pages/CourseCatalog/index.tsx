import { Link } from 'react-router-dom';
import { useCallback, useEffect, useState } from 'react';
import { AxiosRequestConfig } from 'axios';

import { Course } from 'types/Course';
import { SpringPage } from 'types/Vendor/spring';
import { requestBackend } from 'utils/requests';
import CourseFilter, { CourseFilterData } from 'components/CourseFilter';
import CourseCard from 'components/CourseCard';
import Pagination from 'components/Pagination';
import Footer from 'components/Footer';
import CardLoader from '../../components/Loaders/CardLoader';

import './styles.css';

type ControlComponentData = {
    activePage: number;
    filterData: CourseFilterData;
}

function CourseCatalog() {

    const [page, setPage] = useState<SpringPage<Course>>();

    // Hook para manipular os loaders
    const [isLoading, setIsLoading] = useState(false);

    const [controlComponentData, setControlComponentData] = useState<ControlComponentData>({
        activePage: 0,
        filterData: { title: "", category: null }
    });

    const handlePageChange = (pageNumber: number) => {
        setControlComponentData({ activePage: pageNumber, filterData: controlComponentData.filterData })
    }

    const handleSubmitFilter = (data: CourseFilterData) => {
        setControlComponentData({ activePage: 0, filterData: data })
    }

    const getCourses = useCallback(() => {
        setIsLoading(true);
        const config: AxiosRequestConfig = {
            method: 'GET',
            url: "/courses?sort=score,desc&sort=id",
            params: {
                page: controlComponentData.activePage,
                size: 12,
                title: controlComponentData.filterData.title,
                categoryId: controlComponentData.filterData.category?.id
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
        getCourses();
    }, [getCourses])


    return (
        <>
            <section className="course-catalog">
                <div className="container">
                    <div className="course-catalog-title">
                        <h5>Procure pelos cursos da sua preferência</h5>
                        <h2>Catálogo de cursos</h2>
                    </div>

                    <div className="search-filter">
                        <CourseFilter onSubmitFilter={handleSubmitFilter} />
                    </div>


                    <div className="course-catalog-container">

                        {isLoading ? <CardLoader />  : (
                            page?.content.map((course) => (
                            <div key={course.id}>
                                <Link to={`/courses/${course.id}`}>
                                    <CourseCard course={course} />
                                </Link>
                            </div>
                        )))}

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

export default CourseCatalog;