/*
بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ InshaAllah
*/

import React ,{useState } from 'react'
import ReactPaginate from 'react-paginate';
import { number } from 'yup';



interface PaginationProps {
    totalItems: number;
    itemsPerPage: number;
    initialPage: number;
    onPageChange: React.Dispatch<React.SetStateAction<number>>;
}

function SearchPagePagination ({ totalItems, itemsPerPage = 12,onPageChange, initialPage = 0}: PaginationProps) {
  const [currentPage, setCurrentPage] = useState(initialPage);
  const pageCount = Math.ceil(totalItems / itemsPerPage);
  
  const handlePageClick = (event: { selected: number }) => {
    const newPage = event.selected;
    setCurrentPage(newPage);
    onPageChange(newPage);
  };

  return (
    <div className="pagination-container mt-8 mb-4">
      <ReactPaginate
        previousLabel={'← Previous'}
        nextLabel={'Next →'}
        breakLabel={'...'}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={3}
        onPageChange={handlePageClick}
        forcePage={currentPage}
        containerClassName={'flex list-none justify-center items-center gap-1'}
        pageClassName={'inline-block'}
        pageLinkClassName={'px-3 py-1 border border-gray-300 rounded hover:bg-gray-100 text-gray-700 cursor-pointer'}
        previousClassName={'inline-block'}
        previousLinkClassName={'px-3 py-1 border border-gray-300 rounded hover:bg-gray-100 text-gray-700 cursor-pointer'}
        nextClassName={'inline-block'}
        nextLinkClassName={'px-3 py-1 border border-gray-300 rounded hover:bg-gray-100 text-gray-700 cursor-pointer'}
        breakClassName={'inline-block'}
        breakLinkClassName={'px-3 py-1 text-gray-700'}
        activeClassName={'active-page'}
        activeLinkClassName={'bg-blue-500 text-white border-blue-500 hover:bg-blue-600'}
        disabledClassName={'opacity-50 cursor-not-allowed'}
      />
      
      <div className="text-center text-gray-500 text-sm mt-2">
        Showing page {currentPage + 1} of {pageCount}
        {totalItems > 0 && ` (${totalItems} total items)`}
      </div>
    </div>
  );
};

export default SearchPagePagination;
