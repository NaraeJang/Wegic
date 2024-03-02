import { useCommentContext } from '../componenets/Comment';

const CommentPagination = () => {
  const { getLocalStorage, itemsPerPage, currentPage, setCurrentPage } =
    useCommentContext();

  // Calculate the total number of pages
  const numOfPages = Math.ceil(getLocalStorage.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const addPageButton = ({ pageNumber, activeClass }) => {
    return (
      <button
        type="button"
        key={pageNumber}
        className={` btn-page ${activeClass && 'active'}`}
        onClick={() => handlePageChange(pageNumber)}>
        {pageNumber}
      </button>
    );
  };

  const renderPageButtons = () => {
    const pageButtons = [];

    // Render the first page button
    pageButtons.push(
      addPageButton({
        pageNumber: 1,
        activeClass: currentPage === 1,
        key: 'page-1',
      })
    );

    // Render dots if currentPage is greater than 3
    if (currentPage > 3) {
      pageButtons.push(
        <span className="btn-page dots" key="dots-1">
          ...
        </span>
      );
    }

    // Render buttons for the range (currentPage - 1) to (currentPage + 1)
    for (
      let i = Math.max(2, currentPage - 1);
      i <= Math.min(numOfPages - 1, currentPage + 1);
      i++
    ) {
      pageButtons.push(
        addPageButton({
          pageNumber: i,
          activeClass: i === currentPage,
          key: `page-${i}`,
        })
      );
    }

    // Render dots if currentPage is less than (numOfPages - 2)
    if (currentPage < numOfPages - 2) {
      pageButtons.push(
        <span className="btn-page dots" key="dots+1">
          ...
        </span>
      );
    }

    // Render the last page button
    if (numOfPages > 1) {
      pageButtons.push(
        addPageButton({
          pageNumber: numOfPages,
          activeClass: currentPage === numOfPages,
          key: `page-${numOfPages}`,
        })
      );
    }

    return pageButtons;
  };

  return (
    <div className="container pagination">
      <button
        type="button"
        className=" btn-prev"
        onClick={() => {
          let prevPage = currentPage - 1;
          if (prevPage < 1) prevPage = numOfPages;
          handlePageChange(prevPage);
        }}>
        <i className="fa-solid fa-chevron-left"></i>
      </button>
      <div className="page-btn-container">{renderPageButtons()}</div>
      <button
        type="button"
        className="btn-next"
        onClick={() => {
          let nextPage = currentPage + 1;
          if (nextPage > numOfPages) nextPage = 1;
          handlePageChange(nextPage);
        }}>
        <i className="fa-solid fa-chevron-right"></i>
      </button>
    </div>
  );
};
export default CommentPagination;
