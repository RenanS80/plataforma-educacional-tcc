import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

import './styles.css';

function Pagination() {

    return (
        <div className="pagination-container">
            <FontAwesomeIcon icon={faChevronLeft} className="arrow-inactive" />

            <div className="pagination-item active">1</div>
            <div className="pagination-item">2</div>
            <div className="pagination-item">3</div>
            <div className="pagination-item">...</div>
            <div className="pagination-item">10</div>

            <FontAwesomeIcon icon={faChevronRight} className="arrow-next arrow-active" />
        </div>
    );
}

export default Pagination;