import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import React from 'react';

const SearchBar = () => {
  return (
    <div className="flex items-center p-2 mx-2 my-6 border border-gray-300 rounded-lg">
      <MagnifyingGlassIcon className="w-4 mr-2" />
      <input type="text" className="p-0 border-0 flex-grow" placeholder="Search" />
    </div>
  );
};

export default SearchBar;
