/* بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ ﷺ InshaAllah */

"use client"

import React, { FC } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/shadcn/button"


interface Props {
    currentPage?: number;
    totalPages?: number;
    onPageChange?: (page: number) => void;
}

const Pagination :FC<Props> = ({ currentPage = 1, totalPages = 10, onPageChange }) => {
    const handlePageChange = (page: number) => {
        if (onPageChange) {
          onPageChange(page);
        }
      };
    
      // Function to render page numbers with ellipsis
      const renderPageNumbers = () => {
        let pageNumbers = [];
        const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
        
        if (totalPages <= 7) {
          // If total pages is 7 or less, show all pages
          pageNumbers = pages;
        } else {
          // Always show first page
          pageNumbers.push(1);
          
          if (currentPage > 3) {
            pageNumbers.push('...');
          }
          
          // Show pages around current page
          for (let i = Math.max(2, currentPage - 1); i <= Math.min(totalPages - 1, currentPage + 1); i++) {
            pageNumbers.push(i);
          }
          
          if (currentPage < totalPages - 2) {
            pageNumbers.push('...');
          }
          
          // Always show last page
          pageNumbers.push(totalPages);
        }
        
        return pageNumbers;
      };
    
      return (
        <nav className="flex items-center justify-center space-x-2 mt-8" aria-label="Pagination">
          {/* Previous Button */}
          <Button
            variant="outline"
            size="icon"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="h-9 w-9"
            aria-label="Previous page"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
    
          {/* Page Numbers */}
          {renderPageNumbers().map((page, index) => (
            <React.Fragment key={index}>
              {page === '...' ? (
                <span className="px-3 py-2 text-muted-foreground">...</span>
              ) : (
                <Button
                  variant={currentPage === page ? "default" : "outline"}
                  size="icon"
                  onClick={() => handlePageChange(page as number)}
                  className={`h-9 min-w-[36px] ${currentPage === page ? 'bg-primary text-primary-foreground' : ''}`}
                  aria-current={currentPage === page ? 'page' : undefined}
                >
                  {page}
                </Button>
              )}
            </React.Fragment>
          ))}
    
          {/* Next Button */}
          <Button
            variant="outline"
            size="icon"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="h-9 w-9"
            aria-label="Next page"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </nav>
      )
}

export default Pagination