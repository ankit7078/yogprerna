import React from 'react';
import Link from 'next/link';
import { LuChevronRight } from '../../ui/icons';
import { BreadcrumbItem } from '../../types/types';

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <nav className="flex text-sm rounded-custom" aria-label="Breadcrumb">
      <ol className="inline-flex items-center">
        <li className="inline-flex items-center">
          <Link href="/" className="inline-flex items-center font-medium text-[var(--primary-text)] hover:text-[var(--text-hover-color)]">
            Home
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={index}>
            <div className="flex items-center text-[var(--secondary-text)]">
              <LuChevronRight className="w-4 h-4 " />
              {item.href ? (
                <Link href={item.href} className=" font-medium ">
                  {item.label}
                </Link>
              ) : (
                <span className="font-medium text-white">{item.label}</span>
              )}
            </div>
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
