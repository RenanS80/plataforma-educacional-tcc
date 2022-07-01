import { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import Select from 'react-select';

import { Category } from 'types/Category';
import { requestBackend } from 'utils/requests';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import './styles.css';

export type EventFilterData = {
    title: string,
    category: Category | null;
}

type Props = {
    onSubmitFilter: (data: EventFilterData) => void;
}

function EventFilter({ onSubmitFilter } : Props) {

    const { register, handleSubmit, setValue, getValues, control } = useForm<EventFilterData>();

    const [selectCategories, setSelectCategories] = useState<Category[]>([]);

    const onSubmit = (formData: EventFilterData) => {
        onSubmitFilter(formData);
    }

    const handleChangeCategory = (value: Category) => {
        setValue('category', value);

        const obj: EventFilterData = {
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
        requestBackend({ url: `/categories?sort=name` })
            .then((response) => {
                setSelectCategories(response.data.content);
            })
    }, [])

    
    return (
        <div className="base-card event-filter-container">
            <form onSubmit={handleSubmit(onSubmit)} className="event-filter-form">
                <div className="event-filter-name-container">
                    <input
                        {...register('title')}
                        type="text"
                        className="form-control"
                        placeholder="Pesquisar evento"
                        name="title"
                    />
                    <button className="event-filter-button">
                        <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon" />
                    </button>
                </div>

                <div className="event-filter-bottom-container">
                    <div className="event-filter-category-container">
                        <Controller
                            name="category"
                            control={control}
                            render={({ field }) => (
                                <Select
                                    {...field}
                                    options={selectCategories}
                                    classNamePrefix="event-filter-select"
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

export default EventFilter;