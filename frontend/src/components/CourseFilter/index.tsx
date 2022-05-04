import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import './styles.css';

function CourseFilter() {

    return (
        <div className="base-card course-filter-container">
            <form action="" className="course-filter-form">
                <div className="course-filter-name">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Pesquisar curso" 
                    />
                    <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon" />
                </div>

                <div className="course-filter-bottom">
                    <div className="course-filter-category">
                        <select name="" id="">
                            <option value="">Front-end</option>
                        </select>
                    </div>
                    <button className="btn-clean-filter">Limpar filtro</button>
                </div>
            </form>
        </div>
    );
}

export default CourseFilter;