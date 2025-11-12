import React from 'react';

interface InputGroupProps {
  label: string;
  id: string;
  type?: string;
  defaultValue?: string;
  placeholder?: string;
}

const InputGroup: React.FC<InputGroupProps> = ({ 
  label, 
  id, 
  type = 'text', 
  defaultValue = '',
  placeholder = ''
}) => (
  <div>
    <label htmlFor={id} className="block text-sm font-medium text-gray-300 mb-2">
      {label}
    </label>
    <input
      type={type}
      id={id}
      defaultValue={defaultValue}
      placeholder={placeholder}
      className="w-full bg-gray-800 border border-gray-700 text-white rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
    />
  </div>
);

export default InputGroup;