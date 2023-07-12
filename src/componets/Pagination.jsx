import { useState, useEffect} from "react";
import "./styles/Pagination.css" 

const Pagination = ({ perPage, page, setPage, totalCards }) => {
  const [disableNext, setDisableNext] = useState(false);
  const [disablePrevious, setDisablePrevious] = useState(false);
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalCards / perPage); i++) {
    pageNumbers.push(i);
  };

  const [visiblePageNumbers, setVisiblePageNumbers] = useState(pageNumbers.slice(0, 5))

  const onPreviousPage = () => {
    const previousPage = page - 1;
  if (!visiblePageNumbers.includes(previousPage) && previousPage > 0) {
    const startIndex = pageNumbers.indexOf(previousPage);
    setVisiblePageNumbers(pageNumbers.slice(startIndex, startIndex + 5));
  }
  setPage(previousPage)
  };

  const onNextPage = () => {
    const nextPage = page + 1;
    if (!visiblePageNumbers.includes(nextPage) && nextPage <= pageNumbers.length) {
      const startIndex = pageNumbers.indexOf(nextPage) - 4;
      setVisiblePageNumbers(pageNumbers.slice(startIndex, startIndex + 5));
    }
    setPage(nextPage);
  };

  const onSpecificPage = (x) => {
    setPage(x);
  };

  useEffect(() => {
    if (page >= pageNumbers.length) {
        setDisableNext(true)
    }else{
        setDisableNext(false)
    }

    if (page === 1) {
        setDisablePrevious(true)
    }else{
        setDisablePrevious(false)
    }
  }, [page, pageNumbers.length])
  
  console.log(pageNumbers)
  return (
    <nav
      className="pagination is-centered"
      role="navigation"
      aria-label="pagination"
    >
      <button className="pagination-previous" disabled={disablePrevious} onClick={onPreviousPage} >
        Previous
      </button>
      <button className="pagination-next" disabled={disableNext} onClick={onNextPage}>
        Next page
      </button>
      <ul className="pagination-list">
        {visiblePageNumbers.map((i) => (
          <li key={i}>
            <a
              className={`pagination-link ${i === page ?'is-current' : ""}`} onClick={() => onSpecificPage(i)}>{i}</a>

          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
