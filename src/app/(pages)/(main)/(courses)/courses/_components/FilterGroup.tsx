"use client";

import React, { useState, useMemo } from 'react';
import { FilterItem, FilterGroupKey } from '@/types';
import { InputGroup } from '@/common/FormComponents';

type Props = {
  title: string;
  groupKey: FilterGroupKey;
  items: FilterItem[];
  activeItems: string[];
  toggleItem: (group: FilterGroupKey, filterId: string) => void;
  searchPlaceholder: string;
};

export default function FilterGroup({
  title,
  groupKey,
  items,
  activeItems,
  toggleItem,
  searchPlaceholder,
}: Props) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredItems = useMemo(() => {
    return items.filter(item =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [items, searchTerm]);

  return (
    <div className="rounded-custom bg-[var(--primary-bg)] shadow-custom p-5">
      <div className="">
        <h3 className="font-semibold sub-heading text-[var(--secondary-text)]">{title}</h3>
      </div>
      <div className="">
        <div className="relative my-2">
          <InputGroup
            type='text'
            placeholder={searchPlaceholder}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="space-y-1">
          {filteredItems.map(item => (
            <label
              key={item.id}
              className="flex items-center gap-2 cursor-pointer p-1 rounded-custom hover:bg-[var(--secondary-bg)] hover:text-[var(--secondary-text)] text-[var(--primary-text)] transition-colors"
            >
              <input
                type="checkbox"
                checked={activeItems.includes(item.id)}
                onChange={() => toggleItem(groupKey, item.id)}
                className="h-3 w-3 rounded-custom border-[var(--primary-border)]"
              />
              <p className="flex-1">{item.name}</p>
              <p>({item.count})</p>
            </label>
          ))}
          {filteredItems.length === 0 && (
            <p className="p-2">No matches found.</p>
          )}
        </div>
      </div>
    </div>
  );
}