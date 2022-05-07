import FrontEndIcon from 'assets/img/front-end-icon.png';
import { Category } from 'types/Category';

import './styles.css';

type Props = {
    category: Category;
}

function MainCategoryCard({ category } : Props) {
    return (
        <a href="#course">
            <div className="categories-card">
                <div className="categories-card-img">
                    <img src={FrontEndIcon} alt="Front-end" />
                </div>
                <div className="categories-card-info">
                    <p>{category.name}</p>
                    <p>20 cursos</p>
                </div>
            </div>
        </a>
    );
}

export default MainCategoryCard;