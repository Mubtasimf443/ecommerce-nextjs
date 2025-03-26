/*
بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ InshaAllah
*/

"use client"
import React from 'react';
import ReactPaginate from 'react-paginate';
import './CetegoryPagination.css';




export function CetegoryPagination({ itemsPerPage, items , updatePage}: { itemsPerPage: number, items: any[], updatePage: React.Dispatch<React.SetStateAction<number>> }) {

    const pageCount = Math.ceil(items.length / itemsPerPage);
  
    // Invoke when user click to request another page.
    function handlePageClick(event: any) {
      updatePage(event.selected)
    };
  
    return (
      <ReactPaginate
        breakLabel="..."
        containerClassName='pagination'
        activeClassName={'activePagination'}
        onPageChange={handlePageClick}
        pageRangeDisplayed={1}
        pageCount={pageCount}
        renderOnZeroPageCount={null}
      />
    );
  }
