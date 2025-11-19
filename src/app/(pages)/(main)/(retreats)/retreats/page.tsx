import { retreatsData, getFilters } from '../../../../data/lib/retreatsData';
import RetreatList from './RetreatList';

// Define props for TypeScript, can be removed for JavaScript
// export type RetreatsPageProps = {
//   searchParams?: {
//     q?: string;
//     categories?: string;
//     difficulty?: string;
//     price?: string;
//     tags?: string;
//     page?: string;
//   };
// };

export default function RetreatsPage({ searchParams }) {
  const retreats = retreatsData; // In real app, you'd fetch this
  const filters = getFilters(retreats);

  // Get initial values from URL
  const query = searchParams?.q || '';
  const page = Number(searchParams?.page) || 1;

  return (
    <RetreatList
      retreats={retreats}
      filters={filters}
      initialQuery={query}
      initialPage={page}
    />
  );
}