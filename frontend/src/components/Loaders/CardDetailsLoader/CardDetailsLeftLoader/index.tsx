import ContentLoader from 'react-content-loader'

function CardDetailsLeftLoader() {
    return (
        <ContentLoader
            speed={2}
            width={500}
            height={600}
            viewBox="0 0 500 600"
            backgroundColor="#ecebeb"
            foregroundColor="#d6d2d2"
        >
            <rect x="30" y="16" rx="3" ry="3" width="450" height="250" />
            <rect x="30" y="294" rx="3" ry="3" width="450" height="250" />
        </ContentLoader>
    );
}

export default CardDetailsLeftLoader;