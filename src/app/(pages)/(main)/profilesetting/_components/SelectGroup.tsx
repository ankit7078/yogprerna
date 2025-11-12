import React from 'react';
import { FiChevronDown } from 'react-icons/fi';

interface SelectGroupProps {
  label: string;
  id: string;
  options: string[];
  defaultValue: string;
}

const SelectGroup: React.FC<SelectGroupProps> = ({ 
  label, 
  id, 
  options, 
  defaultValue 
}) => (
  <div>
    <label htmlFor={id} className="block text-sm font-medium text-gray-300 mb-2">
      {label}
    </label>
    <div className="relative">
      <select
        id={id}
        defaultValue={defaultValue}
        className="w-full text-xs bg-gray-800 border border-gray-700 text-white rounded-lg p-3 appearance-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
      >
        {options.map((option) => (
          <option key={option} value={option}>{option}</option>
        ))}
      </select>
      <FiChevronDown className="w-4 h-4 text-gray-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
    </div>
  </div>
);

export default SelectGroup;