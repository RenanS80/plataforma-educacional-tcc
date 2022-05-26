import ContentLoader from 'react-content-loader'

import './styles.css';

function CardDetailsCenterLoader() {
    return (
        <div className="card-center-loader">
            <ContentLoader
                speed={2}
                width={400}
                height={100}
                viewBox="0 0 400 100"
                backgroundColor="#ecebeb"
                foregroundColor="#d6d2d2"
            >
                <rect x="5" y="14" rx="3" ry="3" width="350" height="40" />
                <rect x="98" y="70" rx="3" ry="3" width="150" height="40" />
            </ContentLoader>
        </div>
    )
}

export default CardDetailsCenterLoader;