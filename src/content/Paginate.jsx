import React from 'react';
import '../index.css';

const Paginate = ({ totalPages, currentPage, onPageChange }) => {
  // Generate an array of page numbers
  const pageNumbers = Array.from(
    { length: totalPages },
    (_, index) => index + 1
  );

  const handlePageClick = (pageNumber) => {
    onPageChange(pageNumber);
  };

  return (
    <nav className='paginate'>
      <ul className='flex'>
        {/* Previous Page */}
        <li className='page-item'>
          <button
            disabled={currentPage === 1}
            className='border-2 rounded-md px-4 py-2 text-red-950 hover:bg-red-950 hover:text-white'
            onClick={() => handlePageClick(currentPage - 1)}
          >
            Previous
          </button>
        </li>

        {/* Page Numbers */}
        {pageNumbers.map((pageNumber) => (
          <li
            key={pageNumber}
            className={`text-red-950 focus:text-white ${
              currentPage === pageNumber ? 'active' : ''
            } page-item`}
          >
            <button
              onClick={() => handlePageClick(pageNumber)}
              className='border-2 rounded-md px-4 py-2 hover:bg-red-950 hover:text-white'
            >
              {pageNumber}
            </button>
          </li>
        ))}

        {/* Next Page */}
        <li className='page-item'>
          <button
            disabled={currentPage === totalPages}
            className='border-2 rounded-md px-4 py-2 text-red-950 hover:bg-red-950 hover:text-white'
            onClick={() => handlePageClick(currentPage + 1)}
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Paginate;
