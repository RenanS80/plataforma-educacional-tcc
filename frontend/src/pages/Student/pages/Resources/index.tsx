import { useEffect, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { AxiosRequestConfig } from 'axios';
import { useHistory } from 'react-router-dom';
import Select from 'react-select';
import { toast } from 'react-toastify';

import { Resource } from 'types/Resource';
import { Tag } from 'types/Tag';
import { BASE_URL, requestBackend } from 'utils/requests';

import './styles.css';

function ResourceForm() {

    const history = useHistory();

    const { register, handleSubmit, control, formState: { errors } } = useForm<Resource>();

    const [selectTags, setSelectTags] = useState<Tag[]>([]);

    useEffect(() => {
        requestBackend({ url: `/tags?size=55&sort=name` })
            .then((response) => {
                setSelectTags(response.data.content);
            })
    }, [])

    const onSubmit = (formData: Resource) => {

        const data = { ...formData }

        const config: AxiosRequestConfig = {
            method: 'POST',
            url: "/resources",
            baseURL: BASE_URL,
            data: data,
            withCredentials: true           // precisa estar autenticado para fazer essa requisição
        }

        requestBackend(config)
            .then(response => {
                toast.success('Recurso cadastrado com sucesso. Visite o catálogo de recursos para visualizá-lo.');
                history.push('/student/dashboard');
            })
            .catch(() => {
                toast.error('Erro ao cadastrar o recurso.');
            })
    }

    const handleCancel = () => {
        history.push('/student/dashboard');
    }


    return (
        <div className="course-crud-container">
            <div className="course-crud-form-card">
                <h3 className="course-crud-form-title">Cadastrar um recurso</h3>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="row course-crud-inputs-container">
                        <div className="col-lg-6 course-crud-inputs-left-container">
                            <div className="margin-bottom-30">
                                <input
                                    type="text"
                                    {...register("title", {
                                        required: "Campo obrigatório",
                                    })}
                                    name="title"
                                    className={`form-control ${errors.title ? 'is-invalid' : ''}`}
                                    placeholder="Nome do Recurso"
                                />
                                <div className="invalid-feedback d-block">{errors.title?.message}</div>
                            </div>

                            <div className="margin-bottom-30">
                                <input
                                    type="text"
                                    {...register("link", {
                                        required: "Campo obrigatório",
                                    })}
                                    name="link"
                                    className={`form-control ${errors.link ? 'is-invalid' : ''}`}
                                    placeholder="Link"
                                />
                                <div className="invalid-feedback d-block">{errors.link?.message}</div>
                            </div>

                            <div className="margin-bottom-30">
                                <Controller
                                    name="tags"
                                    rules={{ required: true }}
                                    control={control}
                                    render={({ field }) => (
                                        <Select {...field}
                                            options={selectTags}
                                            classNamePrefix="course-crud-select"
                                            getOptionLabel={(tag: Tag) => tag.name}
                                            getOptionValue={(tag: Tag) => String(tag.id)}
                                            isMulti
                                            placeholder="Tags"
                                        />
                                    )}
                                />
                                {errors.tags &&
                                    <div className="invalid-feedback d-block">Campo obrigatório</div>
                                }
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div>
                                <textarea
                                    {...register("description", {
                                        required: "Campo obrigatório",
                                    })}
                                    name="description"
                                    className={`form-control ${errors.title ? 'is-invalid' : ''}`}
                                    placeholder="Descrição"
                                    rows={8}
                                />
                                <div className="invalid-feedback d-block">{errors.description?.message}</div>
                            </div>
                        </div>
                    </div>

                    <div className="course-crud-buttons-container">
                        <button className="base-btn btn-register-content">Cadastrar</button>
                        <button className="base-btn btn-cancel-content" onClick={handleCancel}>Cancelar</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ResourceForm;