import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { matchesMultiWordSearch } from "../utils/filterUtils";

// Add a default value to items to prevent crashes
const CheckboxFilter = ({ items = [], filterType, selectedItems, onFilterChange }) => {
  const [searchTerm, setSearchTerm] = useState("");
  
  // Now, even if items is undefined, it will default to [] and .filter() will not crash.
  const filteredItems = items.filter((item) => matchesMultiWordSearch(item.name, searchTerm));

  return (
    <div className="space-y-2">
      <div className="relative">
        <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none z-10" />
        <input
          type="text"
          placeholder={`Search ${filterType}...`}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          autoComplete="off"
          spellCheck="false"
          className="w-full pl-9 pr-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 focus:outline-none bg-white relative z-0 transition-all duration-200"
        />
      </div>
      <div className="max-h-48 overflow-y-auto space-y-2 hide-scrollbar">
        {filteredItems.length > 0 ? (
          filteredItems.map((item) => (
            <label key={item.name} className="flex items-center justify-between cursor-pointer group hover:bg-gray-50 p-1 rounded transition-colors">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  checked={selectedItems.includes(item.name)}
                  onChange={() => onFilterChange(filterType, item.name)}
                  className="w-4 h-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500 cursor-pointer"
                />
                <span className="ml-2 text-sm text-gray-700 group-hover:text-purple-600 transition-colors cursor-pointer">
                  {item.name}
                </span>
              </div>
              <span className="text-xs text-gray-500">({item.count})</span>
            </label>
          ))
        ) : (
          <div className="text-sm text-gray-500 text-center py-4">
            No options found
          </div>
        )}
      </div>
    </div>
  );
};

export default CheckboxFilter;