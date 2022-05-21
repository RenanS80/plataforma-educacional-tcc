import { useForm } from 'react-hook-form';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import './styles.css';

export type ResourceFilterData = {
    title: string
}

type Props = {
    onSubmitFilter: (data: ResourceFilterData) => void;
}

function ResourceFilter({ onSubmitFilter }: Props) {

    const { register, handleSubmit, setValue, } = useForm<ResourceFilterData>();

    const onSubmit = (formData: ResourceFilterData) => {
        onSubmitFilter(formData);
    }

    const handleFormClear = () => {
        setValue('title', '');
    }


    return (
        <div className="resource-table-search">
            <form className="resource-form" onSubmit={handleSubmit(onSubmit)}>
                <div className="resource-form-input-container">
                    <span className="icon">
                        <button className="resource-filter-button">
                            <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon" />
                        </button>
                    </span>
                    <input
                        {...register('title')}
                        type="text"
                        className="form-control"
                        placeholder="Pesquisar recursos"
                        name="title"
                    />
                </div>

                <button onClick={handleFormClear} className="btn-resource-clear-filter">Limpar filtro</button>
            </form>
        </div>
    );
}

export default ResourceFilter;