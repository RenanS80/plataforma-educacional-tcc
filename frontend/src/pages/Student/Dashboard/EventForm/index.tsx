import { AxiosRequestConfig } from 'axios';
import { useEffect, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import Select from 'react-select';
import { toast } from 'react-toastify';
import { Category } from 'types/Category';
import { Event } from 'types/Event';
import { Resource } from 'types/Resource';
import { Tag } from 'types/Tag';
import { BASE_URL, requestBackend } from 'utils/requests';

import './styles.css';


function EventForm() {

    const history = useHistory();

    const { register, handleSubmit, control, formState: { errors } } = useForm<Event>();

    const [selectCategories, setSelectCategories] = useState<Category[]>([]);
    const [selectResources, setSelectResources] = useState<Resource[]>([]);
    const [selectTags, setSelectTags] = useState<Tag[]>([]);

    useEffect(() => {
        requestBackend({ url: `/categories?sort=name` })
            .then((response) => {
                setSelectCategories(response.data.content);
            })
    }, [])

    useEffect(() => {
        requestBackend({ url: `/resources?sort=title` })
            .then((response) => {
                setSelectResources(response.data.content);
            })
    }, [])

    useEffect(() => {
        requestBackend({ url: `/tags?size=55&sort=name` })
            .then((response) => {
                setSelectTags(response.data.content);
            })
    }, [])

    const onSubmit = (formData: Event) => {

        const data = { ...formData }

        const config: AxiosRequestConfig = {
            method: 'POST',
            url: "/events",
            baseURL: BASE_URL,
            data: data,
            withCredentials: true           // precisa estar autenticado para fazer essa requisição
        }

        requestBackend(config)
            .then(response => {
                toast.success('Evento cadastrado com sucesso');
                history.push('/student/dashboard');
            })
            .catch(() => {
                toast.error('Erro ao cadastrar o evento');
            })
    }

    const handleCancel = () => {
        history.push('/student/dashboard');
    }


    return (
        <div className="course-crud-container">
            <div className="course-crud-form-card">
                <h3 className="course-crud-form-title">Cadastrar um evento</h3>

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
                                    placeholder="Nome do Evento"
                                />
                                <div className="invalid-feedback d-block">{errors.title?.message}</div>
                            </div>

                            <div className="margin-bottom-30">
                                <Controller
                                    name="category"
                                    rules={{ required: true }}
                                    control={control}
                                    render={({ field }) => (
                                        <Select {...field}
                                            options={selectCategories}
                                            classNamePrefix="course-crud-select"
                                            getOptionLabel={(category: Category) => category.name}
                                            getOptionValue={(category: Category) => String(category.id)}
                                            placeholder="Categoria"
                                        />
                                    )}
                                />
                                {errors.category &&
                                    <div className="invalid-feedback d-block">Campo obrigatório</div>
                                }
                            </div>

                            <div className="margin-bottom-30">
                                <input
                                    type="text"
                                    {...register("platform", {
                                        required: "Campo obrigatório",
                                    })}
                                    name="platform"
                                    className={`form-control ${errors.platform ? 'is-invalid' : ''}`}
                                    placeholder="Plataforma"
                                />
                                <div className="invalid-feedback d-block">{errors.platform?.message}</div>
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
                                <label htmlFor="startDate">Data de Início</label>
                                <input
                                    type="date"
                                    {...register("startDate", {
                                        required: "Campo obrigatório",
                                    })}
                                    name="startDate"
                                    className={`form-control ${errors.startDate ? 'is-invalid' : ''}`}
                                />
                                <div className="invalid-feedback d-block">{errors.startDate?.message}</div>
                            </div>

                            <div className="margin-bottom-30">
                                <label htmlFor="endDate">Data de Fim</label>
                                <input
                                    type="date"
                                    {...register("endDate", {
                                        required: "Campo obrigatório",
                                    })}
                                    name="endDate"
                                    className={`form-control ${errors.endDate ? 'is-invalid' : ''}`}
                                />
                                <div className="invalid-feedback d-block">{errors.endDate?.message}</div>
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

                            <div className="margin-bottom-30">
                                <Controller
                                    name="resources"
                                    control={control}
                                    render={({ field }) => (
                                        <Select {...field}
                                            options={selectResources}
                                            classNamePrefix="course-crud-select"
                                            getOptionLabel={(resource: Resource) => resource.title}
                                            getOptionValue={(resource: Resource) => String(resource.id)}
                                            isMulti
                                            placeholder="Recurso"
                                        />
                                    )}
                                />
                                {errors.resources &&
                                    <div className="invalid-feedback d-block">Campo obrigatório</div>
                                }
                            </div>

                            <div className="margin-bottom-30">
                                <input
                                    type="text"
                                    {...register("image", {
                                        required: "Campo obrigatório",
                                    })}
                                    name="image"
                                    className={`form-control ${errors.platform ? 'is-invalid' : ''}`}
                                    placeholder="Link da Imagem"
                                />
                                <div className="invalid-feedback d-block">{errors.image?.message}</div>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div>
                                <textarea
                                    {...register("description", {
                                        required: "Campo obrigatório",
                                    })}
                                    name="description"
                                    className={`form-control h-auto ${errors.title ? 'is-invalid' : ''}`}
                                    placeholder="Descrição"
                                    rows={10}
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

export default EventForm;