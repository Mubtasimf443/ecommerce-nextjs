/*
بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ InshaAllah
*/

import React from 'react';

interface SortOption {
  value: string;
  label: string;
}

interface SortFilterProps {
  sortBy: string;
  onSortChange: (sortBy: string) => void;
  options: SortOption[];
}

const SortFilter: React.FC<SortFilterProps> = ({ sortBy, onSortChange, options }) => {
  return (
    <div className="flex items-center">
      <label htmlFor="sort" className="text-sm font-medium text-gray-700 mr-2">
        Sort by:
      </label>
      <select
        id="sort"
        value={sortBy}
        onChange={(e) => onSortChange(e.target.value)}
        className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SortFilter;
