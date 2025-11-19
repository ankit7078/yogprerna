'use client'
import React, { useState } from "react";
import { matchesMultiWordSearch } from "../utils/filterUtils";
import { InputGroup } from "../../../../../../common/FormComponents";

const CheckboxFilter = ({ items = [], filterType, selectedItems, onFilterChange }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredItems = items.filter((item) => matchesMultiWordSearch(item.name, searchTerm));

  return (
    <div className="space-y-2">
      <div className="relative">
        <InputGroup
          type="text"
          placeholder={`Search ${filterType}...`}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          autoComplete="off"
          spellCheck="false"
        />
      </div>
      <div className="max-h-48 overflow-y-auto p-1 space-y-2 hide-scrollbar">
        {filteredItems.length > 0 ? (
          filteredItems.map((item) => (
            <label key={item.name} className="flex items-center justify-between cursor-pointer group hover:bg-[var(--secondary-bg)] rounded transition-colors">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  checked={selectedItems.includes(item.name)}
                  onChange={() => onFilterChange(filterType, item.name)}
                  className="w-3 h-3 cursor-pointer"
                />
                <span className="ml-2 paragraph group-hover:text-[var(--text-hover-color)] transition-colors cursor-pointer">
                  {item.name}
                </span>
              </div>
              <span className="text-xs">({item.count})</span>
            </label>
          ))
        ) : (
          <div className="text-[var(--secondary-text)] text-center py-4">
            No options found
          </div>
        )}
      </div>
    </div>
  );
};

export default CheckboxFilter;