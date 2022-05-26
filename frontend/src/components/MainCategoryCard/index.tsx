import { Category } from 'types/Category';

import './styles.css';

type Props = {
    category: Category;
}

function MainCategoryCard({ category } : Props) {
    return (
            <div className="categories-card">
                <div className="categories-card-img">
                    <img src={category.image} alt="Front-end" />
                </div>
                <div className="categories-card-info">
                    <p>{category.name}</p>
                </div>
            </div>
    );
}

export default MainCategoryCard;