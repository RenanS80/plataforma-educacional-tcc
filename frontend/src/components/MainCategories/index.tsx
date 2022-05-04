import FrontEndIcon from 'assets/img/front-end-icon.png';

import './styles.css';

function MainCategories() {
    return (
        <main className="main-categories">
            <div className="container">
                <div className="categories-title">
                    <h5>Navegue pelos cursos de cada área</h5>
                    <h2>Principais categorias</h2>
                </div>

                <div className="categories-card-container">
                    <a href="#c">
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
                    <a href="#c">
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
                    <a href="#c">
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
                    <a href="#c">
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
                    <a href="#c">
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
                    <a href="#c">
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
                    <a href="#c">
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
                    <a href="#c">
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
                </div>
            </div>
        </main>
    );
}

export default MainCategories;