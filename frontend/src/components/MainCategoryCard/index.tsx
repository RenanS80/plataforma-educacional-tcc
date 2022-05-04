import FrontEndIcon from 'assets/img/front-end-icon.png';

import './styles.css';

function MainCategoryCard() {
    return (
        <a href="#course">
            <div className="categories-card">
                <div className="categories-card-img">
                    <img src={FrontEndIcon} alt="Front-end" />
                </div>
                <div className="categories-card-info">
                    <p>Front-end</p>
                    <p>20 cursos</p>
                </div>
            </div>
        </a>
    );
}

export default MainCategoryCard;