import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import './styles.css';
import { Controller, useForm } from 'react-hook-form';
import { Category } from 'types/Category';
import Select from 'react-select';
import { useEffect, useState } from 'react';
import { requestBackend } from 'utils/requests';

export type CourseFilterData = {
    title: string,
    category: Category | null;
}

type Props = {
    onSubmitFilter: (data: CourseFilterData) => void;
}

function CourseFilter({ onSubmitFilter } : Props) {

    const { register, handleSubmit, setValue, getValues, control } = useForm<CourseFilterData>();

    const [selectCategories, setSelectCategories] = useState<Category[]>([]);

    const onSubmit = (formData: CourseFilterData) => {
        onSubmitFilter(formData);
    }

    const handleChangeCategory = (value: Category) => {
        setValue('category', value);

        const obj: CourseFilterData = {
            title: getValues('title'),
            category: getValues('category')
        }

        onSubmitFilter(obj);
    }

    const handleFormClear = () => {
        setValue('title', '');
        setValue('category', null);
    }

    useEffect(() => {
        requestBackend({ url: `/categories` })
            .then((response) => {
                setSelectCategories(response.data.content);
            })
    }, [])

    return (
        <div className="base-card course-filter-container">
            <form onSubmit={handleSubmit(onSubmit)} className="course-filter-form">
                <div className="course-filter-name-container">
                    <input
                        {...register('title')}
                        type="text"
                        className="form-control"
                        placeholder="Pesquisar curso"
                        name="title"
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
                                    onChange={value => handleChangeCategory(value as Category)}
                                />
                            )}
                        />
                    </div>
                    <button onClick={handleFormClear} className="btn-clear-filter">Limpar<span className="btn-clear-filter-word"> Filtro</span></button>
                </div>
            </form>
        </div>
    );
}

export default CourseFilter;