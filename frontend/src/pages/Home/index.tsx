import HeroImg from 'assets/img/vector-study.svg';

import CourseCardPopular from 'components/CourseCardPopular';
import Footer from 'components/Footer';
import MainCategories from 'components/MainCategories';
import Navbar from 'components/Navbar';
import RegisterButton from 'components/RegisterButton';

import './styles.css';

function Home() {

    return (
        <>
            <Navbar />

            <section className="hero-bg">
                <div className="container hero">
                    <div className="hero-title">
                        <h1>Estude o que quiser e desenvolva as suas skills</h1>
                        <p>Encontre uma variedade de cursos, eventos e materiais que combinam com a sua stack. <br />
                            Cadastre-se na plataforma para uma experiência completa.
                        </p>
                        <RegisterButton />
                    </div>

                    <div className="hero-img">
                        <img src={HeroImg} alt="Vector Study" />
                    </div>
                </div>
            </section>

            <MainCategories />

            <section className="popular-courses">
                <div className="container">
                    <div className="popular-courses-title">
                        <h5>Navegue pelos cursos com as melhores avaliações</h5>
                        <h2>Cursos mais populares</h2>
                    </div>

                    <div className="popular-courses-container">
                            <CourseCardPopular />
                            <CourseCardPopular />
                            <CourseCardPopular />
                            <CourseCardPopular />
                            <CourseCardPopular />
                            <CourseCardPopular />
                            <CourseCardPopular />
                            <CourseCardPopular />
                    </div>

                </div>
            </section>

            <Footer />
        </>
    );
}

export default Home;