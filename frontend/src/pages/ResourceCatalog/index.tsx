import { useCallback, useEffect, useState } from 'react';
import { AxiosRequestConfig } from 'axios';

import { SpringPage } from 'types/Vendor/spring';
import { Resource } from 'types/Resource';
import { requestBackend } from 'utils/requests';
import { formatLocalDate } from 'utils/format';

import ResourceTableLoader from 'components/Loaders/ResourceTableLoader';
import ResourceFilter, { ResourceFilterData } from 'components/ResourceFilter';
import Modal from 'components/Modal';
import Pagination from 'components/Pagination';
import Footer from 'components/Footer';

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

    // Hook para manipular os loaders
    const [isLoading, setIsLoading] = useState(false);

    // Hooks para manipulação do modal
    const [modal, setModal] = useState(false)
    const [tempData, setTempData] = useState<string[]>([])


    const handlePageChange = (pageNumber: number) => {
        setControlComponentData({ activePage: pageNumber, filterData: controlComponentData.filterData })
    }

    const handleSubmitFilter = (data: ResourceFilterData) => {
        setControlComponentData({ activePage: 0, filterData: data })
    }

    const getModalData = (description: string, link: string) => {
        let tempData = [description, link]
        setTempData(resource => ['1', ...tempData])

        return setModal(true)
    }

    const getResources = useCallback(() => {
        setIsLoading(true);
        const config: AxiosRequestConfig = {
            method: 'GET',
            url: "/resources",
            params: {
                page: controlComponentData.activePage,
                size: 8,
                title: controlComponentData.filterData.title,
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

                                        {isLoading ? <ResourceTableLoader /> : (
                                            page?.content.map((resource, key) => (
                                                <tr key={key}>
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
                                                        <button className="resource-view-description" onClick={() => getModalData(resource.description, resource.link)}>
                                                            <FontAwesomeIcon icon={faEye} className="search-icon" />
                                                        </button>
                                                    </td>
                                                </tr>
                                            )))}

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    {modal === true ? 
                        <Modal 
                            description={tempData[1]} 
                            link={tempData[2]} 
                            onClose={() => setModal(false)} 
                        /> : ''
                    }

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