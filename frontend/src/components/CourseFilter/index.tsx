import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import './styles.css';
import { Controller, useForm } from 'react-hook-form';
import { Category } from 'types/Category';
import Select from 'react-select';
import { useEffect, useState } from 'react';
import { requestBackend } from 'utils/requests';

type CourseFilterData = {
    name: string,
    category: Category;
}

function CourseFilter() {

    const { register, handleSubmit, control } = useForm<CourseFilterData>();

    const [selectCategories, setSelectCategories] = useState<Category[]>([]);

    useEffect(() => {
        requestBackend({ url: `/categories` })
            .then((response) => {
                setSelectCategories(response.data.content);
            })
    }, [])

            const onSubmit = (formData: CourseFilterData) => {
                console.log('ENVIOU', formData)
            }

            return (
                <div className="base-card course-filter-container">
                    <form onSubmit={handleSubmit(onSubmit)} className="course-filter-form">
                        <div className="course-filter-name-container">
                            <input
                                {...register('name')}
                                type="text"
                                className="form-control"
                                placeholder="Pesquisar curso"
                                name="name"
                            />
                            <button className="course-filter-button">
                                <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon" />
                            </button>
                        </div>

                        <div className="course-filter-bottom-container">
                            <div className="course-filter-category-container">
                                <Controller
                                    name="category"
                                    control={control}
                                    render={({ field }) => (
                                        <Select
                                            {...field}
                                            options={selectCategories}
                                            classNamePrefix="course-filter-select"
                                            isClearable
                                            getOptionLabel={(category: Category) => category.name}
                                            getOptionValue={(category: Category) => String(category.id)}
                                            placeholder="Categoria"
                                        />
                                    )}
                                />
                            </div>
                            <button className="btn-clear-filter">Limpar<span className="btn-clear-filter-word"> Filtro</span></button>
                        </div>
                    </form>
                </div>
            );
        }

export default CourseFilter;