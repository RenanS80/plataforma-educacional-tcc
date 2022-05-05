import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faEye } from '@fortawesome/free-solid-svg-icons';


import './styles.css';

function ResourceTable() {
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
                            <th>Tags</th>
                            <th>Descrição</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>#1</td>
                            <td>Caelum Estruturação de Páginas Usando HTML e CSS</td>
                            <td>01/01/2022</td>
                            <td>
                                <a href="#link" target="_blank">Clique aqui</a>
                            </td>
                            <td>#html #css</td>
                            <td>
                                <FontAwesomeIcon icon={faEye} className="search-icon" />
                            </td>
                        </tr>
                        <tr>
                            <td>#2</td>
                            <td>Playlist de aulas HTML5 e CSS3</td>
                            <td>10/08/2021</td>
                            <td>
                                <a href="#link" target="_blank">Clique aqui</a>
                            </td>
                            <td>#html #css</td>
                            <td>
                                <FontAwesomeIcon icon={faEye} className="search-icon" />
                            </td>
                        </tr>
                        <tr>
                            <td>#3</td>
                            <td>Ebook Python Eficiente</td>
                            <td>01/01/2022</td>
                            <td>
                                <a href="#link" target="_blank">Clique aqui</a>
                            </td>
                            <td>#python</td>
                            <td>
                                <FontAwesomeIcon icon={faEye} className="search-icon" />
                            </td>
                        </tr>
                        <tr>
                            <td>#4</td>
                            <td>Documentação SAP</td>
                            <td>10/08/2021</td>
                            <td>
                                <a href="#link" target="_blank">Clique aqui</a>
                            </td>
                            <td>#sap</td>
                            <td>
                                <FontAwesomeIcon icon={faEye} className="search-icon" />
                            </td>
                        </tr>
                        <tr>
                            <td>#5</td>
                            <td>Caelum Estruturação de Páginas Usando HTML e CSS</td>
                            <td>10/08/2021</td>
                            <td>
                                <a href="#link" target="_blank">Clique aqui</a>
                            </td>
                            <td>#html #css</td>
                            <td>
                                <FontAwesomeIcon icon={faEye} className="search-icon" />
                            </td>
                        </tr>
                        <tr>
                            <td>#6</td>
                            <td>Caelum Estruturação de Páginas Usando HTML e CSS</td>
                            <td>10/08/2021</td>
                            <td>
                                <a href="#link" target="_blank">Clique aqui</a>
                            </td>
                            <td>#html #css</td>
                            <td>
                                <FontAwesomeIcon icon={faEye} className="search-icon" />
                            </td>
                        </tr>
                        <tr>
                            <td>#7</td>
                            <td>Playlist de aulas HTML5 e CSS3</td>
                            <td>10/08/2021</td>
                            <td>
                                <a href="#link" target="_blank">Clique aqui</a>
                            </td>
                            <td>#html #css</td>
                            <td>
                                <FontAwesomeIcon icon={faEye} className="search-icon" />
                            </td>
                        </tr>
                        <tr>
                            <td>#8</td>
                            <td>Playlist de aulas HTML5 e CSS3</td>
                            <td>10/08/2021</td>
                            <td>
                                <a href="#link" target="_blank">Clique aqui</a>
                            </td>
                            <td>#html #css</td>
                            <td>
                                <FontAwesomeIcon icon={faEye} className="search-icon" />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>
    );
}

export default ResourceTable;