import axios, { AxiosRequestConfig } from 'axios';
import { useEffect, useState } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import { CollectionStatus } from 'types/CollectionStatus';
import { Course } from 'types/Course';
import { BASE_URL } from 'utils/requests';
import { getAuthData } from 'utils/storage';

import './styles.css';

type ParamsType = {
    courseId: string;
}

function CourseProgressCard() {

    const history = useHistory();
    
    const { courseId } = useParams<ParamsType>();

    const [course, setCourse] = useState<Course>();

    const authData = getAuthData();

    useEffect(() => {
        axios.get(`${BASE_URL}/courses/${courseId}`)
            .then(response => {
                setCourse(response.data)
            })
    }, [courseId]);


    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const status = (event.target as any).status.value;
        const score = (event.target as any).score.value;

        const config: AxiosRequestConfig = {
            baseURL: BASE_URL,
            method: 'PUT',
            url: '/progress',
            data: {
                collectionId: courseId,
                userId: authData.userId,
                score: score,
                status: status
            },
            withCredentials: true           // precisa estar autenticado para fazer essa requisição
        }

        axios(config).then(response => {
            toast.success('Curso avaliado com sucesso.')
            history.push("/student/courses")
        })
    }


    return (
        <div className="progress-form-container">
            <img className="progress-form-card-image" src={course?.image} alt={course?.title} />
            <div className="progress-card-bottom-container">
                <h5>{course?.title}</h5>

                <form className="progress-form" onSubmit={handleSubmit}>
                    <div className="form-group progress-form-group">
                        <label htmlFor="status">Status do curso</label>
                        <select className="form-control form-select" id="status">
                            <option disabled selected hidden>Selecione...</option>
                            <option>{CollectionStatus[0]}</option>
                            <option>{CollectionStatus[1]}</option>
                        </select>
                    </div>
                    <div className="form-group progress-form-group">
                        <label htmlFor="score">Informe a sua avaliação</label>
                        <select className="form-control form-select" id="score">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </div>
                    <div className="progress-form-btn-container">
                        <button type="submit" className="progress-btn btn-save">Salvar</button>
                    </div>
                </form >

                <Link to="/student/courses">
                    <button className="progress-btn btn-cancel mt-3">Cancelar</button>
                </Link>
            </div >
        </div >
    );
}

export default CourseProgressCard;