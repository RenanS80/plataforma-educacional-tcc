import { useCallback, useEffect, useState } from 'react';
import { AxiosRequestConfig } from 'axios';
import Pagination from 'components/Pagination';
import Footer from 'components/Footer';
import ResourceFilter, { ResourceFilterData } from 'components/ResourceFilter';
import { SpringPage } from 'types/Vendor/spring';
import { Resource } from 'types/Resource';
import { requestBackend } from 'utils/requests';
import { formatLocalDate } from 'utils/format';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';

import './styles.css';

type ControlComponentData = {
    activePage: number;
    filterData: ResourceFilterData;
}

function ResourceCatalog() {

    const [page, setPage] = useState<SpringPage<Resource>>();

    const [controlComponentData, setControlComponentData] = useState<ControlComponentData>({
        activePage: 0,
        filterData: { title: "" }
    });

    const handlePageChange = (pageNumber: number) => {
        setControlComponentData({ activePage: pageNumber, filterData: controlComponentData.filterData })
    }

    const handleSubmitFilter = (data: ResourceFilterData) => {
        setControlComponentData({ activePage: 0, filterData: data })
    }


    const getResources = useCallback(() => {
        const config: AxiosRequestConfig = {
            method: 'GET',
            url: "/resources",
            params: {
                page: controlComponentData.activePage,
                size: 8,
                title: controlComponentData.filterData.title,
            }
        }

        requestBackend(config).then((response) => {
            setPage(response.data);
        })
    }, [controlComponentData])

    useEffect(() => {
        getResources();
    }, [getResources])

    return (
        <>
            <section className="resource-catalog">
                <div className="container">
                    <div className="resource-catalog-title">
                        <h5>Encontre vídeos, apostilas, artigos e muito mais da sua tecnologia favorita</h5>
                        <h2>Catálogo de recursos</h2>
                    </div>

                    <div className="resource-catalog-table">
                        <div className="resource-table-container">
                            <ResourceFilter onSubmitFilter={handleSubmitFilter} />

                            <div className="resource-table">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>Título</th>
                                            <th>Data</th>
                                            <th>Link</th>
                                            <th>Descrição</th>
                                        </tr>
                                    </thead>

                                    <tbody>

                                        {page?.content.map((resource) => (
                                            <tr key={resource.id}>
                                                <td>{`#${resource.id}`}</td>
                                                <td>{resource.title}</td>
                                                <td>{formatLocalDate(resource.registrationDate, "dd/MM/yyyy")}</td>
                                                <td>
                                                    <a 
                                                        href={resource?.link.startsWith('www') || !resource?.link.startsWith('http') || !resource?.link.startsWith('https') ?
                                                            'https://'.concat(resource?.link as string) : resource?.link} 
                                                        target="_blank" rel="noreferrer">
                                                            Clique aqui
                                                    </a>
                                                </td>

                                                <td>
                                                    <FontAwesomeIcon icon={faEye} className="search-icon" />
                                                </td>
                                            </tr>
                                        ))}

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    <div className="resource-pagination-container">
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

export default ResourceCatalog;