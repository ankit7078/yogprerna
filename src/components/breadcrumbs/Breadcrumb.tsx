import React from "react";

type BreadcrumbItem = {
  label: string;
  href?: string;
};

const Breadcrumb = ({ items }: { items: BreadcrumbItem[] }) => {
  return (
    <nav aria-label="breadcrumb">
      <ol className="flex space-x-2 text-gray-500">
        <li>
          <a href="/" className="hover:text-purple-600">
            Home
          </a>
        </li>
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            <span className="mx-2">/</span>
            {item.href ? (
              <a href={item.href} className="hover:text-purple-600">
                {item.label}
              </a>
            ) : (
              <span className="font-semibold text-gray-700">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;