import { useEffect, useState } from 'react';
import axios, { AxiosRequestConfig } from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faEye } from '@fortawesome/free-solid-svg-icons';

import { SpringPage } from 'types/Vendor/spring';
import { Resource } from 'types/Resource';
import { BASE_URL } from 'utils/requests';
import Pagination from 'components/Pagination';
import Footer from 'components/Footer';

import './styles.css';
import { formatLocalDate } from 'utils/format';

function ResourceCatalog() {


    const [page, setPage] = useState<SpringPage<Resource>>();

    useEffect(() => {
        getResources(0);
    }, [])

    const getResources = (pageNumber: number) => {
        const params: AxiosRequestConfig = {
            method: 'GET',
            url: "/resources",
            baseURL: BASE_URL,
            params: {
                page: pageNumber,
                size: 8
            }
        }
        axios(params)
            .then(response => {
                setPage(response.data);
            })
    }

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
                            <div className="resource-table-search">
                                <form action="">
                                    <div className="form-input">
                                        <span className="icon">
                                            <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon" />
                                        </span>
                                        <input
                                            type="text"
                                            placeholder="Pesquisar recursos"
                                        />
                                    </div>
                                </form>
                            </div>

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
                                                    <a href={resource.link} target="_blank" rel="noreferrer">Clique aqui</a>
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
                            pageCount={(page) ? page.totalPages : 0}
                            range={3}
                            onChange={getResources}
                        />
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}

export default ResourceCatalog;