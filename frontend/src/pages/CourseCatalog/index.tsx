import CourseCard from 'components/CourseCard';
import CourseFilter from 'components/CourseFilter';
import Footer from 'components/Footer';
import Navbar from 'components/Navbar';
import Pagination from 'components/Pagination';
import { Course } from 'types/Course';

import './styles.css';

function CourseCatalog() {

    const course: Course = {
        "id": 1,
        "title": "Desenvolvimento Web Completo 2022 - 20 cursos + 20 projetos",
        "description": "Domine Web - 20 Cursos - HTML5, CSS3, SASS, Bootstrap, JS, ES6, PHP 7, OO, MySQL, JQuery, MVC, APIs, IONIC e muito mais",
        "link": "Domine Web - 20 Cursos - HTML5, CSS3, SASS, Bootstrap, JS, ES6, PHP 7, OO, MySQL, JQuery, MVC, APIs, IONIC e muito mais",
        "platform": "Udemy",
        "image": "https://ik.imagekit.io/zqxyh6u3ylz/TCC/Cursos/Desenvolvimento_Web_OVglFCGQN.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1651008193011",
        "score": 4.0,
        "count": 1,
        "category": {
            "id": 3,
            "name": "Full Stack",
            "image": "https://ik.imagekit.io/zqxyh6u3ylz/TCC/Categorias/Full_Stack_owd1-cMo0.png?ik-sdk-version=javascript-1.4.3&updatedAt=1651610753192"
        },
        "tags": [
            {
                "id": 3,
                "name": "SASS"
            },
            {
                "id": 2,
                "name": "CSS"
            },
            {
                "id": 1,
                "name": "HTML"
            },
            {
                "id": 9,
                "name": "Javascript"
            },
            {
                "id": 6,
                "name": "Bootstrap"
            },
            {
                "id": 30,
                "name": "MySQL"
            }
        ],
        "resources": [
            {
                "id": 1,
                "title": "Caelum Estruturação de Páginas Usando HTML e CSS",
                "description": "Apostila que visa ensinar de uma maneira elegante, mostrando apenas o que é necessário e quando é necessário, no momento certo, poupando o leitor de assuntos que não costumam ser de seu interesse em determinadas fases do aprendizado",
                "link": "https://www.caelum.com.br/apostila/apostila-html-css-javascript.pdf",
                "registrationDate": "2022-01-01",
                "tags": []
            },
            {
                "id": 2,
                "title": "Playlist de aulas HTML5 e CSS3",
                "description": "A playlist de HTML5 e CSS3 vai ensinar a criar sites usando a linguagem de marcação hipertexto (HTML) e  folhas de estilo em cascata (CSS), todas em suas versões mais recentes. Neste curso, o Professor Gustavo Guanabara criou um conjunto de vídeos, exercícios e desafios como forma de fixar os conhecimento aprendido",
                "link": "https://www.youtube.com/watch?v=Ejkb_YpuHWs&list=PLHz_AreHm4dkZ9-atkcmcBaMZdmLHft8n",
                "registrationDate": "2021-10-05",
                "tags": []
            }
        ],
        "registrationDate": "2022-02-18"
    }

    return (
        <>
            <Navbar />

            <section className="course-catalog">
                <div className="container">
                    <div className="course-catalog-title">
                        <h5>Procure pelos cursos da sua preferência</h5>
                        <h2>Catálogo de cursos</h2>
                    </div>

                    <div className="search-filter">
                        <CourseFilter />
                    </div>


                    <div className="course-catalog-container">
                        <CourseCard course={course} />
                        <CourseCard course={course} />
                        <CourseCard course={course} />
                        <CourseCard course={course} />
                        <CourseCard course={course} />
                        <CourseCard course={course} />
                        <CourseCard course={course} />
                        <CourseCard course={course} />
                    </div>

                    <div className="course-pagination-container">
                        <Pagination />
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}

export default CourseCatalog;