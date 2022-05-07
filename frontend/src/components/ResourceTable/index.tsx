import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faEye } from '@fortawesome/free-solid-svg-icons';


import './styles.css';
import { useEffect, useState } from 'react';
import { SpringPage } from 'types/Vendor/spring';
import { Resource } from 'types/Resource';
import { AxiosParams } from 'types/Vendor/axios';
import { BASE_URL } from 'utils/requests';
import axios from 'axios';

function ResourceTable() {

    const [page, setPage] = useState<SpringPage<Resource>>();

    useEffect(() => {

        const params: AxiosParams = {
            method: 'GET',
            url: `${BASE_URL}/resources`,
            params: {
                page: 0,
                size: 8
            }
        }

        axios(params)
            .then(response => {
                setPage(response.data);
            })
    }, [])

    return (
        <div className="resource-table-container">
            <div className="resource-table-search">
                <form action="">
                    <div className="form-input">
                        <span className="icon">
                            <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon" />
                        </span>
                        <input
                            className=""
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
                                <td>{resource.registrationDate}</td>
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
    );
}

export default ResourceTable;