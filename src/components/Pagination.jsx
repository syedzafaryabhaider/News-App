const Pagination = ({ page, setPage, totalResults, pageSize }) => {
  const totalPages = Math.ceil(totalResults / pageSize);

  return (
    <div className="mt-20 flex justify-center">
      <button
        onClick={() => setPage(page - 1)}
        disabled={page === 1}
        className="px-4 py-2 bg-buttons-color rounded-l-md"
      >
        Previous
      </button>
      <span className="px-4 py-2 bg-gray-400 dark:bg-gray-600">
        {page} of {totalPages}
      </span>
      <button
        onClick={() => setPage(page + 1)}
        disabled={page === totalPages}
        className="px-4 py-2 bg-buttons-color rounded-r-md"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
