import Navbar from 'components/Navbar';
import ResourceTable from 'components/ResourceTable';
import Pagination from 'components/Pagination';
import Footer from 'components/Footer';

import './styles.css';

function ResourceCatalog() {

    return (
        <>
            <Navbar />

            <section className="resource-catalog">
                <div className="container">
                    <div className="resource-catalog-title">
                        <h5>Encontre vídeos, apostilas, artigos e muito mais da sua tecnologia favorita</h5>
                        <h2>Catálogo de recursos</h2>
                    </div>

                    <div className="resource-catalog-table">
                        <ResourceTable />
                    </div>

                    <div className="resource-pagination-container">
                        <Pagination />
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}

export default ResourceCatalog;