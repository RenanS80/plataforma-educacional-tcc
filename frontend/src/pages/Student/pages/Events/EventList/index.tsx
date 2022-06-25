import { AxiosRequestConfig } from 'axios';
import CourseFilter, { CourseFilterData } from 'components/CourseFilter';
import EventFilter from 'components/EventFilter';
import Pagination from 'components/Pagination';
import CourseCard from 'pages/Student/components/CourseCard';
import { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Progress } from 'types/Progress';
import { SpringPage } from 'types/Vendor/spring';
import { requestBackend } from 'utils/requests';

import './styles.css';

type ControlComponentData = {
    activePage: number;
    filterData: CourseFilterData;
}

function EventList() {

    const [page, setPage] = useState<SpringPage<Progress>>();

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

    const getLogedCourses = useCallback(() => {

        const config: AxiosRequestConfig = {
            method: 'GET',
            url: "/progress/events",
            withCredentials: true,
            params: {
                page: controlComponentData.activePage,
                size: 5,
                title: controlComponentData.filterData.title,
                categoryId: controlComponentData.filterData.category?.id
            }
        }

        requestBackend(config)
            .then((response) => {
                setPage(response.data);
            })
    }, [controlComponentData])

    useEffect(() => {
        getLogedCourses();
    }, [getLogedCourses])


    return (
        <main className="my-courses-container">
            <div className="container">
                
            {page?.content.length! < 1 ?
                'SEM LISTA' :
                <>
                    <div className="my-courses-top">
                        <Link to="/student/events/create">
                            <button className="base-btn btn-add-content">Adicionar Evento</button>
                        </Link>
                        <EventFilter onSubmitFilter={handleSubmitFilter} />
                    </div>

                    <div className="my-courses-list">
                        {page?.content.map((course) => (
                            <div key={course.collection.id}>
                                <CourseCard
                                    image={course.collection.image}
                                    title={course.collection.title}
                                    category={course.collection.category.name}
                                    platform={course.collection.platform}
                                    status={course.status}
                                />
                            </div>
                        ))}
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