import React, { useEffect, useState } from 'react';
import '../index.css';

const Paginate = ({ totalPages, currentPage, setCurrentPage }) => {
  const pageNumbers = [...Array(totalPages + 1).keys()].slice(1);

  const nextPage = () => {
    if (currentPage !== totalPages) setCurrentPage((prevPage) => prevPage + 1);
  };

  const prevPage = () => {
    if (currentPage !== 1) setCurrentPage((prevPage) => prevPage - 1);
  };

  return (
    <nav className='paginate'>
      <ul className='flex'>
        {/* Previous Page */}
        <li className='page-item'>
          <button
            disabled={currentPage === 1}
            className='border-2 rounded-md px-4 py-2 text-red-950 hover:bg-red-950 hover:text-white'
            onClick={prevPage}
          >
            Previous
          </button>
        </li>
        {/* Page Numbers */}
        {pageNumbers.map((pgNumber) => (
          <li
            key={pgNumber}
            className={`text-red-950 focus:text-white ${
              currentPage === pgNumber ? 'active' : ''
            } page-item`}
          >
            <button
              onClick={() => setCurrentPage(pgNumber)}
              className='border-2 rounded-md px-4 py-2 hover:bg-red-950 hover:text-white'
            >
              {pgNumber}
            </button>
          </li>
        ))}
        {/* Next Page */}
        <li className='page-item'>
          <button
            disabled={currentPage === totalPages}
            className='border-2 rounded-md px-4 py-2 text-red-950 hover:bg-red-950 hover:text-white'
            onClick={nextPage}
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Paginate;