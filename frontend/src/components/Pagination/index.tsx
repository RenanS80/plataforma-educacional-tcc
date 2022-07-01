import ReactPaginate from 'react-paginate';

import { ReactComponent as ArrowIcon } from 'assets/images/icons/arrow.svg';

import './styles.css';

type Props = {
    forcePage?: number
    pageCount: number,
    range: number,
    onChange?: (pageNumber: number) => void;
}


function Pagination({ forcePage, pageCount, range, onChange }: Props) {
    return (
        <ReactPaginate
            forcePage={forcePage}
            pageCount={pageCount}
            pageRangeDisplayed={range}
            marginPagesDisplayed={1}
            containerClassName="pagination-container"
            breakClassName="pagination-item"
            previousClassName="arrow-previous"
            onPageChange={(items) => (onChange) ? onChange(items.selected) : {}}
            pageLinkClassName="pagination-item arrow-active"           
            previousLabel={<div className="pagination-item"><ArrowIcon /></div>}
            nextLabel={<div className="pagination-item"><ArrowIcon /></div>}
            nextClassName="arrow-next"
            activeLinkClassName="pagination-link-active"
            disabledClassName="arrow-inactive"
        />

    );
}

export default Pagination;