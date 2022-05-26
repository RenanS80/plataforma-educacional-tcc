import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios, { AxiosRequestConfig } from 'axios';

import { SpringPage } from 'types/Vendor/spring';
import { Course } from 'types/Course';
import { Category } from 'types/Category';
import { BASE_URL } from 'utils/requests';
import MainCategoryCard from 'components/MainCategoryCard';
import SignUpButton from 'components/SignUpButton';
import CourseCard from 'components/CourseCard';
import Footer from 'components/Footer';
import HeroImg from 'assets/img/vector-study.svg';

import './styles.css';
import CardLoader from 'components/Loaders/CardLoader';
import CategoryCardLoader from 'components/Loaders/CategoryCardLoader';

function Home() {

    const [coursePage, setCoursePage] = useState<SpringPage<Course>>();
    const [categoryPage, setCategoryPage] = useState<SpringPage<Category>>();

    // Hook para manipular os loaders
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {

        const params: AxiosRequestConfig = {
            method: 'GET',
            url: "/courses",
            baseURL: BASE_URL,
            params: {
                page: 0,
                size: 8,
                sort: 'score,desc'
            }
        }

        setIsLoading(true);
        axios(params)
            .then(response => {
                setCoursePage(response.data);
            })
            .finally(() => {
                setIsLoading(false);
            })
    }, [])

    useEffect(() => {
        const params: AxiosRequestConfig = {
            method: 'GET',
            url: "/categories",
            baseURL: BASE_URL,
            params: {
                page: 0,
                size: 8
            }
        }

        setIsLoading(true);
        axios(params)
            .then(response => {
                setCategoryPage(response.data);
            })
            .finally(() => {
                setIsLoading(false);
            })
    }, [])


    return (
        <>
            <section className="hero-bg">
                <div className="container hero">
                    <div className="hero-title">
                        <h1>Estude o que quiser e desenvolva as suas skills</h1>
                        <p>Encontre uma variedade de cursos, eventos e materiais que combinam com a sua stack. <br />
                            Cadastre-se na plataforma para registrar novos conteúdos e enriquecer a comunidade tech.
                        </p>
                        <SignUpButton />
                    </div>

                    <div className="hero-img">
                        <img src={HeroImg} alt="Vector Study" />
                    </div>
                </div>
            </section>

            <main className="main-categories">
                <div className="container">
                    <div className="categories-title">
                        <h5>Navegue pelos cursos de cada área</h5>
                        <h2>Principais categorias</h2>
                    </div>

                    <div className="categories-card-container">
                        {isLoading ? <CategoryCardLoader /> : (
                            categoryPage?.content.map((category) => (
                                <div key={category.id}>
                                    <MainCategoryCard category={category} />
                                </div>
                            )))}
                    </div>
                </div>
            </main>

            <section className="popular-courses">
                <div className="container">
                    <div className="popular-courses-title">
                        <h5>Navegue pelos cursos com as melhores avaliações</h5>
                        <h2>Cursos mais populares</h2>
                    </div>

                    <div className="popular-courses-container">

                        {isLoading ? <CardLoader /> : (
                            coursePage?.content.map((course) => (
                                <div key={course.id}>
                                    <Link to={`/courses/${course.id}`}>
                                        <CourseCard course={course} />
                                    </Link>
                                </div>
                            )))}

                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}

export default Home;