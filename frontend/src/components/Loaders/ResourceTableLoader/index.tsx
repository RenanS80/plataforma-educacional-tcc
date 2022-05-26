import ContentLoader from 'react-content-loader'

function ResourceTableLoader() {
    return (
        <div>
            <ContentLoader
                speed={2}
                width={700}
                height={300}
                viewBox="0 0 700 300"
                backgroundColor="#ecebeb"
                foregroundColor="#d6d2d2"
            >
                <rect x="1" y="14" rx="3" ry="3" width="600" height="10" />
                <circle cx="660" cy="17" r="12" />
                <rect x="1" y="47" rx="3" ry="3" width="600" height="10" />
                <circle cx="660" cy="50" r="12" />
                <rect x="2" y="80" rx="3" ry="3" width="600" height="10" />
                <circle cx="660" cy="83" r="12" />
                <rect x="2" y="113" rx="3" ry="3" width="600" height="10" />
                <circle cx="660" cy="116" r="12" />
                <rect x="2" y="145" rx="3" ry="3" width="600" height="10" />
                <circle cx="660" cy="148" r="12" />
                <rect x="2" y="178" rx="3" ry="3" width="600" height="10" />
                <circle cx="660" cy="181" r="12" />
                <rect x="3" y="211" rx="3" ry="3" width="600" height="10" />
                <circle cx="660" cy="214" r="12" />
                <rect x="3" y="244" rx="3" ry="3" width="600" height="10" />
                <circle cx="660" cy="247" r="12" />
            </ContentLoader>
        </div>
    )
}

export default ResourceTableLoader;