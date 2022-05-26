import ContentLoader from 'react-content-loader'

function CardDetailsRightLoader() {
    return (
        <>
            <ContentLoader
                speed={2}
                width={500}
                height={600}
                viewBox="0 0 500 600"
                backgroundColor="#ecebeb"
                foregroundColor="#d6d2d2"
            >
                <rect x="30" y="16" rx="3" ry="3" width="450" height="80" />
                <rect x="30" y="118" rx="3" ry="3" width="450" height="40" />
                <rect x="30" y="177" rx="3" ry="3" width="450" height="40" />
                <rect x="30" y="233" rx="3" ry="3" width="450" height="40" />
                <rect x="30" y="292" rx="3" ry="3" width="450" height="40" />
            </ContentLoader>
        </>
    )
}

export default CardDetailsRightLoader;